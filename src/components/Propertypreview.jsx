import "../styles/property-prieview.css";

import BedIcon from "../assets/icons/bed.svg?react";
import BathIcon from "../assets/icons/bath.svg?react";
import WifiIcon from "../assets/icons/wifi.svg?react";
import PinIcon from "../assets/icons/pin.svg?react";
import StarIcon from "../assets/icons/star.svg?react";
import LikeIcon from "../assets/icons/like.svg?react";
import UnLikeIcon from "../assets/icons/like-outline.svg?react";
import { useState } from "react";
import { Link } from "react-router-dom";

const PropertyPreview = () => {
  const [like, setLike] = useState(false);

  const like_unlike = (e) => {
    e.preventDefault();
    setLike((prev) => !prev);
  };

  return (
    <Link
      className="property-preview"
      aria-label="property preview"
      to={"/properties"}
    >
      <div className="property-image-container">
        <img
          src="https://serene.zendata.co.ke/web/image/website.gallery.image/9/image"
          className="property-image"
        />
        <button
          className="like-btn"
          aria-label="like button"
          onClick={like_unlike}
        >
          {like ? (
            <LikeIcon className="fa like" />
          ) : (
            <UnLikeIcon className="fa unlike" />
          )}
        </button>
      </div>
      <div className="property-meta" aria-label="property meta">
        <h3>Claire Apartments</h3>
        <p>
          <PinIcon className="fa property-icons" />
          Westlands, Nairobi
        </p>
        <div className="property-details" aria-label="property details">
          <p className="property-type" aria-label="property type">
            <BedIcon className="fa property-icons" />3 beds
          </p>
          <p className="property-bath" aria-label="property bath">
            <BathIcon className="fa property-icons" />2 baths
          </p>
          <p className="property-key-amenity" aria-label="property key amenity">
            <WifiIcon className="fa property-icons" />
            WI-FI
          </p>
        </div>
        <div className="property-ratings" aria-label="property ratings">
          <StarIcon className="fa property-icons" />
          <p>
            4.7<span>(18)</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PropertyPreview;
