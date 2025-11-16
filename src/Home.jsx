import React from "react";

export default function Home() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>
        Find Your Job on <span style={{ color: "#007bff" }}>Job Finder</span>
      </h1>

      <p style={{ marginTop: "10px", fontSize: "18px", color: "gray" }}>
        Search thousands of jobs from top companies.
      </p>

      <div style={{ marginTop: "30px" }}>
        <input
          type="text"
          placeholder="Job title or keywords"
          style={{
            padding: "12px",
            width: "250px",
            marginRight: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />

        <input
          type="text"
          placeholder="Location"
          style={{
            padding: "12px",
            width: "250px",
            marginRight: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />

        <button
          style={{
            padding: "12px 20px",
            background: "#007bff",
            color: "white",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Search Jobs
        </button>
      </div>
    </div>
  );
}
