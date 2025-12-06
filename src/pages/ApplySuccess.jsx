import React from "react";
import { Link } from "react-router-dom";
import "./ApplySuccess.css";

export default function ApplySuccess() {
  return (
    <div className="success-wrapper">
      <div className="success-card">
        
        <div className="success-icon">✔</div>

        <h1>Application Submitted!</h1>
        <p>
          Thank you for applying. Our team will review your application and get
          back to you soon.
        </p>

        <Link to="/jobs" className="success-btn">
          Back to Jobs
        </Link>
      </div>
    </div>
  );
}
