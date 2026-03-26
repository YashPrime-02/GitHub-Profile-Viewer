/**
 * Skeleton Loader Component
 * Shows placeholder UI while loading
 */
const Skeleton = () => {
  return (
    <div className="skeleton-container">
      <div className="skeleton avatar-skeleton"></div>

      <div className="skeleton line"></div>
      <div className="skeleton line short"></div>

      <div className="skeleton repo"></div>
      <div className="skeleton repo"></div>
    </div>
  );
};

export default Skeleton;