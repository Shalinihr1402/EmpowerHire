
import React from "react";

export default function ITJobs() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>IT Jobs</h1>
      <p style={styles.text}>Here you can explore Software Developer, Web Developer, and IT Engineer jobs.</p>
    </div>
  );
}

const styles = {
  container: { padding: "50px", textAlign: "center" },
  heading: { fontSize: "36px", color: "#0057ff", fontWeight: "bold" },
  text: { marginTop: "10px", color: "#444", fontSize: "18px" },
};
