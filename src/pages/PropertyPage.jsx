import { lazy, Suspense, useState } from "react";
import "../styles/propertyPage.css";

import BackIcon from "../assets/icons/back.svg?react";
import LikeIcon from "../assets/icons/like.svg?react";
import UnLikeIcon from "../assets/icons/like-outline.svg?react";
import ShareIcon from "../assets/icons/outline-share.svg?react";
import CalendarIcon from "../assets/icons/calendar.svg?react";
import PhoneIcon from "../assets/icons/phone.svg?react";
import PinIcon from "../assets/icons/pin.svg?react";
import BedIcon from "../assets/icons/bed.svg?react";
import BathIcon from "../assets/icons/bath.svg?react";
import SizeIcon from "../assets/icons/size.svg?react";
import ApartmentIcon from "../assets/icons/apartment.svg?react";
import VerifiedIcon from "../assets/icons/verified.svg?react";
import StarIcon from "../assets/icons/star.svg?react";

import PropertyShare from "../components/PropertyShare";
import MediaContainer from "../components/MediaContainer";
import PropertyAmenity from "../components/PropertyAmenity";
import MapSkeleton from "../components/MapSkeleton.jsx";
import PropertyOverview from "../components/PropertyOverview.jsx";
import PropertyRequirmetsRules from "../components/PropertyRequirmetsRules.jsx";
import PropertyNearbyPlaces from "../components/PropertyNearbyPlaces.jsx";

