import React from "react";
import "./JobsPage.css";

export default function NonITJobs() {
  return (
    <div className="jobs-wrapper">
      <h1 className="jobs-heading">Non-IT Jobs</h1>
      <p className="jobs-text">
        Explore administrative, HR, support, sales, and business roles.
      </p>

      {/* Filters */}
      <div className="jobs-filters">
        <select><option>Location</option></select>
        <select><option>Salary Range</option></select>
        <select><option>Work Type</option></select>
      </div>

      {/* Search */}
      <div className="jobs-search">
        <input type="text" placeholder="Search Non-IT roles..." />
        <button>Search</button>
      </div>

      {/* Card List */}
      <div className="jobs-grid">
        {nonITData.map((job, index) => (
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

const nonITData = [
  {
    title: "HR Executive",
    company: "Infosys",
    skills: "Communication, Recruitment",
    location: "Pune",
    tags: ["On-Site", "Low Communication"],
  },
  {
    title: "Customer Support Associate",
    company: "Amazon",
    skills: "English, Problem Solving",
    location: "Hyderabad",
    tags: ["Remote", "Hearing Friendly"],
  },
  {
    title: "Sales Executive",
    company: "Reliance Retail",
    skills: "Sales, Customer Handling",
    location: "Mumbai",
    tags: ["Field Work"],
  },
  {
    title: "Admin Assistant",
    company: "Tata Motors",
    skills: "Excel, Coordination",
    location: "Delhi",
    tags: ["On-Site"],
  },
];
