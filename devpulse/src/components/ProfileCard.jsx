const ProfileCard = ({ user }) => {
  return (
    <div className="user-card">
      <div className="profile-header">
        <img src={user.avatar_url} alt="avatar" className="avatar" />

        <div>
          <h2>{user.name || user.login}</h2>
          <p className="username">@{user.login}</p>
        </div>
      </div>

      {user.bio && <p className="bio">{user.bio}</p>}

      <div className="stats">
        <div>
          <strong>{user.followers}</strong>
          <span>Followers</span>
        </div>
        <div>
          <strong>{user.following}</strong>
          <span>Following</span>
        </div>
        <div>
          <strong>{user.public_repos}</strong>
          <span>Repos</span>
        </div>
      </div>

      <a
        href={user.html_url}
        target="_blank"
        rel="noreferrer"
        className="profile-btn"
      >
        View Profile →
      </a>
    </div>
  );
};

export default ProfileCard;