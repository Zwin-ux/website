'use client'

import type { Mark } from '@/app/api/wall/route'
import { useState } from 'react'

interface MarkBlockProps {
  mark: Mark
  onFlag?: (markId: number) => void
}

export default function MarkBlock({ mark, onFlag }: MarkBlockProps) {
  const [showTooltip, setShowTooltip] = useState(false)

  // Format timestamp to short ISO format
  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp)
    return date.toISOString().split('.')[0] + 'Z'
  }

  return (
    <div
      className={`absolute ${mark.is_flagged ? 'opacity-50' : ''}`}
      style={{
        left: `${mark.x}px`,
        top: `${mark.y}px`,
        width: '200px',
        height: '200px',
      }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Mark container */}
      <div
        className={`w-full h-full bg-[#1a1a1a] ${
          mark.is_flagged ? 'border-[#ff2e2e]' : 'border-[#f2f2f2]'
        } border flex flex-col`}
      >
        {/* Header strip */}
        <div className="bg-[#0a0a0a] px-2 py-1 border-b border-[#2a2a2a]">
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-mono text-[#f2f2f2]">
              #{mark.id.toString().padStart(4, '0')}
            </span>
            <span className="text-[10px] font-mono text-[#f2f2f2]">
              {formatTimestamp(mark.created_at).substring(5, 16)}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex items-center justify-center p-3 overflow-hidden">
          {mark.content_type === 'text' ? (
            <p className="text-[#f2f2f2] font-mono text-sm leading-tight break-words text-center">
              {mark.text_content}
            </p>
          ) : (
            <img
              src={mark.image_url || ''}
              alt={`Mark by ${mark.handle}`}
              className="max-w-full max-h-full object-contain"
            />
          )}
        </div>
      </div>

      {/* Tooltip on hover */}
      {showTooltip && (
        <div className="absolute top-full left-0 mt-1 bg-[#0a0a0a] border border-[#f2f2f2] p-2 z-50 min-w-[200px]">
          <div className="font-mono text-xs text-[#f2f2f2] space-y-1">
            <div>
              <span className="text-[#2a2a2a]">HANDLE:</span> {mark.handle}
            </div>
            <div>
              <span className="text-[#2a2a2a]">TIMESTAMP:</span>{' '}
              {formatTimestamp(mark.created_at)}
            </div>
            {mark.is_flagged && (
              <div className="text-[#ff2e2e] mt-2">FLAGGED</div>
            )}
            {!mark.is_flagged && onFlag && (
              <button
                onClick={() => onFlag(mark.id)}
                className="mt-2 text-[#ff2e2e] hover:underline"
              >
                FLAG
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
