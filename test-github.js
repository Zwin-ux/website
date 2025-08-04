// Simple test script to verify GitHub API functions
const { fetchUserRepositories, fetchUserProfile, GITHUB_USERNAME } = require('./lib/github.ts');

async function testGitHubAPI() {
  console.log('Testing GitHub API functions...');
  
  try {
    console.log(`\n1. Testing fetchUserProfile for ${GITHUB_USERNAME}:`);
    const profile = await fetchUserProfile();
    console.log('Profile fetched:', profile ? 'Success' : 'Failed');
    if (profile) {
      console.log(`- Name: ${profile.name}`);
      console.log(`- Public repos: ${profile.public_repos}`);
      console.log(`- Followers: ${profile.followers}`);
    }

    console.log(`\n2. Testing fetchUserRepositories for ${GITHUB_USERNAME}:`);
    const repos = await fetchUserRepositories(GITHUB_USERNAME, 5);
    console.log(`Repositories fetched: ${repos.length}`);
    repos.forEach((repo, index) => {
      console.log(`- ${index + 1}. ${repo.name} (⭐ ${repo.stargazers_count}) - ${repo.language || 'No language'}`);
    });

  } catch (error) {
    console.error('Test failed:', error.message);
  }
}

testGitHubAPI();