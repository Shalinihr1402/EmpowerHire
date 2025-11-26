import React from "react";
import "./JobsPage.css"; // shared design for all pages
import "./Profile.css"; // small extra styles for form layout

export default function Profile() {
  return (
    <div className="jobs-wrapper">
      <h1 className="jobs-heading">User Profile</h1>
      <p className="jobs-text">
        Manage your profile, uploaded resumes, job applications, and preferences.
      </p>

      {/* Profile Form Card */}
      <div className="profile-card">
        <label className="profile-label">Full Name</label>
        <input type="text" placeholder="Enter your name" className="profile-input" />

        <label className="profile-label">Email</label>
        <input type="email" placeholder="Enter your email" className="profile-input" />

        <label className="profile-label">Phone Number</label>
        <input type="text" placeholder="Enter phone number" className="profile-input" />

        <label className="profile-label">Skills</label>
        <input
          type="text"
          placeholder="e.g., Java, React, Communication"
          className="profile-input"
        />

        <label className="profile-label">Upload Resume</label>
        <input type="file" className="profile-file" />

        <button className="apply-btn">Save Profile</button>
      </div>
    </div>
  );
}
