import WifiIcon from "../assets/icons/wifi2.svg?react";
import ParkingIcon from "../assets/icons/parking.svg?react";
import SecurityIcon from "../assets/icons/security.svg?react";
import WaterIcon from "../assets/icons/water.svg?react";
import GeneratorIcon from "../assets/icons/generator.svg?react";
import ElevatorIcon from "../assets/icons/elevator.svg?react";
import BalconyIcon from "../assets/icons/balcony.svg?react";
import CctvIcon from "../assets/icons/cctv.svg?react";
import GymIcon from "../assets/icons/gym.svg?react";

import "../styles/PropertyAmenity.css";

const PropertyAmenity = ({ name }) => {
  const amenityIcons = {
    "WI-FI": WifiIcon,
    Parking: ParkingIcon,
    Security: SecurityIcon,
    Water: WaterIcon,
    Generator: GeneratorIcon,
    Elevator: ElevatorIcon,
    Balcony: BalconyIcon,
    Cctv: CctvIcon,
    Gym: GymIcon,
  };

  const Icon = amenityIcons[name];
  return (
    <div className="property-amenity" aria-label="property amenity">
      <Icon className="fa" />
      <p>{name}</p>
    </div>
  );
};

export default PropertyAmenity;
