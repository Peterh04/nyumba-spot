import "../styles/propertyOverview.css";

const PropertyOverview = () => {
  return (
    <div className="property-overview" aria-label="property overview">
      <h4>Property Overview</h4>
      <div className="overview-item" aria-label="property type overview">
        <p>Property Type</p>
        <p>Apartments</p>
      </div>
      <div className="overview-item" aria-label="property bedroom overview">
        <p>Bedrooms</p>
        <p>1</p>
      </div>
      <div className="overview-item" aria-label="property bathroom overview">
        <p>Bathrooms</p>
        <p>1</p>
      </div>
      <div className="overview-item" aria-label="property size overview">
        <p>Property Size</p>
        <p>50 sqm</p>
      </div>
      <div className="overview-item" aria-label="property furnished overview">
        <p>Furnished</p>
        <p>Yes</p>
      </div>
      <div className="overview-item" aria-label="property floor overview">
        <p>Floor Level</p>
        <p>5th Floor</p>
      </div>
      <div className="overview-item" aria-label="property parking overview">
        <p>Parking</p>
        <p>Yes</p>
      </div>
      <div
        className="overview-item listed-overview"
        aria-label="property listed date overview"
      >
        <p>Listed On</p>
        <p>May 15, 2026</p>
      </div>
    </div>
  );
};

export default PropertyOverview;
