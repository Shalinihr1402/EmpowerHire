import React from "react";
import "./JobsPage.css";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="jobs-wrapper">
      <h1 className="jobs-heading">My Profile</h1>
      <p className="jobs-text">
        Update your personal information, skills, disability details, and uploaded resume.
      </p>

      <div className="profile-card">

        {/* BASIC DETAILS */}
        <label className="profile-label">Full Name</label>
        <input type="text" className="profile-input" placeholder="Enter your name" />

        <label className="profile-label">Email</label>
        <input type="email" className="profile-input" placeholder="Enter your email" />

        <label className="profile-label">Phone Number</label>
        <input type="text" className="profile-input" placeholder="Enter phone number" />

        {/* DISABILITY DETAILS */}
        <label className="profile-label">Disability Type</label>
        <select className="profile-input">
          <option>Select Disability Type</option>
          <option>Locomotor Disability</option>
          <option>Hearing Impairment</option>
          <option>Visual Impairment</option>
          <option>Intellectual Disability</option>
          <option>Autism Spectrum</option>
          <option>Multiple Disabilities</option>
          <option>Other</option>
        </select>

        <label className="profile-label">Disability Percentage (optional)</label>
        <input type="number" className="profile-input" placeholder="e.g., 40%" />

        <label className="profile-label">Assistive Needs</label>
        <select className="profile-input">
          <option>Wheelchair Access</option>
          <option>Screen Reader Support</option>
          <option>Sign Language Interpreter</option>
          <option>Large Text Display</option>
          <option>Flexible Hours</option>
          <option>Work From Home</option>
        </select>

        {/* EDUCATIONAL DETAILS */}
        <h3 className="section-heading">Educational Details</h3>

        <label className="profile-label">SSLC Percentage</label>
        <input type="text" className="profile-input" placeholder="Enter SSLC %" />

        <label className="profile-label">SSLC Passing Year</label>
        <input type="text" className="profile-input" placeholder="e.g., 2018" />

        <label className="profile-label">PUC Percentage</label>
        <input type="text" className="profile-input" placeholder="Enter PUC %" />

        <label className="profile-label">PUC Passing Year</label>
        <input type="text" className="profile-input" placeholder="e.g., 2020" />

        <label className="profile-label">Graduation (Degree)</label>
        <input type="text" className="profile-input" placeholder="e.g., B.Com / BCA / B.Tech" />

        <label className="profile-label">Graduation Percentage</label>
        <input type="text" className="profile-input" placeholder="Enter Graduation %" />

        <label className="profile-label">Graduation Year</label>
        <input type="text" className="profile-input" placeholder="e.g., 2023" />

        <label className="profile-label">Post Graduation (Optional)</label>
        <input type="text" className="profile-input" placeholder="e.g., MBA / M.Tech" />

        <label className="profile-label">PG Percentage</label>
        <input type="text" className="profile-input" placeholder="Enter PG %" />

        <label className="profile-label">PG Passing Year</label>
        <input type="text" className="profile-input" placeholder="e.g., 2025" />

        {/* SKILLS */}
        <label className="profile-label">Skills</label>
        <input
          type="text"
          className="profile-input"
          placeholder="e.g., Java, Typing, Communication"
        />

        <label className="profile-label">Preferred Job Category</label>
        <select className="profile-input">
          <option>IT</option>
          <option>Non-IT</option>
          <option>Work From Home</option>
          <option>MNC</option>
          <option>Government Jobs</option>
        </select>

        {/* LOCATION */}
        <label className="profile-label">Address / Location</label>
        <input type="text" className="profile-input" placeholder="City, State" />

        {/* RESUME */}
        <label className="profile-label">Upload Resume</label>
        <input type="file" className="profile-file" />

        <button className="apply-btn">Save Profile</button>
      </div>
    </div>
  );
}
