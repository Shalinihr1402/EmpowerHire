import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src="/logo.png" className="nav-logo" alt="EmpowerHire" />
        <h1 className="nav-title">EmpowerHire</h1>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/it-jobs">IT Jobs</Link>
        <Link to="/non-it-jobs">Non-IT Jobs</Link>
        <Link to="/mnc-jobs">MNC Jobs</Link>
        <Link to="/self-employed">Self Employment</Link>
        <Link to="/ai-tools">AI Tools</Link>
        <Link to="/profile">Profile</Link>

        <img src="/logo.png" className="navbar-logo" alt="EmpowerHire" />

      </div>
    </nav>
  );
}
