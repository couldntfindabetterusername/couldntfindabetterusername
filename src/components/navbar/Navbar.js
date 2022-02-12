import "./Navbar.css";
import logo from "./logo.svg";

import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const url = useLocation();

  const [hamburger, setHamburger] = useState(false);
  return (
    <>
      <nav className="navbar-container">
        <div className="navbar-wrapper">
          <div className="logo-wrapper">
            <div
              className={url.pathname === "/" ? "logo logo-home" : "logo"}
              style={{
                backgroundImage: `url("${logo}")`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>

            <div
              className="hamburger-menu-wrapper"
              onClick={() => setHamburger(!hamburger)}
            >
              <div
                className={
                  hamburger
                    ? "hamburger-btn hamburger-btn-open"
                    : "hamburger-btn"
                }
              />
              <div
                className={
                  hamburger
                    ? "hamburger-btn hamburger-btn-open"
                    : "hamburger-btn"
                }
              />
              <div
                className={
                  hamburger
                    ? "hamburger-btn hamburger-btn-open"
                    : "hamburger-btn"
                }
              />
            </div>
          </div>

          <div className={hamburger ? "nav-links nav-links-open" : "nav-links"}>
            <NavLink
              to="/"
              className="nav-link"
              onClick={() => setHamburger(!hamburger)}
            >
              Home
            </NavLink>
            <NavLink
              to="/education"
              className="nav-link"
              onClick={() => setHamburger(!hamburger)}
            >
              Education
            </NavLink>
            <NavLink
              to="/skills"
              className="nav-link"
              onClick={() => setHamburger(!hamburger)}
            >
              Skills
            </NavLink>
            <NavLink
              to="/work"
              className="nav-link"
              onClick={() => setHamburger(!hamburger)}
            >
              Work
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
