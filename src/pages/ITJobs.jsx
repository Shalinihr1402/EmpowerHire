
import React from "react";
import "./JobsPage.css"; // shared modern UI

export default function ITJobs() {
  return (
    <div className="jobs-wrapper">
      <h1 className="jobs-heading">IT Jobs</h1>
      <p className="jobs-text">
        Explore the latest job roles in software development, cloud computing, AI,
        cybersecurity, and IT support.
      </p>

      {/* Search Bar */}
      <div className="jobs-search">
        <input type="text" placeholder="Search IT job roles..." />
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

/* Job Data */
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
