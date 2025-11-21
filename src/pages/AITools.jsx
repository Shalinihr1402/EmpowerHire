
import React from "react";

export default function AITools() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>AI Tools</h1>
      <p style={styles.text}>Discover AI tools to help improve resumes, job search, interview prep, and productivity.</p>
    </div>
  );
}

const styles = {
  container: { padding: "50px", textAlign: "center" },
  heading: { fontSize: "36px", color: "#0057ff", fontWeight: "bold" },
  text: { marginTop: "10px", color: "#444", fontSize: "18px" },
};
