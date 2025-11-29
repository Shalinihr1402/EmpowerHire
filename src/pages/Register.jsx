import React from "react";
import "./Auth.css";

export default function Register() {
  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h1>Create Account</h1>
        <p className="auth-sub">
          Start your journey with EmpowerHire — inclusive jobs for everyone.
        </p>

        {/* PERSONAL DETAILS */}
        <h3 className="section-title">Personal Details</h3>

        <input type="text" placeholder="Full Name" className="auth-input" />
        <input type="email" placeholder="Email Address" className="auth-input" />
        <input type="number" placeholder="Mobile Number" className="auth-input" />

        {/* DISABILITY DETAILS */}
        <h3 className="section-title">Disability Information</h3>

        <label className="auth-label">Disability Type</label>
        <select className="auth-input">
          <option value="">Select Disability Type</option>
          <option>Locomotor Disability</option>
          <option>Hearing Impairment</option>
          <option>Visual Impairment</option>
          <option>Intellectual Disability</option>
          <option>Autism Spectrum</option>
          <option>Multiple Disabilities</option>
          <option>Other</option>
        </select>

        <label className="auth-label">Disability Percentage (optional)</label>
        <input type="number" className="auth-input" placeholder="e.g., 40%" />

        <label className="auth-label">Assistive Needs</label>
        <select className="auth-input">
          <option value="">Select Assistance Required</option>
          <option>Wheelchair Access</option>
          <option>Screen Reader Support</option>
          <option>Sign Language Interpreter</option>
          <option>Large Text Display</option>
          <option>Flexible Hours</option>
          <option>Work From Home Friendly</option>
        </select>

        {/* EDUCATION DETAILS */}
        <h3 className="section-title">Education Details</h3>

        {/* SSLC */}
        <label className="auth-label">SSLC / 10th Percentage</label>
        <input type="number" placeholder="e.g., 78%" className="auth-input" />

        <label className="auth-label">SSLC Passing Year</label>
        <input type="number" placeholder="e.g., 2018" className="auth-input" />

        {/* PUC */}
        <label className="auth-label">PUC / 12th Percentage</label>
        <input type="number" placeholder="e.g., 82%" className="auth-input" />

        <label className="auth-label">PUC Passing Year</label>
        <input type="number" placeholder="e.g., 2020" className="auth-input" />

        {/* Graduation */}
        <label className="auth-label">Graduation Degree</label>
        <select className="auth-input">
          <option value="">Select Degree</option>
          <option>BSc</option>
          <option>BCom</option>
          <option>BA</option>
          <option>BBA</option>
          <option>BCA</option>
          <option>B.Tech / BE</option>
          <option>Other</option>
        </select>

        <label className="auth-label">Graduation Percentage</label>
        <input type="number" placeholder="e.g., 75%" className="auth-input" />

        <label className="auth-label">Graduation Passing Year</label>
        <input type="number" placeholder="e.g., 2024" className="auth-input" />

        {/* Post Graduation */}
        <label className="auth-label">Post Graduation (Optional)</label>
        <select className="auth-input">
          <option value="">Select PG Degree</option>
          <option>MBA</option>
          <option>MCOM</option>
          <option>MCA</option>
          <option>MSc</option>
          <option>MA</option>
          <option>MTech / ME</option>
          <option>None</option>
        </select>

        <label className="auth-label">PG Percentage (if applicable)</label>
        <input type="number" placeholder="e.g., 80%" className="auth-input" />

        <label className="auth-label">PG Passing Year (if applicable)</label>
        <input type="number" placeholder="e.g., 2026" className="auth-input" />

        {/* JOB PREFERENCE */}
        <h3 className="section-title">Job Preferences</h3>

        <label className="auth-label">Preferred Job Type</label>
        <select className="auth-input">
          <option>IT</option>
          <option>Non-IT</option>
          <option>Work From Home</option>
          <option>MNC</option>
          <option>Government Jobs</option>
        </select>

        <label className="auth-label">Skills</label>
        <input
          type="text"
          placeholder="e.g., Java, Typing, Communication"
          className="auth-input"
        />

        <label className="auth-label">Address / Location</label>
        <input type="text" placeholder="City, State" className="auth-input" />

        {/* RESUME UPLOAD */}
        <label className="auth-label">Upload Resume</label>
        <input type="file" className="file-input" />

        {/* PASSWORD SECTION */}
        <h3 className="section-title">Security</h3>

        <input type="password" placeholder="Password" className="auth-input" />
        <input type="password" placeholder="Confirm Password" className="auth-input" />

        <button className="auth-btn">Register</button>

        <p className="auth-link-text">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}
