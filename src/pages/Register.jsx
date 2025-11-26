import React from "react";
import "./Auth.css";

export default function Register() {
  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h1>Create Account</h1>
        <p className="auth-sub">
          Start your journey with EmpowerHire — job opportunities for everyone.
        </p>

        <input type="text" placeholder="Full Name" className="auth-input" />
        <input type="email" placeholder="Email Address" className="auth-input" />
        <input type="password" placeholder="Password" className="auth-input" />
        <input type="password" placeholder="Confirm Password" className="auth-input" />

        <button className="auth-btn">Register</button>

        <p className="auth-link-text">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}
