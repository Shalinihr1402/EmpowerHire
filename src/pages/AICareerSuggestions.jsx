import React, { useEffect, useState } from "react";
import "./JobsPage.css";
import AccessibilityPanel from "../components/AccessibilityPanel";

export default function AICareerSuggestions() {
  const [skills, setSkills] = useState("");
  const [disability, setDisability] = useState("none");
  const [suggestions, setSuggestions] = useState([]);
  const prefs = JSON.parse(localStorage.getItem("empowerhire_accessibility") || "{}");

  useEffect(() => {
    // keep accessible focus style for keyboard users
  }, []);

  const generate = () => {
    if (!skills.trim()) {
      alert("Please enter at least one skill. You can also use the Accessibility Panel for voice input.");
      return;
    }

    // simple rules to demo disability-aware suggestions
    const s = skills.toLowerCase();
    const pool = [
      { role: "Data Labeler", reasons: ["Low pressure, remote, text-based tasks"] },
      { role: "Accessibility Tester", reasons: ["Focuses on making apps accessible, flexible hours"] },
      { role: "Content Writer", reasons: ["Remote, asynchronous work, no calls required"] },
      { role: "Customer Chat Support", reasons: ["Text chat based, no phone needed"] },
      { role: "Remote QA Tester", reasons: ["Task-based, flexible timing"] },
    ];

    let filtered = pool.filter(p => {
      return skills.split(",").some(sk => p.role.toLowerCase().includes(sk.trim())) || p.role.toLowerCase().includes(s) || true;
    });

    // tailor for disability
    if (disability === "low-vision") {
      filtered = pool.filter(p => p.role.includes("Accessibility") || p.role.includes("Data") || p.role.includes("Content"));
    } else if (disability === "hearing") {
      filtered = pool.filter(p => p.role.includes("Content") || p.role.includes("Data") || p.role.includes("Labeler"));
    }

    // build friendly suggestions with explanation and confidence (demo)
    const out = filtered.slice(0, 4).map((f, i) => ({
      role: f.role,
      why: f.reasons || ["Good fit based on skills and accommodations."],
      confidence: 80 - i * 10,
    }));
    setSuggestions(out);
    if (prefs.tts && window.speechSynthesis) {
      const utter = new SpeechSynthesisUtterance(`I found ${out.length} suitable roles. First suggestion: ${out[0].role}`);
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utter);
    }
  };

  return (
    <div className="jobs-wrapper">
      <AccessibilityPanel />
      <h1 className="jobs-heading">AI Career Suggestions</h1>
      <p className="jobs-text">Tell us your skills and preferences; we’ll suggest roles and explain why.</p>

      <div className="ai-tool-box">
        <label htmlFor="skills" className="label">Skills (comma separated)</label>
        <input
          id="skills"
          className="input-box"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          placeholder="e.g., HTML, Java, data entry"
        />

        <label className="label">Preferred accommodations (optional)</label>
        <select className="input-box" value={disability} onChange={(e) => setDisability(e.target.value)}>
          <option value="none">No preference</option>
          <option value="low-vision">Low vision / visual impairment</option>
          <option value="hearing">Hearing impairment</option>
          <option value="mobility">Mobility / physical disability</option>
        </select>

        <div className="tool-row">
          <button className="apply-btn" onClick={generate}>Get Suggestions</button>
        </div>

        {suggestions.length > 0 && (
          <div className="result-box" aria-live="polite">
            <h2>Recommended Roles</h2>
            <ul className="suggestions-list">
              {suggestions.map((s, i) => (
                <li key={i} className="suggestion-item" tabIndex="0">
                  <div className="suggest-title">
                    <strong>{s.role}</strong>
                    <span className="confidence" aria-hidden>{s.confidence}%</span>
                  </div>
                  <div className="suggest-why">Why: {s.why.join(", ")}</div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
