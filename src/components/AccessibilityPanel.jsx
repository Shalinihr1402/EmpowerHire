import React, { useEffect, useState } from "react";
import "../pages/JobsPage.css";


const STORAGE_KEY = "empowerhire_accessibility";

export default function AccessibilityPanel() {
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState({
    largeFont: false,
    highContrast: false,
    dyslexiaFont: false,
    wideSpacing: false,
    tts: false,
    voiceInput: false,
  });

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) setPrefs(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    // apply classes to root for CSS changes
    const root = document.documentElement;
    prefs.largeFont ? root.classList.add("large-font") : root.classList.remove("large-font");
    prefs.highContrast ? root.classList.add("high-contrast") : root.classList.remove("high-contrast");
    prefs.dyslexiaFont ? root.classList.add("dyslexia-font") : root.classList.remove("dyslexia-font");
    prefs.wideSpacing ? root.classList.add("wide-spacing") : root.classList.remove("wide-spacing");
  }, [prefs]);

  const toggle = (k) => setPrefs((p) => ({ ...p, [k]: !p[k] }));

  return (
    <>
      <button
        aria-expanded={open}
        aria-controls="accessibility-panel"
        className="accessibility-toggle"
        onClick={() => setOpen((s) => !s)}
        title="Accessibility options"
      >
        ♿
      </button>

      <div id="accessibility-panel" className={`accessibility-panel ${open ? "open" : ""}`} role="region" aria-label="Accessibility panel">
        <h3>Accessibility</h3>

        <div className="access-row">
          <label>
            <input type="checkbox" checked={prefs.largeFont} onChange={() => toggle("largeFont")} /> Large Font
          </label>
          <label>
            <input type="checkbox" checked={prefs.highContrast} onChange={() => toggle("highContrast")} /> High Contrast
          </label>
        </div>

        <div className="access-row">
          <label>
            <input type="checkbox" checked={prefs.dyslexiaFont} onChange={() => toggle("dyslexiaFont")} /> Dyslexia Font
          </label>
          <label>
            <input type="checkbox" checked={prefs.wideSpacing} onChange={() => toggle("wideSpacing")} /> Wide Spacing
          </label>
        </div>

        <div className="access-row">
          <label>
            <input type="checkbox" checked={prefs.tts} onChange={() => toggle("tts")} /> Text-to-Speech (tools will use)
          </label>
          <label>
            <input type="checkbox" checked={prefs.voiceInput} onChange={() => toggle("voiceInput")} /> Voice Input (tools may use)
          </label>
        </div>

        <button onClick={() => {
          localStorage.removeItem(STORAGE_KEY);
          setPrefs({ largeFont:false, highContrast:false, dyslexiaFont:false, wideSpacing:false, tts:false, voiceInput:false });
        }} className="access-reset">Reset</button>
      </div>
    </>
  );
}
