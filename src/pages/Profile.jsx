import React from "react";

export default function Profile() {
  return (
    <div style={styles.pageWrapper}>
      <h1 style={styles.heading}>User Profile</h1>
      <p style={styles.text}>
        Manage your profile, uploaded resumes, job applications, and preferences.
      </p>

      {/* Profile Form */}
      <div style={styles.profileCard}>
        <label style={styles.label}>Full Name</label>
        <input type="text" placeholder="Enter your name" style={styles.input} />

        <label style={styles.label}>Email</label>
        <input type="email" placeholder="Enter your email" style={styles.input} />

        <label style={styles.label}>Phone Number</label>
        <input type="text" placeholder="Enter phone number" style={styles.input} />

        <label style={styles.label}>Skills</label>
        <input type="text" placeholder="e.g., Java, React, Communication" style={styles.input} />

        {/* Resume Upload */}
        <label style={styles.label}>Upload Resume</label>
        <input type="file" style={styles.fileInput} />

        <button style={styles.saveButton}>Save Profile</button>
      </div>
    </div>
  );
}

const styles = {
  pageWrapper: {
    padding: "40px",
    backgroundColor: "#F7F9FC",
    minHeight: "100vh",
    textAlign: "center",
  },

  heading: {
    fontSize: "40px",
    color: "#0057ff",
    fontWeight: "bold",
    marginBottom: "10px",
  },

  text: {
    fontSize: "18px",
    color: "#555",
    maxWidth: "620px",
    margin: "0 auto 30px",
  },

  profileCard: {
    backgroundColor: "#fff",
    padding: "30px",
    maxWidth: "500px",
    margin: "0 auto",
    borderRadius: "15px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    textAlign: "left",
  },

  label: {
    fontWeight: "bold",
    fontSize: "16px",
    color: "#333",
    display: "block",
    marginBottom: "6px",
    marginTop: "12px",
  },

  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    fontSize: "15px",
  },

  fileInput: {
    marginTop: "10px",
    marginBottom: "20px",
  },

  saveButton: {
    width: "100%",
    backgroundColor: "#0057ff",
    color: "#fff",
    padding: "12px",
    border: "none",
    borderRadius: "10px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "20px",
  },
};
