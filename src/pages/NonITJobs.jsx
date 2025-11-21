import React from "react";

export default function NonITJobs() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Non-IT Jobs</h1>
      <p style={styles.text}>Explore BPO, HR, Sales, Hospitality, and Admin jobs.</p>
    </div>
  );
}

const styles = {
  container: { padding: "50px", textAlign: "center" },
  heading: { fontSize: "36px", color: "#0057ff", fontWeight: "bold" },
  text: { marginTop: "10px", color: "#444", fontSize: "18px" },
};
