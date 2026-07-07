import "../styles/MapSkeleton.css";

const MapSkeleton = () => {
  return (
    <div className="map-skeleton">
      <div className="road road-horizontal road-1"></div>
      <div className="road road-horizontal road-2"></div>
      <div className="road road-vertical road-3"></div>
      <div className="road road-vertical road-4"></div>

      <div className="block block-1"></div>
      <div className="block block-2"></div>
      <div className="block block-3"></div>
      <div className="block block-4"></div>

      <div className="pin pin-1"></div>
    </div>
  );
};

export default MapSkeleton;
