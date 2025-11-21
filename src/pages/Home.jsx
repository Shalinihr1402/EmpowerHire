import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero-modern">
        <div className="hero-content">
          <h1>
            Empower Your Future with <span>EmpowerHire</span>
          </h1>
          <p>Your gateway to powerful career opportunities.</p>
          <button className="hero-btn">Explore Jobs</button>
        </div>

        <img src="/logo.png" className="hero-image" alt="EmpowerHire" />
      </section>

      {/* JOB CATEGORIES */}
      <section className="job-categories">
        <h2>Explore Job Categories</h2>
        <div className="category-grid">

          <div className="category-card">
            <h3>IT Jobs</h3>
            <p>Explore software, cloud, AI, and development roles.</p>
            <button>View More →</button>
          </div>

          <div className="category-card">
            <h3>Non-IT Jobs</h3>
            <p>Administrative, HR, finance, support and more.</p>
            <button>View More →</button>
          </div>

          <div className="category-card">
            <h3>MNC Jobs</h3>
            <p>Top global companies hiring across India.</p>
            <button>View More →</button>
          </div>

          <div className="category-card">
            <h3>Government Jobs</h3>
            <p>All up-to-date job notifications and alerts.</p>
            <button>View More →</button>
          </div>

        </div>
      </section>

      {/* MNC COMPANY LOGOS */}
      <section className="companies-modern">
        <h2>Trusted by Leading Companies</h2>
        <div className="company-logos-modern">
          <img src="/tcs.png" alt="TCS" />
          <img src="/wipro.png" alt="Wipro" />
          <img src="/infosys.png" alt="Infosys" />
          <img src="/accenture.png" alt="Accenture" />
        </div>
      </section>

      {/* FEATURES */}
      <section className="features-modern">
        <div className="feature-card-modern">
          <h3>Inclusive Hiring</h3>
          <p>Equal opportunity platform for everyone.</p>
        </div>

        <div className="feature-card-modern">
          <h3>Smart Matching</h3>
          <p>Job recommendations based on your skills.</p>
        </div>

        <div className="feature-card-modern">
          <h3>Verified Recruiters</h3>
          <p>Only genuine and trusted companies listed.</p>
          
        </div>
       
        

         

      </section>

    </div>
  );
}
