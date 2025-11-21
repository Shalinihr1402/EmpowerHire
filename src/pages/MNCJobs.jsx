import React from "react";

export default function MNCJobs() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>MNC Jobs</h1>
      <p style={styles.text}>Find opportunities in top multinational companies like TCS, Infosys, Wipro, and Accenture.</p>
    </div>
  );
}

const styles = {
  container: { padding: "50px", textAlign: "center" },
  heading: { fontSize: "36px", color: "#0057ff", fontWeight: "bold" },
  text: { marginTop: "10px", color: "#444", fontSize: "18px" },
};
