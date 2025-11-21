
import React from "react";

export default function SelfEmployed() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Self Employment</h1>
      <p style={styles.text}>Explore freelance, small business, digital marketing, and entrepreneurship opportunities.</p>
    </div>
  );
}

const styles = {
  container: { padding: "50px", textAlign: "center" },
  heading: { fontSize: "36px", color: "#0057ff", fontWeight: "bold" },
  text: { marginTop: "10px", color: "#444", fontSize: "18px" },
};
