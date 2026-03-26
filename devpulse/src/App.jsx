import { useState } from "react";
import SearchBar from "./components/SearchBar";
import { fetchUser, fetchRepos } from "./services/githubService";
import ProfileCard from "./components/ProfileCard";
import RepoList from "./components/RepoList";
import Skeleton from "./components/Skeleton";
import "./App.css";


/**
 * Root App Component
 */
function App() {
  // State management
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  /**
   * Handle search
   */
  const handleSearch = async (user) => {
    // Reset states before new request
    setLoading(true);
    setError("");
    setUserData(null);
    setRepos([]);

    try {
      // Parallel API calls (efficient)
      const [userRes, repoRes] = await Promise.all([
        fetchUser(user),
        fetchRepos(user),
      ]);

      setUserData(userRes);
      setRepos(repoRes);
    } catch (err) {
      setError("User not found or API error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <h1 className="title">DevPulse 🚀</h1>

      {/* Search Input */}
      <SearchBar onSearch={handleSearch} />

      {/* Empty State (before any search) */}
      {!loading && !userData && !error && (
        <p className="empty-state">
          🔍 Search for a developer to see insights
        </p>
      )}

      {/* Loading State (Skeleton UI) */}
      {loading && <Skeleton />}

      {/* Error State */}
      {error && !loading && <p className="error">{error}</p>}

      {/* Success State */}
      {userData && !loading && (
        <>
          <ProfileCard user={userData} />
          <RepoList repos={repos} />
        </>
      )}
    </div>
  );
}

export default App;