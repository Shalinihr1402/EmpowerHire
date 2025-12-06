import React, { useState } from "react";
import "./JobsPage.css";
import AccessibilityPanel from "../components/AccessibilityPanel";

// ---- PDF Reader ----
import * as pdfjsLib from "pdfjs-dist";
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

export default function AIResumeScore() {
  const [resumeText, setResumeText] = useState("");
  const [score, setScore] = useState(null);
  const [feedback, setFeedback] = useState([]);
  const [missingSections, setMissingSections] = useState([]);
  const [correctedResume, setCorrectedResume] = useState("");

  // ------------------ FILE UPLOAD HANDLER ------------------
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // --- TXT extraction ---
    if (file.type === "text/plain") {
      const text = await file.text();
      setResumeText(text);
      return;
    }

    // --- PDF extraction ---
    if (file.type === "application/pdf") {
      try {
        const pdfData = new Uint8Array(await file.arrayBuffer());
        const pdf = await pdfjsLib.getDocument({ data: pdfData }).promise;

        let finalText = "";

        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const content = await page.getTextContent();
          const pageText = content.items.map((item) => item.str).join(" ");
          finalText += pageText + "\n";
        }

        setResumeText(finalText.trim());
      } catch (error) {
        console.error("PDF extraction failed:", error);
        alert("Could not extract text from PDF. Try a simpler-format PDF.");
      }
      return;
    }

    alert("Upload only PDF or TXT files.");
  };

  // ------------------ RESUME ANALYSIS ------------------
  const analyzeResume = () => {
    if (!resumeText.trim()) {
      alert("Please upload or paste resume text.");
      return;
    }

    let score = 0;
    let fb = [];
    let missing = [];

    // Required sections
    const sections = {
      "Education": /education/i.test(resumeText),
      "Experience": /experience/i.test(resumeText),
      "Skills": /skills/i.test(resumeText),
      "Projects": /project/i.test(resumeText),
      "Contact Information": /email|phone|address/i.test(resumeText),
    };

    Object.entries(sections).forEach(([section, exists]) => {
      if (exists) score += 15;
      else missing.push(section);
    });

    // Length check
    if (resumeText.length < 500) {
      fb.push("Resume is too short — add more experience, project details and achievements.");
      score -= 10;
    } else score += 5;

    // Bullet points
    if (!/•|- |\*/.test(resumeText)) {
      fb.push("Add bullet points to improve readability.");
      score -= 5;
    } else score += 5;

    // Action verbs
    if (!/(developed|led|built|managed|created|designed|resolved|implemented)/i.test(resumeText)) {
      fb.push("Use action verbs like Developed, Implemented, Designed, Managed...");
      score -= 5;
    } else score += 5;

    score = Math.max(0, Math.min(100, score));

    setScore(score);
    setFeedback(fb);
    setMissingSections(missing);

    generateCorrectResume(resumeText);
  };

  // ------------------ CORRECT RESUME GENERATOR ------------------
  const generateCorrectResume = (text) => {
    const name = text.split("\n")[0] || "Your Name";

    const corrected = `
${name}
Phone | Email | Location
LinkedIn | GitHub

SUMMARY
A 2–3 line summary about your skills, strengths and experience.

SKILLS
• Skill 1
• Skill 2
• Skill 3

EDUCATION
Degree | College | Year | CGPA

PROJECTS
Project Title
• What you built
• Technologies used
• Your contribution

EXPERIENCE
Company | Role | Duration
• Achievement 1 (Start with action verbs)
• Achievement 2
• Achievement 3

CERTIFICATIONS
• Certification Name – Platform

ACHIEVEMENTS
• Achievement / Award
`;

    setCorrectedResume(corrected.trim());
  };

  return (
    <div className="jobs-wrapper">
      <AccessibilityPanel />

      <h1 className="jobs-heading">AI Resume Score & Extractor</h1>
      <p className="jobs-text">
        Upload your resume (PDF/TXT). Extract text. Get score. View corrected professional resume format.
      </p>

      <div className="ai-tool-box">

        {/* UPLOAD INPUT */}
        <input
          type="file"
          accept=".pdf, .txt"
          className="input-box"
          onChange={handleFileUpload}
        />

        {/* TEXT AREA */}
        <textarea
          className="resume-box"
          placeholder="Or paste your resume text here..."
          value={resumeText}
          onChange={(e) => setResumeText(e.target.value)}
        />

        <button className="apply-btn" onClick={analyzeResume}>
          Extract & Correct Resume
        </button>

        {/* RESULTS SECTION */}
        {score !== null && (
          <div className="result-box">

            <h2>Your Resume Score: {score}/100</h2>

            {missingSections.length > 0 && (
              <>
                <h3>Missing Sections:</h3>
                <ul>
                  {missingSections.map((m, i) => (
                    <li key={i}>❌ {m}</li>
                  ))}
                </ul>
              </>
            )}

            {feedback.length > 0 && (
              <>
                <h3>Suggestions:</h3>
                <ul>
                  {feedback.map((f, i) => <li key={i}>⚠️ {f}</li>)}
                </ul>
              </>
            )}

            <h3>Corrected Resume Format:</h3>
            <pre className="format-box">
{correctedResume}
            </pre>

            <button
              className="apply-btn"
              onClick={() => navigator.clipboard.writeText(correctedResume)}
            >
              Copy Corrected Resume
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
