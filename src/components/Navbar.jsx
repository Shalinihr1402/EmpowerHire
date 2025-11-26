import React, { useState } from "react";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [openJobsMenu, setOpenJobsMenu] = useState(false);  // FIXED

  return (
    <nav style={styles.navbar}>
      {/* Logo */}
      <div style={styles.logo}>EmpowerHire</div>

      {/* Links */}
      <ul style={styles.navLinks}>
        <li><a href="/" style={styles.link}>Home</a></li>

        {/* JOBS DROPDOWN */}
        <li
          style={styles.dropdown}
          onMouseEnter={() => setOpenJobsMenu(true)}   // FIXED
          onMouseLeave={() => setOpenJobsMenu(false)}  // FIXED
        >
          <span style={styles.link}>Jobs ⌄</span>

          {openJobsMenu && (                         // FIXED
            <div style={styles.dropdownMenu}>
              <a href="/it-jobs" style={styles.dropdownItem}>IT Jobs</a>
              <a href="/non-it-jobs" style={styles.dropdownItem}>Non-IT Jobs</a>
              <a href="/mnc-jobs" style={styles.dropdownItem}>MNC Jobs</a>
              <a href="/government-jobs" style={styles.dropdownItem}>Government Jobs</a>
              <a href="/work-from-home" style={styles.dropdownItem}>Work From Home</a>  {/* FIXED */}
            </div>
          )}
        </li>

        <li><a href="/ai-tools" style={styles.link}>AI Tools</a></li>
        <li><a href="/mock-tests" style={styles.link}>Mock Tests</a></li>
      </ul>

      {/* RIGHT SIDE */}
      <div style={styles.rightSection}>
        {!isLoggedIn ? (
          <a href="/register" style={styles.registerButton}>Register</a>
        ) : (
          <a href="/profile">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
              alt="profile"
              style={styles.profileIcon}
            />
          </a>
        )}
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 15px rgba(0,0,0,0.1)",
  },

  logo: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#0057ff",
  },

  navLinks: {
    display: "flex",
    gap: "25px",
    listStyle: "none",
  },

  link: {
    textDecoration: "none",
    color: "#444",
    fontSize: "18px",
  },

  dropdown: {
    position: "relative",
  },

  dropdownMenu: {
    position: "absolute",
    top: "30px",
    backgroundColor: "#fff",
    padding: "10px",
    borderRadius: "10px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    width: "180px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  dropdownItem: {
    color: "#444",
    textDecoration: "none",
    padding: "8px",
    borderRadius: "6px",
    fontSize: "15px",
  },

  rightSection: {
    display: "flex",
    alignItems: "center",
  },

  registerButton: {
    backgroundColor: "#0057ff",
    color: "#fff",
    padding: "8px 18px",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "bold",
  },

  profileIcon: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    cursor: "pointer",
  },
};
