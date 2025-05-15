// GitHub commit activity fetcher for heatmap
// Usage: await fetchGitHubHeatmap('Zwin-ux')
// Note: Unauthenticated requests are heavily rate-limited by GitHub. For production, use a GitHub token.

export const GITHUB_USERNAME = 'Zwin-ux';

export async function fetchGitHubHeatmap(username: string = GITHUB_USERNAME) {
  const res = await fetch(`https://api.github.com/users/${username}/events`, {
    headers: {
      'Accept': 'application/vnd.github+json',
      // 'Authorization': `Bearer YOUR_GITHUB_TOKEN` // Optional for higher rate limits
    },
    // Next.js ISR: revalidate every hour if used in a Server Component
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    // fallback to empty or mock data
    return [];
  }
  const events = await res.json();

  // Group by day
  const dayMap: Record<string, number> = {};
  for (const event of events) {
    if (event.type === 'PushEvent') {
      const date = event.created_at.slice(0, 10); // YYYY-MM-DD
      dayMap[date] = (dayMap[date] || 0) + event.payload.commits.length;
    }
  }
  // Convert to array for heatmap
  return Object.entries(dayMap).map(([date, count]) => ({ date, count }));
}
