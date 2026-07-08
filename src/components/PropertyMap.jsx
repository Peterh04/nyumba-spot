import "leaflet/dist/leaflet.css";
import "../styles/map.css";

import { MapContainer, Marker, TileLayer } from "react-leaflet";
import L from "leaflet";

import PinIcon from "../assets/icons/pin2.svg";

const PropertyIcon = L.icon({
  iconUrl: PinIcon,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

const PropertyMap = ({ latitude, longitude }) => {
  return (
    <MapContainer
      className="property-map"
      center={[latitude, longitude]}
      zoom={15}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[latitude, longitude]} icon={PropertyIcon} />
    </MapContainer>
  );
};

export default PropertyMap;
