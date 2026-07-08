import "../styles/propertyNearbyPlaces.css";

const nearbyPlaces = [
  {
    place_name: "Kilimani Shell Petrol Station",
    distance: 0.8,
  },
  {
    place_name: "Kilimani Police Station",
    distance: 1.1,
  },
  {
    place_name: "Prestige Mall",
    distance: 1.3,
  },
  {
    place_name: "Adama Plaza",
    distance: 1.5,
  },
  {
    place_name: "Aga Khan Hospital",
    distance: 2.0,
  },
];

const PropertyNearbyPlaces = () => {
  return (
    <div className="property-nearby-places" aria-label="property nearby places">
      <h4>Nearby Places</h4>
      {nearbyPlaces.map((place, idx) => (
        <div
          className="nearby-place"
          aria-label="property nearby place"
          key={idx}
        >
          <p>{place.place_name}</p>
          <p>{place.distance} Km</p>
        </div>
      ))}
      <span>View all places</span>
    </div>
  );
};

export default PropertyNearbyPlaces;
