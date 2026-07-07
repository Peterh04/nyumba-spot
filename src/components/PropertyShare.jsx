import WhatsappIcon from "../assets/icons/whatsapp.svg?react";
import FacebookIcon from "../assets/icons/facebook.svg?react";
import XIcon from "../assets/icons/x.svg?react";
import MailIcon from "../assets/icons/mail.svg?react";
import ChainIcon from "../assets/icons/chain.svg?react";

import "../styles/propertyShare.css";

const PropertyShare = () => {
  return (
    <div className="property-share" aria-label="property share">
      <h4>Share this property</h4>
      <p>Know someone looking for a home like this?</p>

      <ul className="property-share-links" aria-label="property share links">
        <li className="property-share-link" aria-label="property whatsaap link">
          <WhatsappIcon className="fa" />
        </li>
        <li className="property-share-link" aria-label="propert facebook link">
          <FacebookIcon className="fa" />
        </li>
        <li className="property-share-link" aria-label="propert x link">
          <XIcon className="fa" />
        </li>
        <li className="property-share-link" aria-label="propert mail link">
          <MailIcon className="fa" />
        </li>
        <li className="property-share-link" aria-label="propert other link">
          <ChainIcon className="fa" />
        </li>
      </ul>
    </div>
  );
};

export default PropertyShare;
