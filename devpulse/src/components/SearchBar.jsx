import { useState } from "react";

/**
 * SearchBar Component
 * Handles user input and sends username to parent
 */
const SearchBar = ({ onSearch }) => {
  // State to store input value
  const [username, setUsername] = useState("");

  /**
   * Trigger search when form is submitted
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    // Prevent empty search
    if (!username.trim()) return;

    onSearch(username);
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        placeholder="Enter GitHub username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;