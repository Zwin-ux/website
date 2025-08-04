# Design Document

## Overview

This design transforms the existing "Bonelli Labs" website into a modern, professional freelance development portfolio for Mazen Zwin. The overhaul addresses the current black screen issue, removes esports content, integrates GitHub portfolio showcase, and repositions all messaging around individual freelance services rather than company branding.

The design maintains the existing modern tech stack (Next.js 15, React 19, Tailwind CSS 4) while restructuring content, improving user experience, and adding new functionality for GitHub integration.

## Architecture

### High-Level Structure
```
┌─────────────────────────────────────┐
│           Header/Navigation         │
├─────────────────────────────────────┤
│              Hero Section           │
│        (Freelance Developer)        │
├─────────────────────────────────────┤
│           Services Section          │
│    (Web Dev, Consulting, etc.)      │
├─────────────────────────────────────┤
│         GitHub Portfolio            │
│       (Repository Showcase)         │
├─────────────────────────────────────┤
│           About Section             │
│      (Personal + Contact)           │
├─────────────────────────────────────┤
│              Footer                 │
└─────────────────────────────────────┘
```

### Technical Architecture
- **Frontend**: Next.js 15 with React 19 and TypeScript
- **Styling**: Tailwind CSS 4 with custom gradients and animations
- **API Integration**: GitHub REST API for repository data
- **State Management**: React hooks for component state
- **Deployment**: Vercel (assumed based on Next.js setup)

## Components and Interfaces

### 1. Updated Hero Component
**Purpose**: Replace "Bonelli Labs" branding with personal freelance developer messaging

**Key Changes**:
- Update headline from "Design. Build. Scale." to "Full-Stack Developer & Technical Consultant"
- Replace company messaging with personal value proposition
- Maintain existing gradient styling and animations
- Update CTA button text to "View My Work" or "Get In Touch"

**Interface**:
```typescript
interface HeroProps {
  // No props needed - static content
}
```

### 2. GitHub Portfolio Component (New)
**Purpose**: Showcase Mazen's GitHub repositories and development work

**Features**:
- Fetch repositories from GitHub API
- Display repository cards with key information
- Filter for most relevant/starred repositories
- Responsive grid layout
- Loading states and error handling

**Interface**:
```typescript
interface GitHubRepository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
}

interface GitHubPortfolioProps {
  username: string;
  maxRepos?: number;
}
```

### 3. Updated About Section
**Purpose**: Remove esports content and focus on personal freelance story

**Key Changes**:
- Remove UpcomingProjects component entirely
- Replace with personal introduction and skills
- Update contact email to mzwin3545@gmail.com
- Keep Spotify playlist if desired, or replace with tech stack showcase
- Add professional photo placeholder

### 4. Enhanced Services Sections
**Purpose**: Refocus existing services for freelance context

**Updates Needed**:
- **CustomSitesSection**: Update "We" language to "I" throughout
- **TechConsultingSection**: Emphasize individual expertise and experience
- **CreativeMarketingSection**: Either remove or refocus on technical marketing solutions

### 5. GitHub API Service (Enhanced)
**Purpose**: Extend existing GitHub integration for portfolio display

**New Functions**:
```typescript
// Extend existing lib/github.ts
export async function fetchUserRepositories(username: string, limit?: number): Promise<GitHubRepository[]>
export async function fetchUserProfile(username: string): Promise<GitHubUser>
export async function fetchRepositoryLanguages(username: string, repo: string): Promise<Record<string, number>>
```

## Data Models

### GitHub Repository Model
```typescript
interface GitHubRepository {
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
}
```

### GitHub User Profile Model
```typescript
interface GitHubUser {
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
}
```

### Contact Information Model
```typescript
interface ContactInfo {
  email: string;
  github: string;
  linkedin?: string;
  website?: string;
}
```

## Error Handling

### GitHub API Error Handling
1. **Rate Limiting**: Implement exponential backoff and caching
2. **Network Failures**: Show fallback content with retry mechanism
3. **Invalid Repository Data**: Filter out repositories with missing critical data
4. **API Unavailability**: Display cached data or graceful degradation message

