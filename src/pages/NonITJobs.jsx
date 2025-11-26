import React from "react";

export default function NonITJobs() {
  return (
    <div style={styles.pageWrapper}>
      <h1 style={styles.heading}>Non-IT Jobs</h1>
      <p style={styles.text}>
        Explore BPO, HR, Sales, Hospitality, Customer Support, Finance, and Admin roles.
      </p>

      {/* Search Bar */}
      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search Non-IT job roles..."
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

/* Sample Non-IT Job Data */
const jobData = [
  {
    title: "HR Executive",
    company: "Infosys",
    skills: "Communication, Recruitment",
    location: "Pune",
  },
  {
    title: "Customer Support Associate",
    company: "Amazon",
    skills: "English, Problem Solving",
    location: "Hyderabad",
  },
  {
    title: "Sales Executive",
    company: "Reliance Retail",
    skills: "Sales, Customer Handling",
    location: "Mumbai",
  },
  {
    title: "Admin Assistant",
    company: "Tata Motors",
    skills: "Excel, Coordination",
    location: "Delhi",
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
