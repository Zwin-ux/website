'use client';

import { useState, useEffect } from 'react';
import { fetchUserRepositories, GitHubRepository, GITHUB_USERNAME } from '@/lib/github';

interface GitHubPortfolioProps {
  username?: string;
  maxRepos?: number;
}

interface RepositoryCardProps {
  repository: GitHubRepository;
}

const RepositoryCard = ({ repository }: RepositoryCardProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short'
    });
  };

  const getLanguageColor = (language: string | null) => {
    const colors: Record<string, string> = {
      'JavaScript': '#f1e05a',
      'TypeScript': '#3178c6',
      'Python': '#3572A5',
      'Java': '#b07219',
      'C++': '#f34b7d',
      'C': '#555555',
      'HTML': '#e34c26',
      'CSS': '#1572B6',
      'React': '#61dafb',
      'Vue': '#4FC08D',
      'Go': '#00ADD8',
      'Rust': '#dea584',
      'PHP': '#777bb4',
      'Ruby': '#701516',
      'Swift': '#fa7343',
      'Kotlin': '#A97BFF',
      'Dart': '#00B4AB',
      'Shell': '#89e051',
    };
    return colors[language || ''] || '#6b7280';
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-lg">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold text-white truncate pr-2">
          <a 
            href={repository.html_url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors"
          >
            {repository.name}
          </a>
        </h3>
        <div className="flex items-center space-x-2 text-sm text-gray-300 flex-shrink-0">
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {repository.stargazers_count}
          </span>
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414L2.586 7l3.707-3.707a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {repository.forks_count}
          </span>
        </div>
      </div>
      
      <p className="text-gray-300 text-sm mb-4 line-clamp-2 min-h-[2.5rem]">
        {repository.description || 'No description available'}
      </p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {repository.language && (
            <div className="flex items-center">
              <div 
                className="w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: getLanguageColor(repository.language) }}
              />
              <span className="text-sm text-gray-300">{repository.language}</span>
            </div>
          )}
        </div>
        <span className="text-xs text-gray-400">
          Updated {formatDate(repository.updated_at)}
        </span>
      </div>
      
      {repository.topics && repository.topics.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1">
          {repository.topics.slice(0, 3).map((topic) => (
            <span 
              key={topic}
              className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full"
            >
              {topic}
            </span>
          ))}
          {repository.topics.length > 3 && (
            <span className="px-2 py-1 text-xs bg-gray-500/20 text-gray-400 rounded-full">
              +{repository.topics.length - 3}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

const LoadingSkeleton = () => (
  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 animate-pulse">
    <div className="flex items-start justify-between mb-3">
      <div className="h-6 bg-white/10 rounded w-3/4"></div>
      <div className="h-4 bg-white/10 rounded w-16"></div>
    </div>
    <div className="h-4 bg-white/10 rounded w-full mb-2"></div>
    <div className="h-4 bg-white/10 rounded w-2/3 mb-4"></div>
    <div className="flex items-center justify-between">
      <div className="h-4 bg-white/10 rounded w-20"></div>
      <div className="h-3 bg-white/10 rounded w-24"></div>
    </div>
  </div>
);

const ErrorState = ({ onRetry }: { onRetry: () => void }) => (
  <div className="col-span-full text-center py-12">
    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6 max-w-md mx-auto">
      <svg className="w-12 h-12 text-red-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <h3 className="text-lg font-semibold text-red-400 mb-2">Failed to Load Repositories</h3>
      <p className="text-red-300 text-sm mb-4">
        Unable to fetch GitHub repositories. This might be due to rate limiting or network issues.
      </p>
      <button 
        onClick={onRetry}
        className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-300 rounded-lg transition-colors"
      >
        Try Again
      </button>
    </div>
  </div>
);

export default function GitHubPortfolio({ 
  username = GITHUB_USERNAME, 
  maxRepos = 6 
}: GitHubPortfolioProps) {
  const [repositories, setRepositories] = useState<GitHubRepository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadRepositories = async () => {
    try {
      setLoading(true);
      setError(null);
      const repos = await fetchUserRepositories(username, maxRepos);
      setRepositories(repos);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      console.error('Error loading repositories:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRepositories();
  }, [username, maxRepos]);

  const handleRetry = () => {
    loadRepositories();
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            GitHub Portfolio
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore my latest projects and contributions. Each repository showcases different aspects 
            of my development skills and technical expertise.
          </p>
          <div className="mt-6">
            <a 
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
              View All on GitHub
            </a>
          </div>
        </div>

        {error ? (
          <ErrorState onRetry={handleRetry} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading ? (
              // Show loading skeletons
              Array.from({ length: maxRepos }).map((_, index) => (
                <LoadingSkeleton key={index} />
              ))
            ) : repositories.length > 0 ? (
              // Show repository cards
              repositories.map((repo) => (
                <RepositoryCard key={repo.id} repository={repo} />
              ))
            ) : (
              // Show empty state
              <div className="col-span-full text-center py-12">
                <div className="bg-white/5 border border-white/10 rounded-lg p-8 max-w-md mx-auto">
                  <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <h3 className="text-lg font-semibold text-gray-300 mb-2">No Repositories Found</h3>
                  <p className="text-gray-400 text-sm">
                    No public repositories available to display at the moment.
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}