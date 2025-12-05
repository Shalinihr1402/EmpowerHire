import React from "react";
import "./JobsPage.css";

export default function ITJobs() {
  return (
    <div className="jobs-wrapper">

      {/* HEADER */}
      <h1 className="jobs-heading">IT Job Opportunities</h1>
      <p className="jobs-text">
        Explore software development, cloud computing, AI, cybersecurity, and inclusive tech career roles.
      </p>

      {/* FILTERS */}
      <div className="jobs-filters">
        <select>
          <option>Location</option>
          <option>Bangalore</option>
          <option>Hyderabad</option>
          <option>Chennai</option>
          <option>Pune</option>
        </select>

        <select>
          <option>Salary Range</option>
          <option>₹3–5 LPA</option>
          <option>₹5–8 LPA</option>
          <option>₹8–12 LPA</option>
        </select>

        <select>
          <option>Work Type</option>
          <option>Remote</option>
          <option>Hybrid</option>
          <option>On-Site</option>
        </select>
      </div>

      {/* Search Bar */}
      <div className="jobs-search">
        <input type="text" placeholder="Search IT job roles..." />
        <button>Search</button>
      </div>

      {/* JOB LIST */}
      <div className="jobs-grid">
        {jobData.map((job, index) => (
          <div key={index} className="jobs-card">
            <h2>{job.title}</h2>
            <p className="company">{job.company}</p>

            <p><strong>Skills:</strong> {job.skills}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Salary:</strong> {job.salary}</p>

            {/* Accessibility tags */}
            <div className="tag-row">
              {job.tags.map((tag, i) => (
                <span className="job-tag" key={i}>{tag}</span>
              ))}
            </div>

            <button className="apply-btn">Apply Now</button>
          </div>
        ))}
      </div>

    </div>
  );
}

/* IMPROVED JOB DATA */
const jobData = [
  {
    title: "Software Developer",
    company: "TCS",
    skills: "React, Java, REST APIs",
    location: "Bangalore",
    salary: "₹6–10 LPA",
    tags: ["Remote", "Wheelchair Accessible"],
  },
  {
    title: "Cloud Engineer",
    company: "Wipro",
    skills: "AWS, Linux, Docker",
    location: "Hyderabad",
    salary: "₹5–9 LPA",
    tags: ["Hybrid", "Hearing Friendly"],
  },
  {
    title: "Data Analyst",
    company: "Infosys",
    skills: "SQL, Python, Power BI",
    location: "Chennai",
    salary: "₹4–8 LPA",
    tags: ["Remote", "Low Communication"],
  },
  {
    title: "Cybersecurity Analyst",
    company: "Accenture",
    skills: "SOC, SIEM, Networking",
    location: "Pune",
    salary: "₹6–11 LPA",
    tags: ["On-Site", "Vision Friendly"],
  },
];
