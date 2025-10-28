import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

interface FlagRequest {
  mark_id: number
  reason: string
}

/**
 * POST /api/wall/flag
 * Flags a mark for inappropriate content
 */
export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient()

    // Parse request body
    const body: FlagRequest = await request.json()
    const { mark_id, reason } = body

    // Validate inputs
    if (!mark_id || !reason) {
      return NextResponse.json(
        { error: 'mark_id and reason are required' },
        { status: 422 }
      )
    }

    // Check if mark exists
    const { data: mark, error: markError } = await supabase
      .from('marks')
      .select('id')
      .eq('id', mark_id)
      .single()

    if (markError || !mark) {
      return NextResponse.json(
        { error: 'Mark not found' },
        { status: 404 }
      )
    }

    // Insert flag record (trigger will automatically set is_flagged=true)
    const { error: insertError } = await supabase
      .from('flags')
      .insert({
        mark_id,
        reason,
      })

    if (insertError) {
      console.error('Error inserting flag:', insertError)
      return NextResponse.json(
        { error: 'server_error' },
        { status: 500 }
      )
    }

    return NextResponse.json({ status: 'received' }, { status: 200 })
  } catch (error) {
    console.error('Unexpected error in POST /api/wall/flag:', error)
    return NextResponse.json(
      { error: 'server_error' },
      { status: 500 }
    )
  }
}
