'use client'

import { useEffect } from 'react'
import { useWallStore } from '@/store/wall-store'
import WallCanvas from '@/components/wall/WallCanvas'
import WallSidebar from '@/components/wall/WallSidebar'
import MarkModal from '@/components/wall/MarkModal'

export default function WallPage() {
  const { fetchWall } = useWallStore()

  // Fetch wall data on mount
  useEffect(() => {
    fetchWall()
  }, [fetchWall])

  return (
    <div className="w-screen h-screen flex flex-col md:flex-row bg-[#0a0a0a] overflow-hidden">
      {/* Mobile header - compact controls at top */}
      <div className="md:hidden">
        <WallSidebar />
      </div>

      {/* Canvas - takes remaining space */}
      <div className="flex-1 h-full overflow-hidden">
        <WallCanvas />
      </div>

      {/* Desktop sidebar - fixed width on right */}
      <div className="hidden md:block">
        <WallSidebar />
      </div>

      {/* Modal */}
      <MarkModal />
    </div>
  )
}
