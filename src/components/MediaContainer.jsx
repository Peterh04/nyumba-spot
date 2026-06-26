import { useState } from "react";
import "../styles/mediaContainer.css";
import MediaIcon from "../assets/icons/media.svg?react";

const MediaContainer = () => {
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);

  const media = [
    {
      type: "image",
      src: "https://trianum.co.ke/wp-content/uploads/2025/07/Corporate-Serviced-Apartments-in-Nairobi.jpg",
    },
    {
      type: "image",
      src: "https://propscout.co.ke/storage/properties/files/spacious-3-bedroom-apartment-for-sale-in-kilimani-p8rya.jpg",
    },
    {
      type: "image",
      src: "https://images.kenyapropertycentre.com/properties/images/49639/06846966e18275-3-bedroom-apartment-for-sale-kileleshwa-nairobi.jpg",
    },
    {
      type: "image",
      src: "https://images.kenyapropertycentre.com/properties/images/49639/0684696723853f-3-bedroom-apartment-for-sale-kileleshwa-nairobi.jpg",
    },
    {
      type: "image",
      src: "https://images.kenyapropertycentre.com/properties/images/49639/0684696723853f-3-bedroom-apartment-for-sale-kileleshwa-nairobi.jpg",
    },
    {
      type: "video",
      src: "https://www.shutterstock.com/shutterstock/videos/3934895203/preview/stock-footage-a-man-stands-in-his-apartment-visibly-frustrated-and-disappointed-holding-his-head-in-despair.webm",
      poster:
        "https://plus.unsplash.com/premium_photo-1709501455168-1aac22112489?q=80&w=2150&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  let total_media = media.length;
  let curentMediaIndex = selectedMediaIndex + 1;

  const updateMedia = (index) => {
    setSelectedMediaIndex(index);
  };
  return (
    <div className="media-container" aria-label="media-container">
      <div
        className="main-media-active-container"
        aria-label="main media active container"
      >
        {media[selectedMediaIndex].type === "image" ? (
          <img
            src={media[selectedMediaIndex].src}
            alt=""
            className="active-image"
            loading="eager"
          />
        ) : (
          <video
            src={media[selectedMediaIndex].src}
            className="active-image"
            controls={true}
            controlsList="nodownload nofullscreen noremoteplayback"
            preload="metadata"
            poster={media[selectedMediaIndex].poster}
            disablePictureInPicture
          />
        )}

        <div className="image-count" aria-label="image count">
          <MediaIcon className="fa" />
          <p>
            {curentMediaIndex} / {total_media}
          </p>
        </div>
      </div>

      <div
        className="media-thumbnail-container"
        aria-label="media thumbnail container"
      >
        {media.map((med, idx) => (
          <div
            className={`thumbnail-media ${idx === selectedMediaIndex ? "selected" : ""}`}
            aria-label="thumbnail media"
            key={idx}
            onClick={() => updateMedia(idx)}
          >
            <img
              className="thumbnail-media-image"
              src={med.type === "image" ? med.src : med.poster}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaContainer;
