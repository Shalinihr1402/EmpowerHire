import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [openJobsMenu, setOpenJobsMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link to="/">EmpowerHire</Link>
      </div>

      {/* Hamburger Menu (Mobile) */}
      <div
        className="hamburger"
        onClick={() => setMobileMenu(!mobileMenu)}
      >
        ☰
      </div>

      {/* Nav Links */}
      <ul className={mobileMenu ? "nav-links mobile-open" : "nav-links"}>
        
        <li>
          <Link
            to="/"
            className={location.pathname === "/" ? "active" : ""}
          >
            Home
          </Link>
        </li>

        {/* Jobs Dropdown */}
        <li
          className="dropdown"
          onMouseEnter={() => setOpenJobsMenu(true)}
          onMouseLeave={() => setOpenJobsMenu(false)}
        >
          <span
            className={
              location.pathname.includes("jobs") ||
              location.pathname.includes("work-from-home")
                ? "active"
                : ""
            }
          >
            Jobs ⌄
          </span>

          {/* Dropdown Menu */}
          <div className={openJobsMenu ? "dropdown-menu show" : "dropdown-menu"}>
            <Link to="/it-jobs">IT Jobs</Link>
            <Link to="/non-it-jobs">Non-IT Jobs</Link>
            <Link to="/mnc-jobs">MNC Jobs</Link>
            <Link to="/government-jobs">Government Jobs</Link>
            <Link to="/work-from-home">Work From Home</Link>
          </div>
        </li>

        <li>
          <Link
            to="/ai-tools"
            className={location.pathname === "/ai-tools" ? "active" : ""}
          >
            AI Tools
          </Link>
        </li>

        <li>
          <Link
            to="/mock-tests"
            className={location.pathname === "/mock-tests" ? "active" : ""}
          >
            Mock Tests
          </Link>
        </li>

        <li>
          <Link
            to="/profile"
            className={location.pathname === "/profile" ? "active" : ""}
          >
            Profile
          </Link>
        </li>
        <li>
          <Link
             to="/register" className="register-btn">Register</Link>
        </li>

      </ul>
    </nav>
  );
}
