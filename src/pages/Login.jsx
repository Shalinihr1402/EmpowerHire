import React from "react";
import "./Auth.css";

export default function Login() {
  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h1>Welcome Back</h1>
        <p className="auth-sub">
          Login to continue your job search and manage your profile.
        </p>

        <input type="email" placeholder="Email Address" className="auth-input" />
        <input type="password" placeholder="Password" className="auth-input" />

        <button className="auth-btn">Login</button>

        <p className="auth-link-text">
          Don't have an account? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
}
