
import React from "react";

export default function Profile() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>User Profile</h1>
      <p style={styles.text}>Manage your profile, uploaded resumes, job applications, and preferences.</p>
    </div>
  );
}

const styles = {
  container: { padding: "50px", textAlign: "center" },
  heading: { fontSize: "36px", color: "#0057ff", fontWeight: "bold" },
  text: { marginTop: "10px", color: "#444", fontSize: "18px" },
};
