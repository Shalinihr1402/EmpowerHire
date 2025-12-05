import React from "react";
import "./JobsPage.css";

export default function MNCJobs() {
  return (
    <div className="jobs-wrapper">
      <h1 className="jobs-heading">MNC Jobs</h1>
      <p className="jobs-text">Top multinational companies hiring across India.</p>

      <div className="jobs-filters">
        <select><option>Location</option></select>
        <select><option>Salary Range</option></select>
        <select><option>Work Type</option></select>
      </div>

      <div className="jobs-search">
        <input type="text" placeholder="Search MNC roles..." />
        <button>Search</button>
      </div>

      <div className="jobs-grid">
        {mncData.map((job, index) => (
          <div key={index} className="jobs-card">
            <h2>{job.title}</h2>
            <p className="company">{job.company}</p>
            <p><strong>Skills:</strong> {job.skills}</p>
            <p><strong>Location:</strong> {job.location}</p>

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

const mncData = [
  {
    title: "Process Associate",
    company: "Cognizant",
    skills: "English, Typing",
    location: "Chennai",
    tags: ["Hybrid"],
  },
  {
    title: "IT Support Engineer",
    company: "IBM",
    skills: "Troubleshooting, Networking",
    location: "Bangalore",
    tags: ["On-Site", "Wheelchair Accessible"],
  },
  {
    title: "Financial Analyst",
    company: "Deloitte",
    skills: "Excel, Analysis",
    location: "Hyderabad",
    tags: ["Hybrid"],
  },
];
