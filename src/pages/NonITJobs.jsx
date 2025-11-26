import React from "react";
import "./JobsPage.css"; // shared modern UI design

export default function NonITJobs() {
  return (
    <div className="jobs-wrapper">
      <h1 className="jobs-heading">Non-IT Jobs</h1>
      <p className="jobs-text">
        Explore BPO, HR, Sales, Hospitality, Customer Support, Finance, and Admin roles.
      </p>

      {/* Search Bar */}
      <div className="jobs-search">
        <input type="text" placeholder="Search Non-IT job roles..." />
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

/* Non-IT Job Data */
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
