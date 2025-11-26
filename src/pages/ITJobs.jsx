import React from "react";

export default function ITJobs() {
  return (
    <div style={styles.pageWrapper}>
      <h1 style={styles.heading}>IT Jobs</h1>
      <p style={styles.text}>
        Explore the latest job roles in software development, cloud computing, AI,
        cybersecurity, and IT support.
      </p>

      {/* Search Bar */}
      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search IT job roles..."
          style={styles.searchInput}
        />
        <button style={styles.searchButton}>Search</button>
      </div>

      {/* Job Cards */}
      <div style={styles.cardGrid}>
        {jobData.map((job, index) => (
          <div key={index} style={styles.jobCard}>
            <h2 style={styles.jobTitle}>{job.title}</h2>
            <p style={styles.company}>{job.company}</p>
            <p style={styles.details}>
              <strong>Skills:</strong> {job.skills}
            </p>
            <p style={styles.details}>
              <strong>Location:</strong> {job.location}
            </p>
            <button style={styles.applyButton}>Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Sample Job Data */
const jobData = [
  {
    title: "Software Developer",
    company: "TCS",
    skills: "React, Java, REST APIs",
    location: "Bangalore",
  },
  {
    title: "Cloud Engineer",
    company: "Wipro",
    skills: "AWS, Linux, Docker",
    location: "Hyderabad",
  },
  {
    title: "Data Analyst",
    company: "Infosys",
    skills: "SQL, Python, Power BI",
    location: "Chennai",
  },
  {
    title: "Cybersecurity Analyst",
    company: "Accenture",
    skills: "SOC, SIEM, Networking",
    location: "Pune",
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
    maxWidth: "600px",
    margin: "0 auto 30px",
  },

  searchContainer: {
    margin: "25px auto",
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },

  searchInput: {
    width: "300px",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },

  searchButton: {
    backgroundColor: "#0057ff",
    color: "#fff",
    padding: "12px 20px",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
  },

  cardGrid: {
    marginTop: "35px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "25px",
    padding: "20px",
  },

  jobCard: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    textAlign: "left",
    transition: "0.3s",
  },

  jobTitle: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#0057ff",
  },

  company: {
    fontSize: "16px",
    color: "#777",
    marginBottom: "10px",
  },

  details: {
    fontSize: "15px",
    color: "#444",
  },

  applyButton: {
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
