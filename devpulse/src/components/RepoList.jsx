const RepoList = ({ repos }) => {
  return (
    <div className="repo-container">
      <h3 className="section-title">Top Repositories</h3>

      <div className="repo-grid">
        {repos.slice(0, 8).map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            className="repo-card"
          >
            <h4>{repo.name}</h4>

            <p className="repo-desc">
              {repo.description || "No description available"}
            </p>

            <div className="repo-footer">
              <span>⭐ {repo.stargazers_count}</span>
              <span>🍴 {repo.forks_count}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default RepoList;