const PropertyMap = lazy(() => import("../components/PropertyMap.jsx"));
const PropertyPage = () => {
  const [like, setLike] = useState(false);

  const like_unlike = () => {
    setLike((prev) => !prev);
  };
  return (
    <main className="property-page" aria-label="property page">
      <header
        className="property-page-header"
        aria-label="property page heade"
        role="navigation"
      >
        <ul className="navigation" aria-label="navigation" role="navigation">
          <li>
            <a href="/">
              <BackIcon className="fa back-icon" />
            </a>
          </li>
        </ul>

        <div className="nav-actions" aria-label="nav actions">
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
          <button className="share-btn" aria-label="share button">
            <ShareIcon className="fa" />
          </button>
        </div>
      </header>

      <div
        className="property-page-action-bar"
        aria-label="property page action bar"
        role="navigation"
      >
        <button className="call-btn" aria-label="call button">
          <PhoneIcon className="fa" />
          Call Agent
        </button>
        <button className="book-btn" aria-label="book viewing button">
          <CalendarIcon className="fa" />
          Request Viewing
        </button>
      </div>

      <div className="product-page-content" aria-label="product page content">
        <div
          className="product-page-content-main"
          aria-label="product page content main"
        >
          <MediaContainer />

          <div
            className="property-listing-container"
            aria-label="property listing container"
          >
            <div className="listing-header" aria-label="listing header">
              <h3>Claire Apartments</h3>
              <p className="listing-price desk">
                <span>KES 45,000 </span>/ month
              </p>
            </div>
            <div className="listing-metadata" aria-label="listing metadata">
              <p>
                <PinIcon className="fa" /> Kilimani, Nairobi
              </p>
              <p className="listing-price">
                <span>KES 45,000 </span>/ month
              </p>
            </div>

            <div
              className="listing-summary-overview"
              aria-label="listing summary overview"
            >
              <div
                className="listing-overview"
                aria-label="listing overview bed"
              >
                <BedIcon className="fa" />1 Bed
              </div>

              <div
                className="listing-overview"
                aria-label="listing overview bath"
              >
                <BathIcon className="fa" />1 Bath
              </div>

              <div
                className="listing-overview"
                aria-label="listing overview size"
              >
                <SizeIcon className="fa" />
                50 sqm
              </div>

              <div
                className="listing-overview apartment"
                aria-label="listing overview bath"
              >
                <ApartmentIcon className="fa" /> Apartment
              </div>
            </div>

            <div
              className="listing-agent-verification"
              aria-label="isting agent verification"
            >
              <div
                className="listing-verifcation-profile"
                aria-label="listing verifcation profile"
              >
                <div
                  className="listing-agent-profile-image"
                  aria-label="listing-agent-profile-image"
                >
                  <img
                    src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                    alt=""
                    className="profile-image"
                    aria-label="profile-image"
                  />
                </div>
                <div
                  className="listing-agent-profile"
                  aria-label="listing agent profile"
                >
                  <h5>
                    NyumbaSpot verified Agent <VerifiedIcon className="fa" />
                  </h5>
                  <h5>NyumbaSpot Estates</h5>
                  <p
                    className="listing-agent-rating"
                    aria-label="listing agent rating"
                  >
                    4.8
                    <StarIcon className="fa" />
                    (120 reviews)
                  </p>
                </div>
              </div>

              <button className="desk-btn" aria-label="chat with agent button">
                Chat with Agent
              </button>
            </div>

            <div
              className="property-description"
              aria-label="Property Description"
            >
              <h5>Description</h5>
              <p>
                A modern and stylish 1bedroom apartment in the heart of
                Kilimani. Features a spacious living area, open kitchen,
                balcony, ample natural light and secure parking.
              </p>
            </div>

            <div className="property-amenities" aria-label="property amenities">
              <h5>Amenities</h5>
              <div
                className="property-amenities-container"
                aria-label="property amenities container"
              >
                <PropertyAmenity name={"WI-FI"} />
                <PropertyAmenity name={"Parking"} />
                <PropertyAmenity name={"Security"} />
                <PropertyAmenity name={"Water"} />
                <PropertyAmenity name={"Generator"} />
                <PropertyAmenity name={"Elevator"} />
                <PropertyAmenity name={"Balcony"} />
                <PropertyAmenity name={"Cctv"} />
                <PropertyAmenity name={"Gym"} />
              </div>
            </div>

            <div className="property-location" aria-label="Property location">
              <h5>Location</h5>
              <Suspense fallback={<MapSkeleton />}>
                <PropertyMap
                  latitude={-1.2027437319419985}
                  longitude={36.90580947179994}
                />
              </Suspense>
            </div>

            <PropertyOverview />

            <div className="property-costs" aria-label="property costs">
              <h4>Move-in Costs</h4>
              <p>All estimated costs you'll pay when moving in.</p>
              <div className="cost-item" aria-label="property cost item">
                <div
                  className="cost-item-name"
                  aria-label="cost item name cotainer"
                >
                  <p>Monthly Rent</p>
                </div>
                <p>KES 45,000</p>
              </div>
              <div className="cost-item" aria-label="property cost item">
                <div
                  className="cost-item-name"
                  aria-label="cost item name cotainer"
                >
                  <p>Security Deposit</p>
                  <span>(Refundable)</span>
                </div>
                <p>KES 45,000</p>
              </div>
              <div className="cost-item" aria-label="property cost item">
                <div
                  className="cost-item-name"
                  aria-label="cost item name cotainer"
                >
                  <p>Water Deposit</p>
                  <span>(Refundable)</span>
                </div>
                <p>KES 2,000</p>
              </div>
              <div className="cost-item" aria-label="property cost item">
                <div
                  className="cost-item-name"
                  aria-label="cost item name cotainer"
                >
                  <p>Electricty Token Deposit</p>
                  <span>(Refundable)</span>
                </div>
                <p>KES 1,000</p>
              </div>
              <div
                className="total-cost-container"
                aria-label="total cost container"
              >
                <p>Total Move-in Cost</p>
                <span aria-label="total estimate cost">KES 93,000</span>
              </div>
              <span>
                <sup>*</sup>Costs may vary. Confirm with the agent
              </span>
            </div>

            <PropertyRequirmetsRules />

            <PropertyNearbyPlaces />

            <PropertyShare />
          </div>
        </div>

        <div
          className="product-page-content-side"
          aria-label="product page content side"
        >
          <div className="book-contact" aria-label="book and contact agent">
            <h4>Interested in this property?</h4>
            <p>Contact the agent for more deatils or schedule a viewing.</p>
            <button className="book-btn" aria-label="book viewing button">
              <CalendarIcon className="fa" />
              Request Viewing
            </button>
            <button className="call-btn" aria-label="call button">
              <PhoneIcon className="fa" />
              Call Agent
            </button>
          </div>

          <PropertyOverview />

          <PropertyShare />
        </div>
      </div>
    </main>
  );
};

export default PropertyPage;
