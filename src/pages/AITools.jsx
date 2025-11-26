import React from "react";

export default function AITools() {
  return (
    <div style={styles.pageWrapper}>
      <h1 style={styles.heading}>AI Tools</h1>
      <p style={styles.text}>
        Discover AI tools to help improve resumes, job search, interview prep, and productivity.
      </p>

      {/* AI Tool Cards */}
      <div style={styles.cardGrid}>
        {tools.map((tool, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.icon}>{tool.icon}</div>
            <h2 style={styles.cardTitle}>{tool.title}</h2>
            <p style={styles.cardText}>{tool.description}</p>
            <button style={styles.button}>Open Tool</button>
          </div>
        ))}
      </div>
    </div>
  );
}

/* AI Tools Data */
const tools = [
  {
    icon: "📝",
    title: "AI Resume Score",
    description: "Get an AI-powered score and feedback to improve your resume instantly.",
  },
  {
    icon: "🎙️",
    title: "Voice Job Search",
    description: "Search for jobs using your voice through AI voice recognition.",
  },
  {
    icon: "🤖",
    title: "AI Career Suggestions",
    description: "Let AI suggest job roles based on your skills and experience.",
  },
  {
    icon: "💬",
    title: "Interview Mentor",
    description: "Practice interview questions with an AI-based interview assistant.",
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
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "25px",
    padding: "20px",
  },

  card: {
    backgroundColor: "#fff",
    padding: "25px",
    borderRadius: "15px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    textAlign: "center",
    transition: "0.3s",
  },

  icon: {
    fontSize: "40px",
    marginBottom: "10px",
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
    height: "60px",
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
