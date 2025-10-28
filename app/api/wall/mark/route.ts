import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { getUserHash } from '@/lib/ip-hash'
import { assignRandomFreeCoordinate, Coordinate } from '@/lib/coordinate-assignment'
import { validateContent, generateAnonymousHandle } from '@/lib/content-filter'
import sharp from 'sharp'

const WALL_CAPACITY = 100
const MAX_IMAGE_SIZE = 512 // pixels
const MAX_FILE_SIZE = 200 * 1024 // 200KB

interface MarkRequest {
  handle: string
  content_type: 'text' | 'image'
  text_content?: string | null
  image_b64?: string | null
}

/**
 * POST /api/wall/mark
 * Creates a new mark on The Wall
 */
export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient()

    // Parse request body
    const body: MarkRequest = await request.json()
    let { handle, content_type, text_content, image_b64 } = body

    // Generate anonymous handle if empty
    if (!handle || handle.trim().length === 0) {
      handle = generateAnonymousHandle()
    }

    // Get user hash
    const userHash = await getUserHash()

    // Step 1: Check if wall is sealed
    const { count: currentCount, error: countError } = await supabase
      .from('marks')
      .select('*', { count: 'exact', head: true })

    if (countError) {
      console.error('Error checking wall capacity:', countError)
      return NextResponse.json(
        { error: 'server_error' },
        { status: 500 }
      )
    }

    if (currentCount !== null && currentCount >= WALL_CAPACITY) {
      return NextResponse.json(
        { error: 'wall_sealed' },
        { status: 403 }
      )
    }

    // Step 2: Check if user already has a mark
    const { data: existingMark, error: existingError } = await supabase
      .from('marks')
      .select('id')
      .eq('user_hash', userHash)
      .single()

    if (existingMark) {
      return NextResponse.json(
        { error: 'already_marked' },
        { status: 409 }
      )
    }

    // Ignore error if no rows returned (user has no mark yet)
    if (existingError && existingError.code !== 'PGRST116') {
      console.error('Error checking existing mark:', existingError)
      return NextResponse.json(
        { error: 'server_error' },
        { status: 500 }
      )
    }

    // Step 3: Validate content
    const validation = validateContent(handle, text_content)
    if (!validation.valid) {
      return NextResponse.json(
        { error: validation.error },
        { status: 422 }
      )
    }

    // Step 4: Handle image upload if content_type is image
    let imageUrl: string | null = null

    if (content_type === 'image') {
      if (!image_b64) {
        return NextResponse.json(
          { error: 'Image data required for image marks' },
          { status: 422 }
        )
      }

      try {
        // Decode base64
        const base64Data = image_b64.replace(/^data:image\/\w+;base64,/, '')
        const buffer = Buffer.from(base64Data, 'base64')

        // Check file size
        if (buffer.length > MAX_FILE_SIZE) {
          return NextResponse.json(
            { error: 'Image exceeds 200KB limit' },
            { status: 422 }
          )
        }

        // Process image with sharp
        const processedImage = await sharp(buffer)
          .resize(MAX_IMAGE_SIZE, MAX_IMAGE_SIZE, {
            fit: 'inside',
            withoutEnlargement: true,
          })
          .jpeg({ quality: 85 })
          .toBuffer()

        // Generate unique filename
        const filename = `${Date.now()}-${Math.random().toString(36).substring(7)}.jpg`
        const filePath = `marks/${filename}`

        // Upload to Supabase Storage
        const { error: uploadError } = await supabase.storage
          .from('wall-images')
          .upload(filePath, processedImage, {
            contentType: 'image/jpeg',
            upsert: false,
          })

        if (uploadError) {
          console.error('Error uploading image:', uploadError)
          return NextResponse.json(
            { error: 'Failed to upload image' },
            { status: 500 }
          )
        }

        // Get public URL
        const { data: urlData } = supabase.storage
          .from('wall-images')
          .getPublicUrl(filePath)

        imageUrl = urlData.publicUrl
      } catch (error) {
        console.error('Error processing image:', error)
        return NextResponse.json(
          { error: 'Invalid image format' },
          { status: 422 }
        )
      }
    }

    // Step 5: Assign coordinates
    const { data: existingMarks, error: marksError } = await supabase
      .from('marks')
      .select('x, y')

    if (marksError) {
      console.error('Error fetching existing marks:', marksError)
      return NextResponse.json(
        { error: 'server_error' },
        { status: 500 }
      )
    }

    const occupiedCoordinates: Coordinate[] = existingMarks || []
    const assignedCoordinate = assignRandomFreeCoordinate(occupiedCoordinates)

    if (!assignedCoordinate) {
      return NextResponse.json(
        { error: 'wall_sealed' },
        { status: 403 }
      )
    }

    // Step 6: Insert mark into database
    const { data: newMark, error: insertError } = await supabase
      .from('marks')
      .insert({
        user_hash: userHash,
        handle,
        content_type,
        text_content: content_type === 'text' ? text_content : null,
        image_url: imageUrl,
        x: assignedCoordinate.x,
        y: assignedCoordinate.y,
      })
      .select()
      .single()

    if (insertError) {
      console.error('Error inserting mark:', insertError)

      // If image was uploaded but DB insert failed, clean up storage
      if (imageUrl) {
        const pathMatch = imageUrl.match(/marks\/(.+)$/)
        if (pathMatch) {
          await supabase.storage
            .from('wall-images')
            .remove([`marks/${pathMatch[1]}`])
        }
      }

      return NextResponse.json(
        { error: 'server_error' },
        { status: 500 }
      )
    }

    // Step 7: Return success
    return NextResponse.json(newMark, { status: 201 })
  } catch (error) {
    console.error('Unexpected error in POST /api/wall/mark:', error)
    return NextResponse.json(
      { error: 'server_error' },
      { status: 500 }
    )
  }
}
