export async function getGithubRepoProps(repo: string) {
  async function get(url: string) {
    const resp = await fetch(url)
    return resp.json()
  }

  const emojis = await get('https://api.github.com/emojis')
  const language_colors = await get(
    'https://raw.githubusercontent.com/ozh/github-colors/master/colors.json'
  )

  const data: RepoData = await get(`https://api.github.com/repos/${repo}`)
  data.description = (data.description || '').replace(
    /:\w+:/g,
    function (match: string) {
      const name = match.substring(1, match.length - 1)
      const emoji = emojis[name]

      if (emoji) {
        return `<span><img class="github-repo-emoji" src="${emoji}"></span>`
      }

      return match
    }
  )
  data.language_color = data.language
    ? language_colors[data.language].color
    : ''

  return data
}

interface RepoData {
  html_url: string
  name: string
  description: string
  language: string
  language_color: string
  stargazers_count: number
  forks: number
  fork: boolean
  source: {
    html_url: string
    full_name: string
  }
}

export function GithubRepoCard({ data }: { data?: RepoData }) {
  return (
    <div className="github-repo-card">
      <a href={data?.html_url ?? ''}>
        <span></span>
      </a>
      <div className="github-repo-header">
        <svg
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          height="16"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
          ></path>
        </svg>
        <span>{data?.name ?? 'error loading repository'}</span>
      </div>
      {data?.fork ? (
        <div className="github-repo-fork">
          Forked from <a href={data.source.html_url}>{data.source.full_name}</a>
        </div>
      ) : null}
      <div className="github-repo-description">{data?.description}</div>
      <div className="github-repo-footer">
        {data?.language ? (
          <div className="github-repo-language">
            <span style={{ backgroundColor: data.language_color }}></span>
            &nbsp; <span>{data.language}</span>
          </div>
        ) : null}
        {data?.stargazers_count ? (
          <div className="github-repo-stars">
            <svg
              aria-label="stars"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              height="16"
              role="img"
            >
              <path
                fillRule="evenodd"
                d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
              ></path>
            </svg>
            &nbsp; <span>{data.stargazers_count}</span>
          </div>
        ) : null}
        {data?.forks ? (
          <div className="github-repo-forks">
            <svg
              aria-label="fork"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              height="16"
              role="img"
            >
              <path
                fillRule="evenodd"
                d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
              ></path>
            </svg>
            &nbsp; <span>{data.forks}</span>
          </div>
        ) : null}
      </div>
    </div>
  )
}
