import { create } from 'zustand'
import type { Mark } from '@/app/api/wall/route'

interface WallState {
  // Wall data
  marks: Mark[]
  count: number
  capacity: number
  sealed: boolean
  isLoading: boolean
  error: string | null

  // Modal state
  modalOpen: boolean
  modalTab: 'text' | 'image'

  // User mark tracking
  currentUserMarkId: number | null

  // Actions
  fetchWall: () => Promise<void>
  submitMark: (data: {
    handle: string
    content_type: 'text' | 'image'
    text_content?: string | null
    image_b64?: string | null
  }) => Promise<{ success: boolean; error?: string; markId?: number }>
  flagMark: (markId: number, reason: string) => Promise<{ success: boolean }>
  openModal: (tab?: 'text' | 'image') => void
  closeModal: () => void
  setModalTab: (tab: 'text' | 'image') => void
}

export const useWallStore = create<WallState>((set, get) => ({
  // Initial state
  marks: [],
  count: 0,
  capacity: 100,
  sealed: false,
  isLoading: false,
  error: null,
  modalOpen: false,
  modalTab: 'text',
  currentUserMarkId: null,

  // Fetch wall data
  fetchWall: async () => {
    set({ isLoading: true, error: null })

    try {
      const response = await fetch('/api/wall')

      if (!response.ok) {
        throw new Error('Failed to fetch wall data')
      }

      const data = await response.json()

      set({
        marks: data.marks,
        count: data.count,
        capacity: data.capacity,
        sealed: data.sealed,
        isLoading: false,
      })
    } catch (error) {
      console.error('Error fetching wall:', error)
      set({
        isLoading: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      })
    }
  },

  // Submit a new mark
  submitMark: async (data) => {
    try {
      const response = await fetch('/api/wall/mark', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        return {
          success: false,
          error: result.error || 'Failed to submit mark',
        }
      }

      // Mark submitted successfully
      set({ currentUserMarkId: result.id })

      // Refresh wall data
      await get().fetchWall()

      return {
        success: true,
        markId: result.id,
      }
    } catch (error) {
      console.error('Error submitting mark:', error)
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      }
    }
  },

  // Flag a mark
  flagMark: async (markId, reason) => {
    try {
      const response = await fetch('/api/wall/flag', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mark_id: markId, reason }),
      })

      if (!response.ok) {
        return { success: false }
      }

      // Refresh wall data to show updated is_flagged status
      await get().fetchWall()

      return { success: true }
    } catch (error) {
      console.error('Error flagging mark:', error)
      return { success: false }
    }
  },

  // Modal actions
  openModal: (tab = 'text') => {
    set({ modalOpen: true, modalTab: tab })
  },

  closeModal: () => {
    set({ modalOpen: false })
  },

  setModalTab: (tab) => {
    set({ modalTab: tab })
  },
}))
