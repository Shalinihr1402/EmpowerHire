import React from "react";

export default function Navbar() {
  return (
    <nav
      style={{
        width: "100%",
        padding: "15px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #e5e5e5",
        position: "sticky",
        top: 0,
        background: "white",
        zIndex: 10,
      }}
    >
      <h2 style={{ margin: 0, color: "#007bff", fontWeight: "bold" }}>
        Job Finder
      </h2>

      <div style={{ display: "flex", gap: "20px", fontSize: "18px" }}>
        <a href="#" style={{ textDecoration: "none", color: "black" }}>
          Home
        </a>
        <a href="#" style={{ textDecoration: "none", color: "black" }}>
          Jobs
        </a>
        <a href="#" style={{ textDecoration: "none", color: "black" }}>
          Companies
        </a>
        <a href="#" style={{ textDecoration: "none", color: "black" }}>
          Login
        </a>
      </div>
    </nav>
  );
}
