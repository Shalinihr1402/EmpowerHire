
import React from "react";
import "./JobsPage.css"; // shared design

export default function GovernmentJobs() {
  return (
    <div className="jobs-wrapper">
      <h1 className="jobs-heading">Government Jobs</h1>
      <p className="jobs-text">
        Explore the latest Central & State Government job openings including Railways, Banking, SSC, Police, and PSU jobs.
      </p>

      {/* Search Bar */}
      <div className="jobs-search">
        <input type="text" placeholder="Search government job roles..." />
        <button>Search</button>
      </div>

      {/* Job Cards */}
      <div className="jobs-grid">
        {jobData.map((job, index) => (
          <div key={index} className="jobs-card">
            <h2>{job.title}</h2>
            <p className="company">{job.department}</p>

            <p>
              <strong>Qualification:</strong> {job.qualification}
            </p>

            <p>
              <strong>Location:</strong> {job.location}
            </p>

            <button className="apply-btn">View Notification</button>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Government Job Listings */
const jobData = [
  {
    title: "Railway Assistant",
    department: "Indian Railways",
    qualification: "10th / 12th Pass",
    location: "Across India",
  },
  {
    title: "Bank Clerk",
    department: "SBI / IBPS",
    qualification: "Any Graduate",
    location: "All States",
  },
  {
    title: "Police Constable",
    department: "State Police Department",
    qualification: "10th / 12th Pass",
    location: "State-wise",
  },
  {
    title: "SSC MTS",
    department: "Staff Selection Commission",
    qualification: "10th Pass",
    location: "Across India",
  },
  {
    title: "Junior Assistant",
    department: "State Government",
    qualification: "PUC / Diploma",
    location: "State-wise",
  },
  {
    title: "Technical Assistant",
    department: "ISRO / DRDO",
    qualification: "Engineering Diploma",
    location: "Bangalore, Hyderabad",
  },
];
