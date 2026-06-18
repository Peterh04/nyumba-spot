import "../styles/homePage.css";
import Header from "../components/Header";
import heroImage from "../assets/hero.jpeg";
import SearchIcon from "../assets/icons/search.svg?react";
import HouseIcon from "../assets/icons/house.svg?react";
import TrustIcon from "../assets/icons/trust.svg?react";
import SupportIcon from "../assets/icons/support.svg?react";
import ClientIcon from "../assets/icons/client.svg?react";
import CloudinaryHeroImage from "../components/CloudinaryHeroImage";

export default function HomePage() {
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
        <div className="individual-slip">
          <div className="slip-icon-container">
            <HouseIcon className="fa" />
          </div>
          <div className="slip-content" aria-label="slip content"></div>
        </div>
        <div className="individual-slip">
          <div className="slip-icon-container">
            <TrustIcon className="fa" />
          </div>
          <div className="slip-content" aria-label="slip content"></div>
        </div>
        <div className="individual-slip">
          <div className="slip-icon-container">
            <ClientIcon className="fa" />
          </div>
          <div className="slip-content" aria-label="slip content"></div>
        </div>
        <div className="individual-slip">
          <div className="slip-icon-container">
            <SupportIcon className="fa" />
          </div>
          <div className="slip-content" aria-label="slip content"></div>
        </div>
      </div>
    </main>
  );
}
