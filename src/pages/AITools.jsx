import React from "react";
import "./JobsPage.css";  // Shared design for all job pages

export default function AITools() {
  return (
    <div className="jobs-wrapper">
      <h1 className="jobs-heading">AI Tools</h1>
      <p className="jobs-text">
        Discover AI tools to help improve resumes, job search, interview prep, and productivity.
      </p>

      <div className="jobs-grid">
        {tools.map((tool, index) => (
          <div key={index} className="jobs-card">
            <div className="ai-icon">{tool.icon}</div>
            <h2>{tool.title}</h2>
            <p>{tool.description}</p>
            <button className="apply-btn">Open Tool</button>
          </div>
        ))}
      </div>
    </div>
  );
}

/* AI Tools Data */
const tools = [
  {
    icon: "📝",
    title: "AI Resume Score",
    description:
      "Get an AI-powered score and feedback to improve your resume instantly.",
  },
  {
    icon: "🎙️",
    title: "Voice Job Search",
    description:
      "Search for jobs using your voice through AI voice recognition.",
  },
  {
    icon: "🤖",
    title: "AI Career Suggestions",
    description:
      "Let AI suggest job roles based on your skills and experience.",
  },
  {
    icon: "💬",
    title: "Interview Mentor",
    description:
      "Practice interview questions with an AI-based interview assistant.",
  },
];
