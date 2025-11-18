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
        background: "white",
      }}
    >
      <h2 style={{ margin: 0, color: "#007bff", fontWeight: "bold" }}>
        EmpowerHire
      </h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <a href="#" style={{ textDecoration: "none", color: "black" }}>Home</a>
      </div>
    </nav>
  );
}
