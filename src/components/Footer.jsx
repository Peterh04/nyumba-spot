import GlobeIcon from "../assets/icons/globe.svg?react";
import XIcon from "../assets/icons/x.svg?react";
import InstagramIcon from "../assets/icons/instagram.svg?react";
import TiktokIcon from "../assets/icons/tiktok.svg?react";

import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer" aria-label="footer">
      <div className="footer-container" aria-label="footer container">
        <div className="footer-item" aria-label="footer support">
          <h4>Support</h4>
          <ul className="footer-item-list" aria-label="footer item list">
            <li>Help Center</li>
            <li>FAQs</li>
            <li>Contact</li>
            <li>Report Listing</li>
            <li>Report Agent</li>
            <li>Report Bug</li>
          </ul>
        </div>
        <div className="footer-item" aria-label="footer agent">
          <h4>Agents</h4>
          <ul className="footer-item-list" aria-label="footer item list">
            <li>List Property</li>
            <li>Verification</li>
            <li>Pricing</li>
            <li>Report Client</li>
          </ul>
        </div>
        <div className="footer-item" aria-label="footer resources">
          <h4>Resources</h4>
          <ul className="footer-item-list" aria-label="footer item list">
            <li>How it works</li>
            <li>Renting Guide</li>
            <li> House Tips </li>
            <li>Move-in Checklist</li>
            <li>Best neighborhoods</li>
          </ul>
        </div>
        <div className="footer-item" aria-label="footer about">
          <h4>NyumbaSpot</h4>
          <ul className="footer-item-list" aria-label="footer item list">
            <li>About</li>
            <li>Careers</li>
            <li>Invest</li>
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
        </div>
      </div>
      <div className="footer-metadata" aria-label="footer metadata ">
        <div
          className="footer-nyumbaspot-copyrights desktop"
          aria-label="Nyumbaspot copyrights"
        >
          <p>© 2026 Nyumbaspot, Inc.</p>
        </div>
        <div className="footer-lang-currency" aria-label="footer lang currency">
          <p className="lang">
            <GlobeIcon className="fa" /> Eglish(US)
          </p>
          <p className="price">KES</p>
        </div>
        <div
          className="footer-nyumbaspot-socials"
          aria-label="Nyumbaspot Socials"
        >
          <XIcon className="fa" />
          <InstagramIcon className="fa" />
          <TiktokIcon className="fa" />
        </div>

        <div
          className="footer-nyumbaspot-copyrights mobile"
          aria-label="Nyumbaspot copyrights"
        >
          <p>© 2026 Nyumbaspot, Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
