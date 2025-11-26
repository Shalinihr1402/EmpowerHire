
import React from "react";

export default function WorkFromHome() {
  return (
    <div style={styles.pageWrapper}>
      <h1 style={styles.heading}>Work From Home</h1>
      <p style={styles.text}>
        Discover remote job opportunities, freelance roles, online earning options, 
        and home-based flexible work such as assignment writing, notes writing, and packing jobs.
      </p>

      <div style={styles.cardGrid}>
        {categories.map((item, index) => (
          <div key={index} style={styles.card}>
            <h2 style={styles.cardTitle}>{item.title}</h2>
            <p style={styles.cardText}>{item.description}</p>
            <button style={styles.button}>Explore</button>
          </div>
        ))}
      </div>
    </div>
  );
}

/* WORK FROM HOME OPTIONS (Updated) */
const categories = [
  {
    title: "Remote Data Entry",
    description: "Simple data entry, form filling, and copy-paste tasks from home.",
  },
  {
    title: "Freelance Jobs",
    description: "Online work like writing, graphic design, coding, virtual assistance, and more.",
  },
  {
    title: "Online Tutoring",
    description: "Teach academics, languages, or skills to students worldwide.",
  },
  {
    title: "Customer Support (Remote)",
    description: "Chat process, telecaller, and remote support roles for companies.",
  },
  {
    title: "Digital Marketing (Remote)",
    description: "Work on SEO, social media management, online ads, and content posting.",
  },
  {
    title: "Content Creation",
    description: "Create videos, reels, blogs, and earn via YouTube, Instagram, and freelancing.",
  },
  {
    title: "Assignment Writing",
    description: "Work on assignment completion, project writing, and academic tasks for clients.",
  },
  {
    title: "Notes Writing",
    description: "Handwritten or typed notes creation for students, coaching centers, and institutions.",
  },
  {
    title: "Packing Jobs (Home Based)",
    description: "Home-based product packing jobs for small businesses and startups.",
  },
];

const styles = {
  pageWrapper: {
    padding: "40px",
    textAlign: "center",
    backgroundColor: "#F7F9FC",
    minHeight: "100vh",
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

  cardGrid: {
    marginTop: "35px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "25px",
    padding: "20px",
  },

  card: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    textAlign: "left",
    transition: "0.3s",
  },

  cardTitle: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#0057ff",
  },

  cardText: {
    fontSize: "15px",
    color: "#444",
    marginTop: "10px",
  },

  button: {
    marginTop: "15px",
    backgroundColor: "#0057ff",
    color: "#fff",
    padding: "10px 15px",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    width: "100%",
  },
};
