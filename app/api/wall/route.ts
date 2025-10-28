import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

const WALL_CAPACITY = 100

export interface Mark {
  id: number
  handle: string
  content_type: 'text' | 'image'
  text_content: string | null
  image_url: string | null
  x: number
  y: number
  created_at: string
  is_flagged: boolean
}

export interface WallResponse {
  capacity: number
  count: number
  sealed: boolean
  marks: Mark[]
}

/**
 * GET /api/wall
 * Fetches the full current state of The Wall
 */
export async function GET() {
  try {
    const supabase = await createClient()

    // Fetch all marks
    const { data: marks, error } = await supabase
      .from('marks')
      .select('*')
      .order('created_at', { ascending: true })

    if (error) {
      console.error('Error fetching marks:', error)
      return NextResponse.json(
        { error: 'Failed to fetch marks' },
        { status: 500 }
      )
    }

    const count = marks?.length || 0
    const sealed = count >= WALL_CAPACITY

    const response: WallResponse = {
      capacity: WALL_CAPACITY,
      count,
      sealed,
      marks: marks || [],
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error('Unexpected error in GET /api/wall:', error)
    return NextResponse.json(
      { error: 'server_error' },
      { status: 500 }
    )
  }
}
