import "../styles/header.css";

import SearchIcon from "../assets/icons/search.svg?react";
import MenuIcon from "../assets/icons/menu.svg?react";
import CloseIcon from "../assets/icons/close.svg?react";
import Logo from "../assets/nyumba_logo.svg?react";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchMenuOpen, setSearchMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const toggleSearchMenu = () => {
    setSearchMenuOpen((prev) => !prev);
  };
  return (
    <nav className="header" aria-label="header" role="navigation">
      <Logo className="logo" />

      <ul className="desktop-menu">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Services</a>
        </li>
        <li>
          <a href="">Property</a>
        </li>
        <li>
          <a href="">Blog</a>
        </li>
        <li>
          <a href="">Careers</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>

      <div className="nav-actions" aria-label="navbar action">
        <button className="icon-border" onClick={toggleSearchMenu}>
          <SearchIcon className="fa group-hover:text-white" />
        </button>
        <button
          className="menuBtn"
          aria-label="menu button"
          onClick={toggleMenu}
        >
          <MenuIcon className="fa" />
        </button>
      </div>

      <div className={`menu-overlay ${menuOpen ? "open" : ""}`} />

      <div className={`menu ${menuOpen ? "open" : ""} `}>
        <div className="menu-header" aria-label="menu header">
          <Logo className="logo" />

          <button
            className="closeBtn"
            aria-label="close button"
            onClick={toggleMenu}
          >
            <CloseIcon className="fa" />
          </button>
        </div>

        <ul className="menu-links" aria-label="menu links">
          <li className="menu-link" aria-label="menu link">
            <a href="">Home</a>
          </li>
          <li className="menu-link" aria-label="menu link">
            <a href="">About</a>
          </li>
          <li className="menu-link" aria-label="menu link">
            <a href="">Services</a>
          </li>
          <li className="menu-link" aria-label="menu link">
            <a href="">Property</a>
          </li>
          <li className="menu-link" aria-label="menu link">
            <a href="">Blog</a>
          </li>
          <li className="menu-link" aria-label="menu link">
            <a href="">Careers</a>
          </li>
          <li className="menu-link" aria-label="menu link">
            <a href="">Conntact</a>
          </li>
        </ul>
      </div>

      <div
        className={`search-container ${searchMenuOpen ? "open" : ""}`}
        aria-label="search container"
      >
        <form action="" className="search-form">
          <div
            className="search-form-container"
            aria-label="search from container"
          >
            <button>
              <SearchIcon className="fa" />
            </button>
            <input type="text" placeholder="Search Here" />
          </div>
        </form>
        <button
          className="close-search-btn"
          aria-label="close search button"
          onClick={toggleSearchMenu}
        >
          <CloseIcon className="fa" />
        </button>
      </div>
    </nav>
  );
}
