import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./JobsPage.css";
import "./JobDetails.css";

import jobData from "../data/jobsData"; // We'll create this next

export default function JobDetails() {
  const { id } = useParams();
  const job = jobData[id];

  const [openApply, setOpenApply] = useState(false);

  if (!job) {
    return <h2 className="jobs-heading">Job not found</h2>;
  }

  return (
    <div className="job-details-wrapper">
      <div className="job-details-card">

        {/* Company Logo */}
        <img src={job.logo} alt="company logo" className="job-logo" />

        {/* Job Header */}
        <h1 className="job-title">{job.title}</h1>
        <p className="job-company">{job.company}</p>

        {/* Location + Salary */}
        <div className="job-info">
          <p><strong>📍 Location:</strong> {job.location}</p>
          <p><strong>💰 Salary:</strong> {job.salary}</p>
        </div>

        {/* Tags */}
        <div className="job-tags">
          {job.accessibility.map((tag, index) => (
            <span key={index} className="job-tag">{tag}</span>
          ))}
        </div>

        {/* Description */}
        <h3 className="section-title">Job Description</h3>
        <p className="job-description">{job.description}</p>

        {/* Skills */}
        <h3 className="section-title">Required Skills</h3>
        <ul className="skills-list">
          {job.skills.map((skill, index) => (
            <li key={index}>✔ {skill}</li>
          ))}
        </ul>

        {/* Apply Button */}
        <button onClick={() => setOpenApply(true)} className="apply-btn-big">
          Apply Now
        </button>
      </div>

      {/* APPLY MODAL */}
      {openApply && (
        <div className="apply-modal">
          <div className="apply-card">
            <h2>Apply for {job.title}</h2>

            <input type="text" placeholder="Full Name" className="apply-input" />
            <input type="email" placeholder="Email Address" className="apply-input" />
            <input type="file" className="apply-input" accept=".pdf,.doc,.docx" />

          <button
  className="apply-btn"
  onClick={() => window.location.href = "/apply-success"}
>
  Submit Application
</button>


            <p className="close-btn" onClick={() => setOpenApply(false)}>✖ Close</p>
          </div>
        </div>
      )}
    </div>
  );
}
