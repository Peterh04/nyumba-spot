import "../styles/homePage.css";

import heroImage from "../assets/hero.jpeg";
import SearchIcon from "../assets/icons/search.svg?react";
import HouseIcon from "../assets/icons/house.svg?react";
import TrustIcon from "../assets/icons/trust.svg?react";
import SupportIcon from "../assets/icons/support.svg?react";
import ClientIcon from "../assets/icons/client.svg?react";
import GlobeIcon from "../assets/icons/globe.svg?react";
import XIcon from "../assets/icons/x.svg?react";
import InstagramIcon from "../assets/icons/instagram.svg?react";
import TiktokIcon from "../assets/icons/tiktok.svg?react";

import Header from "../components/Header";
import PropertyPreview from "../components/Propertypreview.jsx";
import PopularArea from "../components/PopularArea.jsx";

import CloudinaryHeroImage from "../components/CloudinaryHeroImage";
import useIsMobile from "../hooks/useIsMobile.jsx";

export default function HomePage() {
  const isMobile = useIsMobile();

  const properties = [
    {
      name: "Claire Apartments",
      price: "20000",
      loaction: "Kilimmani",
      image: "2",
    },
    {
      name: "Claire Apartments",
      price: "20000",
      loaction: "Kilimmani",
      image: "2",
    },
    {
      name: "Claire Apartments",
      price: "20000",
      loaction: "Kilimmani",
      image: "2",
    },
    {
      name: "Claire Apartments",
      price: "20000",
      loaction: "Kilimmani",
      image: "2",
    },
    {
      name: "Claire Apartments",
      price: "20000",
      loaction: "Kilimmani",
      image: "2",
    },
    {
      name: "Claire Apartments",
      price: "20000",
      loaction: "Kilimmani",
      image: "2",
    },
    {
      name: "Claire Apartments",
      price: "20000",
      loaction: "Kilimmani",
      image: "2",
    },
    {
      name: "Claire Apartments",
      price: "20000",
      loaction: "Kilimmani",
      image: "2",
    },
    {
      name: "Claire Apartments",
      price: "20000",
      loaction: "Kilimmani",
      image: "2",
    },
  ];

  const visibleProperties = isMobile ? properties.slice(0, 4) : properties;

  return (
    <main className="home-page" aria-label="homepage">
      <Header />
      <section className="hero-section" aria-label="hero section">
        <div className="hero-overlay" aria-label="hero oval"></div>
        <CloudinaryHeroImage />
        <div className="section-content" aria-label="section content">
          <h1>
            FIND YOUR NEXT HOME <span className="span">WITH EASE</span>
          </h1>

          <p>
            Explore modern houses, apartments, and investment properties through
            verified listings. Find what fits you faster, without the hassle.
          </p>
        </div>

        <form className="filter-form" aria-label="filter form">
          <div className="form-controls" aria-label="form controls">
            <label aria-label="location">Location</label>
            <input type="text" />
          </div>
          <div className="form-controls" aria-label="form controls">
            <label aria-label="beds">Beds</label>
            <input type="number" />
          </div>
          <div className="form-controls" aria-label="form controls">
            <label aria-label="price range">Price Range</label>
            <input type="number" />
          </div>
          <button>
            Search Now
            <SearchIcon className="fa" />
          </button>
        </form>
      </section>

      <div className="trust-slip" aria-label="trust slip">
        <div className="individual-slip" aria-label="properties listed">
          <div className="slip-icon-container house-container">
            <HouseIcon className="fa" />
          </div>
          <div className="slip-content" aria-label="slip content">
            <h3>20+</h3>
            <h4>Properties Listed</h4>
            <p>Wide range of verified properties.</p>
          </div>
        </div>
        <div className="individual-slip" aria-label="trusted agents">
          <div className="slip-icon-container agents-container">
            <TrustIcon className="fa" />
          </div>
          <div className="slip-content" aria-label="slip content">
            <h3>10+</h3>
            <h4>Trusted Agents</h4>
            <p>Experienced agents ready to help you.</p>
          </div>
        </div>
        <div className="individual-slip">
          <div className="slip-icon-container clients-container">
            <ClientIcon className="fa" />
          </div>
          <div className="slip-content" aria-label="slip content">
            <h3>50+</h3>
            <h4>Happy Clients</h4>
            <p>Succesfully found their dream homes.</p>
          </div>
        </div>
        <div className="individual-slip">
          <div className="slip-icon-container support-container">
            <SupportIcon className="fa" />
          </div>
          <div className="slip-content" aria-label="slip content">
            <h3>24/7</h3>
            <h4>Support</h4>
            <p>We're here to help you at anytime.</p>
          </div>
        </div>
      </div>

      <section
        className="featured-properities"
        aria-label="featured properities"
      >
        <h2>EXPLORE FEATURED PROPERTIES</h2>
        <div
          className="property-preview-container"
          aria-label="property preview container"
        >
          {visibleProperties.map((prop, idx) => (
            <PropertyPreview key={idx} />
          ))}
        </div>
        {isMobile && (
          <button
            className="view-featured-btn"
            aria-label="view all featured button"
          >
            View all featured
          </button>
        )}
      </section>

      <section className="popular-areas" aria-label="popular areas">
        <h2>EXPLORE HOMES IN POPULAR AREAS</h2>
        <div className="areas-preview-container" aria-label="areas preview">
          <PopularArea
            name={"Kileleshwa"}
            propListNumber={20}
            location={"Kileleshwa, Nairobi"}
            img={
              "https://streamlinefeed.tech/storage/v1/object/public/media/2e9c28c1-5423-4303-a3e9-26fb1dd34d76/8d55ff04-4f8f-463d-b495-47096455d4ce.jpg"
            }
          />
          <PopularArea
            name={"Ruiru"}
            propListNumber={60}
            location={"Ruiru, Kiambu"}
            img={
              "https://www.constructionkenya.com/wp-content/uploads/2020/07/Ruiru-town.jpeg"
            }
          />
          <PopularArea
            name={"Roysambu"}
            propListNumber={10}
            location={"Roysambu, Nairobi"}
            img={
              "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEZvJo_qz6TNc789t9lfAZx_WywAF59lAc--KUFj8-oVlwG2cPZkQ1qLrJ3L0kYlwJ9pRQ-3-KFBIFGYtFTiIF1NgH4E1BhnPF_bO7qW8nWPRj9N5DIJi1eQGRPqRCt5qNdln6NZAbIGMhL=s1360-w1360-h1020-rw"
            }
          />
          <PopularArea
            name={"Westlands"}
            propListNumber={10}
            location={"Westlands, Nairobi"}
            img={
              "https://sydiarealty.com/wp-content/uploads/2024/09/09a88b2f-e21e-4e97-af85-0ab0a860af45.jpg"
            }
          />
          <PopularArea
            name={"Kasarani"}
            propListNumber={10}
            location={"Kasarani, Nairobi"}
            img={
              "https://gregori-international.com/wp-content/uploads/2025/08/KASARANI-STADIUM-RETOUCHEE-31052018.webp"
            }
          />
          <PopularArea
            name={"Parklands"}
            propListNumber={20}
            location={"Parklands, Nairobi"}
            img={"https://i.redd.it/7pq8c8tntx961.jpg"}
          />
          <PopularArea
            name={"Lower Kabete"}
            propListNumber={20}
            location={"Lower Kabete, Kiambu"}
            img={"https://pbs.twimg.com/media/EPbU3aNXkAEWabj.jpg"}
          />
        </div>
      </section>
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
          <div
            className="footer-lang-currency"
            aria-label="footer lang currency"
          >
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
    </main>
  );
}