### General Error Boundaries
1. **Component-Level**: Each major section has error boundary
2. **Page-Level**: Catch-all error boundary for entire page
3. **Loading States**: Skeleton loaders for all async content
4. **User Feedback**: Clear error messages with actionable next steps

### Error Recovery Strategies
```typescript
// Example error handling pattern
const useGitHubData = (username: string) => {
  const [data, setData] = useState<GitHubRepository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchUserRepositories(username)
      .then(setData)
      .catch((err) => {
        setError('Failed to load GitHub repositories');
        // Fallback to cached data or empty state
      })
      .finally(() => setLoading(false));
  }, [username]);

  return { data, loading, error, retry: () => /* retry logic */ };
};
```

## Testing Strategy

### Unit Testing
- **Components**: Test all new and modified components with React Testing Library
- **API Functions**: Mock GitHub API responses and test error scenarios
- **Utilities**: Test data transformation and filtering functions
- **Hooks**: Test custom hooks with various data states

### Integration Testing
- **GitHub API Integration**: Test actual API calls in development environment
- **Component Integration**: Test component interactions and data flow
- **Responsive Design**: Test layout across different screen sizes
- **Navigation**: Test smooth scrolling and anchor links

### End-to-End Testing
- **User Journeys**: Test complete user flows from landing to contact
- **Performance**: Test page load times and Core Web Vitals
- **Accessibility**: Test keyboard navigation and screen reader compatibility
- **Cross-Browser**: Test in Chrome, Firefox, Safari, and Edge

### Testing Checklist
```markdown
- [ ] Hero section displays correctly without black screen
- [ ] GitHub repositories load and display properly
- [ ] All "Bonelli Labs" references removed
- [ ] Contact email updated to mzwin3545@gmail.com
- [ ] Esports documentary content removed
- [ ] Services sections updated for freelance context
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] All links and navigation work correctly
- [ ] Error states display appropriately
- [ ] Loading states provide good UX
```

## Visual Design Updates

### Color Scheme
- Maintain existing dark theme with purple/blue gradients
- Ensure sufficient contrast for accessibility
- Use accent colors to highlight GitHub stats and contact information

### Typography
- Keep existing font hierarchy
- Update headings to reflect personal branding
- Ensure readability across all device sizes

### Layout Improvements
- Fix any layout issues causing black screen
- Improve spacing and visual hierarchy
- Add subtle animations for better user engagement
- Optimize for mobile-first responsive design

### GitHub Portfolio Section Design
```
┌─────────────────────────────────────┐
│        GitHub Portfolio             │
│                                     │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐│
│  │ Repo 1  │ │ Repo 2  │ │ Repo 3  ││
│  │ ⭐ 15   │ │ ⭐ 8    │ │ ⭐ 23   ││
│  │ JS      │ │ Python  │ │ TS      ││
│  └─────────┘ └─────────┘ └─────────┘│
│                                     │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐│
│  │ Repo 4  │ │ Repo 5  │ │ Repo 6  ││
│  │ ⭐ 5    │ │ ⭐ 12   │ │ ⭐ 7    ││
│  │ React   │ │ Node    │ │ Vue     ││
│  └─────────┘ └─────────┘ └─────────┘│
└─────────────────────────────────────┘
```

## Performance Considerations

### GitHub API Optimization
- Implement caching with Next.js ISR (Incremental Static Regeneration)
- Use pagination for large repository lists
- Optimize image loading for repository previews
- Implement request deduplication

### Core Web Vitals
- Optimize Largest Contentful Paint (LCP) by preloading hero images
- Minimize Cumulative Layout Shift (CLS) with proper image dimensions
- Reduce First Input Delay (FID) with code splitting and lazy loading

### Bundle Optimization
- Remove unused dependencies
- Implement dynamic imports for GitHub components
- Optimize Tailwind CSS purging
- Use Next.js Image component for optimized images