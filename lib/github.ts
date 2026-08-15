// GitHub API utility for fetching pinned/top repositories
// Usage: call getGithubRepos() from server components

export type GithubRepo = {
  name: string;
  description: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  topics: string[];
};

export async function getGithubRepos(username = "akash-logesh"): Promise<GithubRepo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=10`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          ...(process.env.GITHUB_TOKEN
            ? { Authorization: `token ${process.env.GITHUB_TOKEN}` }
            : {}),
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );
    if (!res.ok) return [];
    const data: GithubRepo[] = await res.json();
    return data.filter((r) => !r.name.includes("username") && r.description);
  } catch {
    return [];
  }
}
