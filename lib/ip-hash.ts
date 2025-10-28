import { createHash } from 'crypto'
import { headers } from 'next/headers'

/**
 * Generates a SHA-256 hash from the user's IP address and User-Agent.
 * This hash is used to enforce one mark per user without storing raw IP addresses.
 *
 * @returns A SHA-256 hash string
 */
export async function getUserHash(): Promise<string> {
  const headersList = await headers()

  // Try to get real IP from various headers (common proxy/CDN headers)
  const ip =
    headersList.get('x-forwarded-for')?.split(',')[0].trim() ||
    headersList.get('x-real-ip') ||
    headersList.get('cf-connecting-ip') || // Cloudflare
    headersList.get('x-client-ip') ||
    'unknown'

  const userAgent = headersList.get('user-agent') || 'unknown'

  // Create hash from IP + User-Agent
  const hash = createHash('sha256')
    .update(`${ip}:${userAgent}`)
    .digest('hex')

  return hash
}
