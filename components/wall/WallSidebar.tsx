'use client'

import { useWallStore } from '@/store/wall-store'

export default function WallSidebar() {
  const { count, capacity, sealed, currentUserMarkId, openModal } =
    useWallStore()

  return (
    <>
      {/* Desktop sidebar - vertical layout */}
      <div className="hidden md:flex md:w-80 h-full bg-[#1a1a1a] border-l border-[#2a2a2a] flex-col">
        {/* Header */}
        <div className="p-6 border-b border-[#2a2a2a]">
          <h1 className="text-[#f2f2f2] font-mono text-2xl tracking-tight">
            WALL ONE
          </h1>
        </div>

        {/* Status section */}
        <div className="p-6 space-y-6">
          {/* Counter */}
          <div>
            <div className="text-[#2a2a2a] font-mono text-xs mb-1">
              MARK COUNTER
            </div>
            <div className="text-[#f2f2f2] font-mono text-3xl">
              {count.toString().padStart(3, '0')} / {capacity}
            </div>
          </div>

          {/* Status */}
          <div>
            <div className="text-[#2a2a2a] font-mono text-xs mb-1">STATUS</div>
            <div
              className={`font-mono text-sm ${
                sealed ? 'text-[#ff2e2e]' : 'text-[#f2f2f2]'
              }`}
            >
              {sealed ? 'SEALED' : 'ACTIVE'}
            </div>
          </div>

          {/* Button or locked state */}
          <div className="pt-4">
            {currentUserMarkId ? (
              <div className="font-mono text-sm text-[#f2f2f2]">
                MARK LOGGED // ID{' '}
                {currentUserMarkId.toString().padStart(4, '0')}
              </div>
            ) : sealed ? (
              <div className="font-mono text-sm text-[#ff2e2e]">
                WALL ONE: SEALED
              </div>
            ) : (
              <button
                onClick={() => openModal()}
                className="w-full bg-[#f2f2f2] text-[#0a0a0a] font-mono text-sm py-3 px-4 hover:bg-[#ffffff] transition-colors"
              >
                [LEAVE YOUR MARK]
              </button>
            )}
          </div>
        </div>

        {/* Rules section */}
        <div className="p-6 border-t border-[#2a2a2a] mt-auto">
          <div className="text-[#2a2a2a] font-mono text-xs mb-2">RULES</div>
          <div className="space-y-2 font-mono text-xs text-[#f2f2f2]">
            <div>You get 1 mark. Forever.</div>
            <div>No edits.</div>
            <div>Visible to everyone.</div>
          </div>
        </div>
      </div>

      {/* Mobile header - compact horizontal layout */}
      <div className="md:hidden bg-[#1a1a1a] border-b border-[#2a2a2a] p-3">
        <div className="flex items-center justify-between gap-3">
          {/* Counter and status */}
          <div className="flex items-center gap-4">
            <div className="text-[#f2f2f2] font-mono text-sm">
              {count.toString().padStart(2, '0')}/{capacity}
            </div>
            <div
              className={`font-mono text-xs ${
                sealed ? 'text-[#ff2e2e]' : 'text-[#f2f2f2]'
              }`}
            >
              {sealed ? 'SEALED' : 'ACTIVE'}
            </div>
          </div>

          {/* Button or status */}
          <div>
            {currentUserMarkId ? (
              <div className="font-mono text-xs text-[#f2f2f2]">
                ID {currentUserMarkId.toString().padStart(3, '0')}
              </div>
            ) : sealed ? (
              <div className="font-mono text-xs text-[#ff2e2e]">SEALED</div>
            ) : (
              <button
                onClick={() => openModal()}
                className="bg-[#f2f2f2] text-[#0a0a0a] font-mono text-xs py-2 px-3 hover:bg-[#ffffff] transition-colors"
              >
                LEAVE MARK
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
