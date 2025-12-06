import React, { useState } from "react";
import "./Auth.css";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    disability: "",
    disabilityPercent: "",
    assistiveNeeds: "",
    sslc: "",
    sslcYear: "",
    puc: "",
    pucYear: "",
    graduation: "",
    gradPercent: "",
    gradYear: "",
    pg: "",
    pgPercent: "",
    pgYear: "",
    jobType: "",
    skills: "",
    location: "",
    resume: null,
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    localStorage.setItem("userData", JSON.stringify(formData));
    alert("Registration Successful!");
  };

  return (
    <div className="auth-wrapper">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h1>Create Account</h1>
        <p className="auth-sub">
          Start your journey with EmpowerHire — inclusive jobs for everyone.
        </p>

        {/* PERSONAL DETAILS */}
        <h3 className="section-title">Personal Details</h3>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="auth-input"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="auth-input"
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="phone"
          placeholder="Mobile Number"
          className="auth-input"
          onChange={handleChange}
          required
        />

        {/* DISABILITY DETAILS */}
        <h3 className="section-title">Disability Information</h3>

        <label className="auth-label">Disability Type</label>
        <select
          className="auth-input"
          name="disability"
          onChange={handleChange}
        >
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
        <input
          type="number"
          name="disabilityPercent"
          placeholder="e.g., 40%"
          className="auth-input"
          onChange={handleChange}
        />

        <label className="auth-label">Assistive Needs</label>
        <select
          className="auth-input"
          name="assistiveNeeds"
          onChange={handleChange}
        >
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
        <input
          type="number"
          name="sslc"
          placeholder="e.g., 78%"
          className="auth-input"
          onChange={handleChange}
        />

        <label className="auth-label">SSLC Passing Year</label>
        <input
          type="number"
          name="sslcYear"
          placeholder="e.g., 2018"
          className="auth-input"
          onChange={handleChange}
        />

        {/* PUC */}
        <label className="auth-label">PUC / 12th Percentage</label>
        <input
          type="number"
          name="puc"
          placeholder="e.g., 82%"
          className="auth-input"
          onChange={handleChange}
        />

        <label className="auth-label">PUC Passing Year</label>
        <input
          type="number"
          name="pucYear"
          placeholder="e.g., 2020"
          className="auth-input"
          onChange={handleChange}
        />

        {/* Graduation */}
        <label className="auth-label">Graduation Degree</label>
        <select
          className="auth-input"
          name="graduation"
          onChange={handleChange}
        >
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
        <input
          type="number"
          name="gradPercent"
          placeholder="e.g., 75%"
          className="auth-input"
          onChange={handleChange}
        />

        <label className="auth-label">Graduation Passing Year</label>
        <input
          type="number"
          name="gradYear"
          placeholder="e.g., 2024"
          className="auth-input"
          onChange={handleChange}
        />

        {/* Post Graduation */}
        <label className="auth-label">Post Graduation (Optional)</label>
        <select className="auth-input" name="pg" onChange={handleChange}>
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
        <input
          type="number"
          name="pgPercent"
          placeholder="e.g., 80%"
          className="auth-input"
          onChange={handleChange}
        />

        <label className="auth-label">PG Passing Year (if applicable)</label>
        <input
          type="number"
          name="pgYear"
          placeholder="e.g., 2026"
          className="auth-input"
          onChange={handleChange}
        />

        {/* JOB PREFERENCE */}
        <h3 className="section-title">Job Preferences</h3>

        <label className="auth-label">Preferred Job Type</label>
        <select
          className="auth-input"
          name="jobType"
          onChange={handleChange}
        >
          <option>IT</option>
          <option>Non-IT</option>
          <option>Work From Home</option>
          <option>MNC</option>
          <option>Government Jobs</option>
        </select>

        <label className="auth-label">Skills</label>
        <input
          type="text"
          name="skills"
          placeholder="e.g., Java, Typing, Communication"
          className="auth-input"
          onChange={handleChange}
        />

        <label className="auth-label">Address / Location</label>
        <input
          type="text"
          name="location"
          placeholder="City, State"
          className="auth-input"
          onChange={handleChange}
        />

        {/* RESUME UPLOAD */}
        <label className="auth-label">Upload Resume</label>
        <input
          type="file"
          name="resume"
          accept=".pdf,.doc,.docx"
          className="file-input"
          onChange={handleChange}
        />

        {/* PASSWORD SECTION */}
        <h3 className="section-title">Security</h3>

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="auth-input"
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          className="auth-input"
          onChange={handleChange}
          required
        />

        <button className="auth-btn">Register</button>

        <p className="auth-link-text">
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
}
