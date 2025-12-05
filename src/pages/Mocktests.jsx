import React, { useState } from "react";
import "./JobsPage.css";
import "./MockTests.css";

export default function MockTests() {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  return (
    <div className="jobs-wrapper">
      <h1 className="jobs-heading">Job-Based Mock Tests</h1>
      <p className="jobs-text">
        Select a job category and start practicing role-specific mock tests.
      </p>

      <div className="mock-category-container">
        {jobMockCategories.map((cat, index) => (
          <div key={index} className="mock-category">
            <div className="category-header" onClick={() => toggleCategory(index)}>
              <span className="category-icon">{cat.icon}</span>
              <h2>{cat.title}</h2>
              <span className="arrow">{openCategory === index ? "▲" : "▼"}</span>
            </div>

            {openCategory === index && (
              <div className="category-tests">
                {cat.tests.map((test, tIndex) => (
                  <div key={tIndex} className="test-card">
                    <h3>{test.name}</h3>
                    <p>{test.details}</p>
                    <button className="apply-btn">Start Test</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const jobMockCategories = [
  {
    title: "IT / Software Jobs",
    icon: "💻",
    tests: [
      { name: "Programming Logic Test", details: "Loops, functions, debugging." },
      { name: "MCQ Coding Test", details: "Java, Python, C basics." },
      { name: "Error Solving Test", details: "Find and fix code errors." },
      { name: "Aptitude for IT", details: "Logical, reasoning, tech aptitude." },
    ],
  },

  {
    title: "BPO / Customer Support",
    icon: "🎧",
    tests: [
      { name: "English Communication Test", details: "Grammar, accent, vocabulary." },
      { name: "Customer Handling Test", details: "Chat, calls, email scenarios." },
      { name: "Listening Skill Test", details: "Call audio and questions." },
      { name: "Typing Test", details: "WPM speed test for chat support." },
    ],
  },

  {
    title: "Data Entry / Back Office",
    icon: "⌨️",
    tests: [
      { name: "Typing Speed Test", details: "Words per minute, accuracy." },
      { name: "Accuracy Test", details: "Error-free typing practice." },
      { name: "Data Checking Test", details: "Compare & verify dataset." },
      { name: "MS Office Test", details: "Excel, Word basic tasks." },
    ],
  },

  {
    title: "Government Job Preparation",
    icon: "🏛️",
    tests: [
      { name: "General Knowledge Test", details: "GK, current affairs." },
      { name: "General English Test", details: "Grammar, comprehension." },
      { name: "Aptitude Test", details: "Quantitative aptitude." },
      { name: "Reasoning Test", details: "Puzzles, number series." },
    ],
  },

  {
    title: "Banking / Finance Jobs",
    icon: "🏦",
    tests: [
      { name: "Quantitative Aptitude", details: "Profit-loss, interest, DI." },
      { name: "Reasoning Ability", details: "Coding, puzzles, logic." },
      { name: "Banking Awareness", details: "Banking terms & GK." },
      { name: "English Language", details: "Reading comprehension & grammar." },
    ],
  },

  {
    title: "Retail / Sales Jobs",
    icon: "🛒",
    tests: [
      { name: "Communication Test", details: "Sales speaking test." },
      { name: "Customer Handling", details: "Complaint role-play." },
      { name: "Basic Math Test", details: "Billing & quick math." },
      { name: "Product Knowledge Test", details: "Sales scenario MCQs." },
    ],
  },
];
