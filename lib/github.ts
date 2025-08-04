// GitHub API service for portfolio display
// Usage: await fetchGitHubHeatmap('Zwin-ux'), await fetchUserRepositories('Zwin-ux')
// Note: Unauthenticated requests are heavily rate-limited by GitHub. For production, use a GitHub token.

export const GITHUB_USERNAME = 'Zwin-ux';

// TypeScript interfaces for GitHub API responses
export interface GitHubRepository {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  created_at: string;
  updated_at: string;
  topics: string[];
  size: number;
  default_branch: string;
  private: boolean;
  fork: boolean;
}

export interface GitHubUser {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  name: string | null;
  company: string | null;
  blog: string | null;
  location: string | null;
  email: string | null;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export interface GitHubApiError {
  message: string;
  status: number;
  documentation_url?: string;
}

// Cache for API responses to reduce rate limiting
const cache = new Map<string, { data: any; timestamp: number }>();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

function getCachedData<T>(key: string): T | null {
  const cached = cache.get(key);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data as T;
  }
  return null;
}

function setCachedData<T>(key: string, data: T): void {
  cache.set(key, { data, timestamp: Date.now() });
}

async function makeGitHubRequest<T>(url: string, cacheKey: string): Promise<T> {
  // Check cache first
  const cachedData = getCachedData<T>(cacheKey);
  if (cachedData) {
    return cachedData;
  }

  try {
    const res = await fetch(url, {
      headers: {
        'Accept': 'application/vnd.github+json',
        'User-Agent': 'Portfolio-Website',
        // 'Authorization': `Bearer YOUR_GITHUB_TOKEN` // Optional for higher rate limits
      },
      // Next.js ISR: revalidate every hour if used in a Server Component
      ...(typeof window === 'undefined' && { next: { revalidate: 3600 } }),
    } as RequestInit);

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(`GitHub API error: ${res.status} - ${errorData.message || res.statusText}`);
    }

    const data = await res.json();
    setCachedData(cacheKey, data);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch from GitHub API: ${error.message}`);
    }
    throw new Error('Unknown error occurred while fetching from GitHub API');
  }
}

export async function fetchUserRepositories(
  username: string = GITHUB_USERNAME,
  limit: number = 20
): Promise<GitHubRepository[]> {
  try {
    const url = `https://api.github.com/users/${username}/repos?sort=updated&per_page=${Math.min(limit, 100)}`;
    const cacheKey = `repos-${username}-${limit}`;
    
    const repositories = await makeGitHubRequest<GitHubRepository[]>(url, cacheKey);
    
    // Filter out forks and private repos, sort by stars and recent activity
    return repositories
      .filter(repo => !repo.fork && !repo.private)
      .sort((a, b) => {
        // Sort by stars first, then by recent updates
        if (b.stargazers_count !== a.stargazers_count) {
          return b.stargazers_count - a.stargazers_count;
        }
        return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
      })
      .slice(0, limit);
  } catch (error) {
    console.error('Error fetching user repositories:', error);
    // Return empty array as fallback
    return [];
  }
}

export async function fetchUserProfile(username: string = GITHUB_USERNAME): Promise<GitHubUser | null> {
  try {
    const url = `https://api.github.com/users/${username}`;
    const cacheKey = `profile-${username}`;
    
    const profile = await makeGitHubRequest<GitHubUser>(url, cacheKey);
    return profile;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    // Return null as fallback
    return null;
  }
}

export async function fetchGitHubHeatmap(username: string = GITHUB_USERNAME) {
  try {
    const url = `https://api.github.com/users/${username}/events`;
    const cacheKey = `events-${username}`;
    
    const events = await makeGitHubRequest<any[]>(url, cacheKey);

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
  } catch (error) {
    console.error('Error fetching GitHub heatmap:', error);
    // Return empty array as fallback
    return [];
  }
}
