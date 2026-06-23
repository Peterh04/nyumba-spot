import "../styles/homePage.css";
import Header from "../components/Header";
import heroImage from "../assets/hero.jpeg";
import SearchIcon from "../assets/icons/search.svg?react";
import HouseIcon from "../assets/icons/house.svg?react";
import TrustIcon from "../assets/icons/trust.svg?react";
import SupportIcon from "../assets/icons/support.svg?react";
import ClientIcon from "../assets/icons/client.svg?react";
import PropertyPreview from "../components/Propertypreview.jsx";

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
    </main>
  );
}
