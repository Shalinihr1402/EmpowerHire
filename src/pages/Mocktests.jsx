import React from "react";
import "./JobsPage.css";   // shared glowing card UI
import "./MockTests.css";  // extra styles for this page

export default function MockTests() {
  return (
    <div className="jobs-wrapper">
      <h1 className="jobs-heading">Mock Tests</h1>
      <p className="jobs-text">
        Practice aptitude, communication, typing, reasoning, and job-based mock tests 
        to improve your skills and get job-ready.
      </p>

      {/* Mock Test Categories */}
      <div className="jobs-grid">
        {testCategories.map((test, index) => (
          <div key={index} className="jobs-card mock-card">
            <h2>{test.title}</h2>
            <p>{test.description}</p>
            <button className="apply-btn">Start Test</button>
          </div>
        ))}
      </div>
    </div>
  );
}

/* TEST CATEGORIES DATA */
const testCategories = [
  {
    title: "Aptitude Test",
    description: "Quantitative, logical reasoning, number series, and puzzles.",
  },
  {
    title: "Typing Speed Test",
    description: "Measure your WPM speed for data entry and clerical roles.",
  },
  {
    title: "English Communication Test",
    description: "Grammar, vocabulary, voice & accent, comprehension.",
  },
  {
    title: "Customer Support Test",
    description: "Chat handling, email drafting, and call scenario practice.",
  },
  {
    title: "IT Skills Test",
    description: "Basic programming, debugging, error solving and logic.",
  },
  {
    title: "HR Interview Questions",
    description: "Common HR interview questions with answer evaluation.",
  },
];
