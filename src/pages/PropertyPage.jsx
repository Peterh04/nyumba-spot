import "../styles/propertyPage.css";
import BackIcon from "../assets/icons/back.svg?react";
import { useState } from "react";
import LikeIcon from "../assets/property-share-linksicons/like.svg?react";
import UnLikeIcon from "../assets/icons/like-outline.svg?react";
import ShareIcon from "../assets/icons/outline-share.svg?react";
import CalendarIcon from "../assets/icons/calendar.svg?react";
import PhoneIcon from "../assets/icons/phone.svg?react";
import WhatsappIcon from "../assets/icons/whatsapp.svg?react";
import FacebookIcon from "../assets/icons/facebook.svg?react";
import XIcon from "../assets/icons/x.svg?react";
import MailIcon from "../assets/icons/mail.svg?react";
import ChainIcon from "../assets/icons/chain.svg?react";
import MediaContainer from "../components/MediaContainer";

const PropertyPage = () => {
  const [like, setLike] = useState(false);

  const like_unlike = () => {
    setLike((prev) => !prev);
  };
  return (
    <main className="property-page" aria-label="property page">
      <nav
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
      </nav>

      <div className="product-page-content" aria-label="product page content">
        <div
          className="product-page-content-main"
          aria-label="product page content main"
        >
          <MediaContainer />
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

          <div className="property-overview" aria-label="property overview">
            <h4>Property Overview</h4>
            <div className="overview-item" aria-label="property type overview">
              <p>Property Type</p>
              <p>Apartments</p>
            </div>
            <div
              className="overview-item"
              aria-label="property bedroom overview"
            >
              <p>Bedrooms</p>
              <p>1</p>
            </div>
            <div
              className="overview-item"
              aria-label="property bathroom overview"
            >
              <p>Bathrooms</p>
              <p>1</p>
            </div>
            <div className="overview-item" aria-label="property size overview">
              <p>Property Size</p>
              <p>50 sqm</p>
            </div>
            <div
              className="overview-item"
              aria-label="property furnished overview"
            >
              <p>Furnished</p>
              <p>Yes</p>
            </div>
            <div className="overview-item" aria-label="property floor overview">
              <p>Floor Level</p>
              <p>5th Floor</p>
            </div>
            <div
              className="overview-item"
              aria-label="property parking overview"
            >
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

          <div className="property-share" aria-label="property share">
            <h4>Share this property</h4>
            <p>Know someone looking for a home like this?</p>

            <ul
              className=""
              aria-label="property share links"
            >
              <li
                className="property-share-link"
                aria-label="property whatsaap link"
              >
                <WhatsappIcon className="fa" />
              </li>
              <li
                className="property-share-link"
                aria-label="propert facebook link"
              >
                <FacebookIcon className="fa" />
              </li>
              <li className="property-share-link" aria-label="propert x link">
                <XIcon className="fa" />
              </li>
              <li
                className="property-share-link"
                aria-label="propert mail link"
              >
                <MailIcon className="fa" />
              </li>
              <li
                className="property-share-link"
                aria-label="propert other link"
              >
                <ChainIcon className="fa" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PropertyPage;
