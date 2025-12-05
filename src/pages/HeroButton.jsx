import React from "react";
import { useNavigate } from "react-router-dom";

export default function HeroButton() {
  const navigate = useNavigate();

  return (
    <button
      className="hero-btn"
      onClick={() => navigate("/jobs")}
    >
      Browse Job Categories →
    </button>
  );
}
