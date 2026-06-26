import "../styles/popularArea.css";

const PopularArea = ({ location, propListNumber, img }) => {
  return (
    <div className="popular-area" aria-label="popular area {location}">
      <div className="area-image-container" aria-label="area image container">
        <img src={img} alt={location.split(",")[0]} />
      </div>

      <div className="area-content" aria-label="area content">
        <h4>{location}</h4>
        <div
          className="area-property-listing-number"
          aria-label="area property listing number"
        >
          <p>{propListNumber}+ proerties</p>
        </div>
      </div>
    </div>
  );
};

export default PopularArea;
