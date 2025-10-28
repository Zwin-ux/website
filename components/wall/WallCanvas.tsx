'use client'

import { useState, useEffect } from 'react'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import { useWallStore } from '@/store/wall-store'
import MarkBlock from './MarkBlock'
import { CANVAS_CONFIG } from '@/lib/coordinate-assignment'

export default function WallCanvas() {
  const { marks, isLoading, flagMark } = useWallStore()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleFlag = async (markId: number) => {
    const reason = prompt('Reason for flagging (hate/spam/other):')
    if (reason) {
      await flagMark(markId, reason)
    }
  }

  if (isLoading || !isMounted) {
    return (
      <div className="flex items-center justify-center h-full bg-[#0a0a0a]">
        <p className="text-[#f2f2f2] font-mono text-sm">loading ...</p>
      </div>
    )
  }

  // Show empty state if no marks exist
  if (marks.length === 0) {
    return (
      <div className="flex items-center justify-center h-full bg-[#0a0a0a]">
        <div className="text-center">
          <p className="text-[#f2f2f2] font-mono text-sm mb-2">No marks yet.</p>
          <p className="text-[#2a2a2a] font-mono text-xs">Be the first.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-full bg-[#0a0a0a]">
      <TransformWrapper
        initialScale={0.5}
        minScale={0.2}
        maxScale={1.5}
        centerOnInit
        limitToBounds={false}
      >
        <TransformComponent
          wrapperClass="w-full h-full"
          contentClass="w-full h-full"
        >
          {/* Canvas area with grid background */}
          <div
            className="relative bg-[#0a0a0a]"
            style={{
              width: `${CANVAS_CONFIG.WIDTH}px`,
              height: `${CANVAS_CONFIG.HEIGHT}px`,
              backgroundImage: `
                linear-gradient(to right, #1a1a1a 1px, transparent 1px),
                linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)
              `,
              backgroundSize: `${CANVAS_CONFIG.CELL_SIZE}px ${CANVAS_CONFIG.CELL_SIZE}px`,
            }}
          >
            {/* Coordinate markers at corners */}
            <div className="absolute top-2 left-2 font-mono text-[10px] text-[#2a2a2a]">
              0,0
            </div>
            <div className="absolute top-2 right-2 font-mono text-[10px] text-[#2a2a2a]">
              {CANVAS_CONFIG.WIDTH},0
            </div>
            <div className="absolute bottom-2 left-2 font-mono text-[10px] text-[#2a2a2a]">
              0,{CANVAS_CONFIG.HEIGHT}
            </div>
            <div className="absolute bottom-2 right-2 font-mono text-[10px] text-[#2a2a2a]">
              {CANVAS_CONFIG.WIDTH},{CANVAS_CONFIG.HEIGHT}
            </div>

            {/* Render all marks */}
            {marks.map((mark) => (
              <MarkBlock key={mark.id} mark={mark} onFlag={handleFlag} />
            ))}
          </div>
        </TransformComponent>
      </TransformWrapper>
    </div>
  )
}
