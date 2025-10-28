import { Filter } from 'bad-words'

// Initialize the profanity filter
const filter = new Filter()

/**
 * Checks if text content contains profanity or inappropriate language
 *
 * @param text - The text to check
 * @returns true if content is clean, false if it contains blocked words
 */
export function isContentClean(text: string): boolean {
  return !filter.isProfane(text)
}

/**
 * Validates both handle and text content for a mark
 *
 * @param handle - User's public handle
 * @param textContent - Optional text content (for text marks)
 * @returns Object with validation result and error message if invalid
 */
export function validateContent(
  handle: string,
  textContent?: string | null
): { valid: boolean; error?: string } {
  // Check handle length
  if (handle.length < 3 || handle.length > 20) {
    return {
      valid: false,
      error: 'Handle must be between 3 and 20 characters',
    }
  }

  // Check handle for profanity
  if (!isContentClean(handle)) {
    return {
      valid: false,
      error: 'blocked_content',
    }
  }

  // Check text content if provided
  if (textContent) {
    // Check length (140 char max)
    if (textContent.length > 140) {
      return {
        valid: false,
        error: 'Text content exceeds 140 characters',
      }
    }

    // Check for profanity
    if (!isContentClean(textContent)) {
      return {
        valid: false,
        error: 'blocked_content',
      }
    }
  }

  return { valid: true }
}

/**
 * Generates a random anonymous handle hash
 * Used when user doesn't provide a handle
 *
 * @returns A short hash-like string (e.g., "anon-a3f2")
 */
export function generateAnonymousHandle(): string {
  const randomHex = Math.random().toString(16).substring(2, 6)
  return `anon-${randomHex}`
}
