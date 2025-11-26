import React from "react";
import "./JobsPage.css"; // shared UI design for all pages

export default function WorkFromHome() {
  return (
    <div className="jobs-wrapper">
      <h1 className="jobs-heading">Work From Home</h1>
      <p className="jobs-text">
        Discover remote job opportunities, freelance roles, online earning options,
        and home-based flexible work such as assignment writing, notes writing, and packing jobs.
      </p>

      <div className="jobs-grid">
        {categories.map((item, index) => (
          <div key={index} className="jobs-card">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button className="apply-btn">Explore</button>
          </div>
        ))}
      </div>
    </div>
  );
}

/* WORK FROM HOME OPTIONS */
const categories = [
  {
    title: "Remote Data Entry",
    description: "Simple data entry, form filling, and copy-paste tasks from home.",
  },
  {
    title: "Freelance Jobs",
    description: "Online work like writing, graphic design, coding, virtual assistance, and more.",
  },
  {
    title: "Online Tutoring",
    description: "Teach academics, languages, or skills to students worldwide.",
  },
  {
    title: "Customer Support (Remote)",
    description: "Chat process, telecaller, and remote support roles for companies.",
  },
  {
    title: "Digital Marketing (Remote)",
    description: "Work on SEO, social media management, online ads, and content posting.",
  },
  {
    title: "Content Creation",
    description: "Create videos, reels, blogs, and earn via YouTube, Instagram, and freelancing.",
  },
  {
    title: "Assignment Writing",
    description: "Work on assignment completion, project writing, and academic tasks for clients.",
  },
  {
    title: "Notes Writing",
    description: "Handwritten or typed notes for students, coaching centers, and institutions.",
  },
  {
    title: "Packing Jobs (Home Based)",
    description: "Home-based product packing jobs for small businesses and startups.",
  },
];
