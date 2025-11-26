import React from "react";
import "./JobsPage.css"; // shared modern UI for all job pages

export default function MNCJobs() {
  return (
    <div className="jobs-wrapper">
      <h1 className="jobs-heading">MNC Jobs</h1>
      <p className="jobs-text">
        Find opportunities in top multinational companies like TCS, Infosys,
        Wipro, Accenture, Capgemini, and Cognizant.
      </p>

      {/* Search Bar */}
      <div className="jobs-search">
        <input type="text" placeholder="Search MNC job roles..." />
        <button>Search</button>
      </div>

      {/* Job Cards */}
      <div className="jobs-grid">
        {jobData.map((job, index) => (
          <div key={index} className="jobs-card">
            <h2>{job.title}</h2>
            <p className="company">{job.company}</p>

            <p>
              <strong>Skills:</strong> {job.skills}
            </p>

            <p>
              <strong>Location:</strong> {job.location}
            </p>

            <button className="apply-btn">Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

/* MNC Job Data */
const jobData = [
  {
    title: "Business Analyst",
    company: "Accenture",
    skills: "SQL, Data Visualization, Excel",
    location: "Bangalore",
  },
  {
    title: "IT Support Engineer",
    company: "Capgemini",
    skills: "Troubleshooting, Networking",
    location: "Chennai",
  },
  {
    title: "Cloud Administrator",
    company: "Infosys",
    skills: "AWS, Linux, Shell Scripting",
    location: "Hyderabad",
  },
  {
    title: "Java Developer",
    company: "Cognizant",
    skills: "Java, Spring Boot, API",
    location: "Pune",
  },
];
