'use client'

import { useState, useRef } from 'react'
import { useWallStore } from '@/store/wall-store'

export default function MarkModal() {
  const { modalOpen, modalTab, setModalTab, closeModal, submitMark } =
    useWallStore()

  const [handle, setHandle] = useState('')
  const [textContent, setTextContent] = useState('')
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fileInputRef = useRef<HTMLInputElement>(null)

  const charCount = textContent.length
  const charLimit = 140

  if (!modalOpen) return null

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Validate file type
    if (!['image/png', 'image/jpeg'].includes(file.type)) {
      setError('Only PNG and JPEG images are allowed')
      return
    }

    // Validate file size (200KB)
    if (file.size > 200 * 1024) {
      setError('Image must be under 200KB')
      return
    }

    setImageFile(file)
    setError(null)

    // Create preview
    const reader = new FileReader()
    reader.onloadend = () => {
      setImagePreview(reader.result as string)
    }
    reader.readAsDataURL(file)
  }

  const handleSubmit = async () => {
    setError(null)
    setIsSubmitting(true)

    try {
      if (modalTab === 'text') {
        // Submit text mark
        const result = await submitMark({
          handle: handle.trim(),
          content_type: 'text',
          text_content: textContent.trim(),
        })

        if (!result.success) {
          setError(result.error || 'Failed to submit mark')
          setIsSubmitting(false)
          return
        }
      } else {
        // Submit image mark
        if (!imageFile || !imagePreview) {
          setError('Please select an image')
          setIsSubmitting(false)
          return
        }

        const result = await submitMark({
          handle: handle.trim(),
          content_type: 'image',
          image_b64: imagePreview,
        })

        if (!result.success) {
          setError(result.error || 'Failed to submit mark')
          setIsSubmitting(false)
          return
        }
      }

      // Success - close modal
      closeModal()
      setHandle('')
      setTextContent('')
      setImageFile(null)
      setImagePreview(null)
    } catch (err) {
      setError('Unexpected error occurred')
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-[#0a0a0a] bg-opacity-90 flex items-center justify-center z-50">
      <div className="bg-[#1a1a1a] border border-[#f2f2f2] w-full max-w-md">
        {/* Header */}
        <div className="flex border-b border-[#2a2a2a]">
          <button
            onClick={() => setModalTab('text')}
            className={`flex-1 py-3 font-mono text-sm ${
              modalTab === 'text'
                ? 'bg-[#f2f2f2] text-[#0a0a0a]'
                : 'bg-[#1a1a1a] text-[#f2f2f2] hover:bg-[#2a2a2a]'
            }`}
          >
            TEXT
          </button>
          <button
            onClick={() => setModalTab('image')}
            className={`flex-1 py-3 font-mono text-sm ${
              modalTab === 'image'
                ? 'bg-[#f2f2f2] text-[#0a0a0a]'
                : 'bg-[#1a1a1a] text-[#f2f2f2] hover:bg-[#2a2a2a]'
            }`}
          >
            IMAGE
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          {/* Handle input (shared) */}
          <div>
            <label className="block text-[#2a2a2a] font-mono text-xs mb-2">
              HANDLE (3-20 chars)
            </label>
            <input
              type="text"
              value={handle}
              onChange={(e) => setHandle(e.target.value)}
              placeholder="optional - leave blank for anon-####"
              maxLength={20}
              className="w-full bg-[#0a0a0a] text-[#f2f2f2] font-mono text-sm p-3 border border-[#2a2a2a] focus:border-[#f2f2f2] outline-none placeholder:text-[#2a2a2a]"
            />
          </div>

          {/* Text tab content */}
          {modalTab === 'text' && (
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-[#2a2a2a] font-mono text-xs">
                  MESSAGE
                </label>
                <span
                  className={`font-mono text-xs ${
                    charCount > charLimit ? 'text-[#ff2e2e]' : 'text-[#2a2a2a]'
                  }`}
                >
                  {charCount} / {charLimit}
                </span>
              </div>
              <textarea
                value={textContent}
                onChange={(e) => setTextContent(e.target.value)}
                maxLength={charLimit}
                rows={6}
                className="w-full bg-[#0a0a0a] text-[#f2f2f2] font-mono text-sm p-3 border border-[#2a2a2a] focus:border-[#f2f2f2] outline-none resize-none"
                placeholder="your mark here..."
              />
            </div>
          )}

          {/* Image tab content */}
          {modalTab === 'image' && (
            <div>
              <label className="block text-[#2a2a2a] font-mono text-xs mb-2">
                IMAGE (PNG/JPEG, max 512x512, max 200KB)
              </label>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/png,image/jpeg"
                onChange={handleImageSelect}
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-full bg-[#0a0a0a] text-[#f2f2f2] font-mono text-sm p-3 border border-[#2a2a2a] hover:border-[#f2f2f2]"
              >
                {imageFile ? imageFile.name : 'SELECT IMAGE'}
              </button>

              {/* Image preview */}
              {imagePreview && (
                <div className="mt-4 border border-[#2a2a2a] p-2">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-auto"
                  />
                </div>
              )}
            </div>
          )}

          {/* Error message */}
          {error && (
            <div className="text-[#ff2e2e] font-mono text-xs">{error}</div>
          )}
        </div>

        {/* Footer */}
        <div className="flex border-t border-[#2a2a2a]">
          <button
            onClick={closeModal}
            disabled={isSubmitting}
            className="flex-1 py-3 font-mono text-sm bg-[#1a1a1a] text-[#f2f2f2] hover:bg-[#2a2a2a] disabled:opacity-50"
          >
            CANCEL
          </button>
          <button
            onClick={handleSubmit}
            disabled={
              isSubmitting ||
              (modalTab === 'text' && textContent.trim().length === 0) ||
              (modalTab === 'image' && !imageFile)
            }
            className="flex-1 py-3 font-mono text-sm bg-[#f2f2f2] text-[#0a0a0a] hover:bg-[#ffffff] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
          </button>
        </div>
      </div>
    </div>
  )
}
