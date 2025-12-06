import React, { useEffect, useRef, useState } from "react";
import "./JobsPage.css";
import AccessibilityPanel from "../components/AccessibilityPanel";

export default function VoiceJobSearch() {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [results, setResults] = useState([]);
  const recognitionRef = useRef(null);

  useEffect(() => {
    // cleanup
    return () => {
      if (recognitionRef.current) recognitionRef.current.onend = null;
      if (window.speechSynthesis) window.speechSynthesis.cancel();
    };
  }, []);

  const startListening = () => {
    if (!window.webkitSpeechRecognition && !window.SpeechRecognition) {
      alert("Speech recognition is not supported in this browser.");
      return;
    }
    const Rec = window.SpeechRecognition || window.webkitSpeechRecognition;
    const r = new Rec();
    r.lang = "en-US";
    r.interimResults = false;
    r.maxAlternatives = 1;
    recognitionRef.current = r;

    r.onstart = () => setListening(true);
    r.onresult = (e) => {
      const t = e.results[0][0].transcript;
      setTranscript(t);
      performSearch(t);
    };
    r.onend = () => setListening(false);
    r.onerror = () => setListening(false);
    r.start();
  };

  // simple job-search demo - replace with real backend/API
  const performSearch = (query) => {
    const sampleJobs = [
      { title: "Remote Data Entry (Low Vision friendly)", tags: ["remote","low-vision"] },
      { title: "Chat Support Specialist (No phone)", tags: ["no-phone","remote"] },
      { title: "Accessibility Tester (Flexible hours)", tags: ["flexible","remote"] },
      { title: "Content Moderator (Text-based)", tags: ["text-based"] },
    ];

    // naive filter
    const q = query.toLowerCase();
    const matches = sampleJobs.filter(j => j.title.toLowerCase().includes(q) || j.tags.some(t => q.includes(t)));
    setResults(matches.length ? matches : sampleJobs.slice(0,3));
    // TTS feedback if enabled
    const prefs = JSON.parse(localStorage.getItem("empowerhire_accessibility") || "{}");
    if (prefs.tts) {
      const utter = new SpeechSynthesisUtterance(`Showing ${matches.length || 3} results for ${query}`);
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utter);
    }
  };

  return (
    <div className="jobs-wrapper">
      <AccessibilityPanel />
      <h1 className="jobs-heading">Voice Job Search</h1>
      <p className="jobs-text">Speak a job role or requirement. Example: "remote data entry" or "no phone jobs".</p>

      <div className="ai-tool-box" role="form" aria-label="Voice job search">
        <div className="tool-row">
          <button
            className="apply-btn"
            onClick={startListening}
            aria-pressed={listening}
            aria-label="Start voice search"
          >
            {listening ? "Listening..." : "🎤 Start Voice Search"}
          </button>

          <button
            className="apply-btn secondary"
            onClick={() => {
              // read transcript
              const prefs = JSON.parse(localStorage.getItem("empowerhire_accessibility") || "{}");
              if (prefs.tts) {
                const utter = new SpeechSynthesisUtterance(transcript || "No input yet");
                window.speechSynthesis.cancel();
                window.speechSynthesis.speak(utter);
              } else alert("Turn on Text-to-Speech in Accessibility Panel to hear transcripts.");
            }}
          >
            🔊 Read Transcript
          </button>
        </div>

        {transcript && (
          <div className="result-box" aria-live="polite">
            <h3>Heard:</h3>
            <p className="transcript">{transcript}</p>
          </div>
        )}

        <div className="result-box">
          <h3>Job Results</h3>
          {results.length === 0 ? (
            <p>No results yet — try speaking again.</p>
          ) : (
            <ul className="job-list">
              {results.map((r, i) => (
                <li key={i} tabIndex="0" className="job-item" aria-label={r.title}>
                  <strong>{r.title}</strong>
                  <div className="job-tags">{r.tags.join(" • ")}</div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
