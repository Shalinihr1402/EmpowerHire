import React, { useEffect, useRef, useState } from "react";
import "./JobsPage.css";
import AccessibilityPanel from "../components/AccessibilityPanel";

const questions = [
  "Tell me about yourself.",
  "Why should we hire you?",
  "What are your strengths?",
  "Describe a challenge you solved.",
  "Where do you see yourself in 5 years?",
];

export default function InterviewMentor() {
  const [current, setCurrent] = useState(0);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState(null);
  const prefs = useRef(JSON.parse(localStorage.getItem("empowerhire_accessibility") || "{}"));

  useEffect(() => {
    prefs.current = JSON.parse(localStorage.getItem("empowerhire_accessibility") || "{}");
  }, []);

  const nextQuestion = () => {
    setFeedback(null);
    setAnswer("");
    setCurrent((c) => Math.min(questions.length - 1, c + 1));
  };

  const giveFeedback = () => {
    if (!answer.trim()) return setFeedback({ emoji: "⚠️", text: "Please type or speak an answer first." });
    // tiny heuristic: length and keywords
    const score = Math.min(100, answer.length > 120 ? 85 : Math.floor(answer.length / 2) + ( /achieved|improved|reduced|increased/i.test(answer) ? 15 : 0 ));
    const emoji = score > 80 ? "✅" : score > 60 ? "🙂" : "🔁";
    const text = score > 80 ? "Great! Clear and achievement-focused." : score > 60 ? "Good — add numbers and specifics." : "Try to add one achievement and concise structure.";
    setFeedback({ emoji, text, score });
    if (prefs.current.tts && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(new SpeechSynthesisUtterance(text));
    }
  };

  // optional speech-to-text for answers
  const recognitionRef = useRef(null);
  const startVoiceAnswer = () => {
    if (!window.webkitSpeechRecognition && !window.SpeechRecognition) {
      alert("Speech recognition not supported.");
      return;
    }
    const Rec = window.SpeechRecognition || window.webkitSpeechRecognition;
    const r = new Rec();
    r.lang = "en-US";
    r.interimResults = false;
    r.onresult = (e) => setAnswer((a) => (a ? a + " " + e.results[0][0].transcript : e.results[0][0].transcript));
    r.start();
    recognitionRef.current = r;
  };

  return (
    <div className="jobs-wrapper">
      <AccessibilityPanel />
      <h1 className="jobs-heading">Interview Mentor</h1>
      <p className="jobs-text">Practice interview questions. Use voice or type; get short, clear feedback.</p>

      <div className="ai-tool-box">
        <div className="result-box">
          <h3>Question</h3>
          <p>{questions[current]}</p>
        </div>

        <textarea
          className="resume-box"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Type your answer here or use voice input"
          aria-label="Answer text"
        />

        <div className="tool-row">
          <button className="apply-btn" onClick={giveFeedback}>Get Feedback</button>
          <button className="apply-btn secondary" onClick={startVoiceAnswer}>🎙️ Speak Answer</button>
          <button className="apply-btn secondary" onClick={nextQuestion}>Next Question</button>
        </div>

        {feedback && (
          <div className="result-box" role="status">
            <h3>Feedback {feedback.emoji}</h3>
            <p>{feedback.text}</p>
            <p><strong>Score: {feedback.score}/100</strong></p>
          </div>
        )}
      </div>
    </div>
  );
}
