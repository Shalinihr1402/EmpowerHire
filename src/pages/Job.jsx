import React, { useState } from "react";
import "./JobsPage.css";
import { Link } from "react-router-dom";


export default function Jobs() {

  // auto detect user's saved disability from Profile
  const savedDisability = localStorage.getItem("userDisability") || "";
  const [disabilityFilter, setDisabilityFilter] = useState(savedDisability);

  const filteredJobs = jobsData.filter((job) =>
    disabilityFilter === "" ? true : job.accessibility.includes(disabilityFilter)
  );

  return (
    <div className="jobs-wrapper">
      <h1 className="jobs-heading">Available Jobs</h1>
      <p className="jobs-text">
        Search disability-friendly jobs tailored to your needs.
      </p>

      {/* Disability Filter */}
      <div className="filter-box">
        <label>Filter by Disability Type</label>
        <select
          className="profile-input"
          value={disabilityFilter}
          onChange={(e) => {
            setDisabilityFilter(e.target.value);
            localStorage.setItem("userDisability", e.target.value);
          }}
        >
          <option value="">All Jobs</option>
          <option value="wheelchair">Wheelchair Accessible</option>
          <option value="visual">Visual Impairment Friendly</option>
          <option value="hearing">Hearing Impaired Friendly</option>
          <option value="intellectual">Low Cognitive Workload</option>
          <option value="workfromhome">Work From Home Suitable</option>
        </select>
      </div>

      {/* Job Cards */}
      <div className="jobs-grid">
        {filteredJobs.map((job, index) => (
          <div key={index} className="jobs-card">
            <h2>{job.title}</h2>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Location:</strong> {job.location}</p>

            <div className="tags">
              {job.accessibility.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>

            
            <Link to={`/job/${index}`} className="apply-btn">
  View Details
</Link>

          </div>
        ))}
      </div>
    </div>
  );
}


const jobsData = [
  {
    title: "Data Entry Operator",
    company: "Infosys",
    location: "Bangalore",
    accessibility: ["visual", "workfromhome"],
  },
  {
    title: "Customer Chat Support",
    company: "Amazon",
    location: "Work From Home",
    accessibility: ["hearing", "workfromhome"],
  },
  {
    title: "Front Desk Receptionist",
    company: "Apollo Hospitals",
    location: "Mysore",
    accessibility: ["wheelchair"],
  },
  {
    title: "Packaging Assistant",
    company: "Big Bazaar",
    location: "Davangere",
    accessibility: ["intellectual"],
  },
  {
    title: "Backend Office Assistant",
    company: "TCS",
    location: "Hyderabad",
    accessibility: ["visual", "workfromhome"],
  },
];
