/**
 * TechInsights Component
 * Shows tech stack using logos + hover labels
 */
const TechInsights = ({ repos }) => {
  const languageCount = {};

  repos.forEach((repo) => {
    if (repo.language) {
      languageCount[repo.language] =
        (languageCount[repo.language] || 0) + 1;
    }
  });

  const topLanguages = Object.entries(languageCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8);

  /**
   * Map language → logo (using devicon CDN)
   */
  const getLogo = (lang) => {
    const map = {
      JavaScript: "javascript/javascript-original.svg",
      TypeScript: "typescript/typescript-original.svg",
      Python: "python/python-original.svg",
      Java: "java/java-original.svg",
      HTML: "html5/html5-original.svg",
      CSS: "css3/css3-original.svg",
      C: "c/c-original.svg",
      "C++": "cplusplus/cplusplus-original.svg",
      Go: "go/go-original.svg",
      Rust: "rust/rust-plain.svg",
    };

    const key = map[lang];
    if (!key) return null;

    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${key}`;
  };

  return (
    <div className="user-card">
      <h3 className="section-title">Tech Stack</h3>

      <div className="tech-grid">
        {topLanguages.map(([lang]) => {
          const logo = getLogo(lang);

          return (
            <div key={lang} className="tech-item">
              {logo ? (
                <img src={logo} alt={lang} />
              ) : (
                <div className="fallback">{lang[0]}</div>
              )}

              <span className="tooltip">{lang}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechInsights;