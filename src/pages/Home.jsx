
import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">

      {/* HERO */}
      <section className="hero-section card-universal">
        <div className="container hero-inner">
          <div className="hero-left">
            <h1 className="hero-title">
              Empowering <span>Specially-Abled</span> Talent
            </h1>
            <p className="hero-sub">
              A dedicated inclusive hiring platform connecting specially-abled individuals
              with supportive companies, meaningful careers, and equal opportunities across India.
            </p>
          <Link to="/it-jobs" className="btn-primary hero-link-btn">
  Explore Opportunities →
</Link>


          </div>

          <div className="hero-right">
            <img className="hero-image" src="/hero-img.jpg" alt="Hero" />
          </div>
        </div>
      </section>

      {/* CENTER BADGE */}
      <div className="container badge-wrap">
        <div className="disability-badge card-universal">
          ♿ Inclusive Hiring Platform for People with Disabilities
        </div>
      </div>

      {/* FILTERS */}
      <section className="filters-section">
        <div className="container">
          <h2 className="section-title">Disability-Friendly Filters</h2>
          <p className="section-sub">Find jobs matching your accessibility needs</p>

          <div className="filter-grid">
            <div className="filter-card card-universal">🦽 Wheelchair Accessible</div>
            <div className="filter-card card-universal">🏠 Work From Home</div>
            <div className="filter-card card-universal">🦻 Hearing Friendly</div>
            <div className="filter-card card-universal">👁️ Vision Friendly</div>
            <div className="filter-card card-universal">⌨ Typing Jobs</div>
            <div className="filter-card card-universal">📝 Writing Jobs</div>
            <div className="filter-card card-universal">💬 Low Communication</div>
            <div className="filter-card card-universal">🔊 Voice-Based Jobs</div>
          </div>
        </div>
      </section>

      {/* JOB CATEGORIES */}
      <section className="categories-section">
  <div className="container">
    <h2 className="section-title">Explore Job Categories</h2>

    <div className="category-grid">

      {/* IT Jobs */}
      <article className="category-card card-universal">
        <h3>IT Jobs</h3>
        <p>Explore software, cloud, AI, and development roles.</p>
        <Link to="/it-jobs" className="card-btn">View More →</Link>
      </article>

      {/* Non-IT Jobs */}
      <article className="category-card card-universal">
        <h3>Non-IT Jobs</h3>
        <p>Administrative, HR, finance, support and more.</p>
        <Link to="/non-it-jobs" className="card-btn">View More →</Link>
      </article>

      {/* MNC Jobs */}
      <article className="category-card card-universal">
        <h3>MNC Jobs</h3>
        <p>Top global companies hiring across India.</p>
        <Link to="/mnc-jobs" className="card-btn">View More →</Link>
      </article>

      {/* Government Jobs */}
      <article className="category-card card-universal">
        <h3>Government Jobs</h3>
        <p>All up-to-date job notifications and alerts.</p>
        <Link to="/government-jobs" className="card-btn">View More →</Link>
      </article>

      {/* Work From Home */}
      <article className="category-card card-universal">
        <h3>Work From Home</h3>
        <p>Remote-friendly opportunities for flexible working.</p>
        <Link to="/work-from-home" className="card-btn">View More →</Link>
      </article>

     
    </div>
  </div>
</section>


      {/* AI TOOLS */}
      <section className="ai-section">
        <div className="container">
          <h2 className="section-title">AI Career Tools</h2>

          <div className="ai-grid">
            <div className="ai-card card-universal">📝 AI Resume Score</div>
            <div className="ai-card card-universal">🎤 Voice Job Search</div>
            <div className="ai-card card-universal">🤖 AI Career Suggestions</div>
            <div className="ai-card card-universal">💬 Interview Mentor</div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="skills-section">
        <div className="container">
          <h2 className="section-title">Skill Development & Mock Tests</h2>

          <div className="skills-grid">
            <div className="skill-card card-universal">
              <img src="/skills.png" alt="Skill" />
              <h3>Skill-Based Learning</h3>
              <p>Accessible content for IT & Non-IT roles.</p>
            </div>

            <div className="skill-card card-universal">
              <img src="/mocktest.png" alt="Mock" />
              <h3>Mock Tests & Practice</h3>
              <p>Aptitude, typing, communication & role-based mock tests.</p>
            </div>

            <div className="skill-card card-universal">
              <img src="/badge.png" alt="Badge" />
              <h3>Special Profile Badge</h3>
              <p>Increases visibility & trust with employers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="stories-section">
        <div className="container">
          <h2 className="section-title">Success Stories</h2>

          <div className="story-grid">
            <div className="story-card card-universal">
              <h3>Arjun</h3>
              <p>Remote Data Entry Specialist</p>
            </div>
            <div className="story-card card-universal">
              <h3>Meera</h3>
              <p>Content Writer</p>
            </div>
            <div className="story-card card-universal">
              <h3>Karthik</h3>
              <p>Accessibility Support Assistant</p>
            </div>
          </div>
        </div>
      </section>

      {/* SUPPORT */}
      <section className="support-section">
        <div className="container">
          <h2 className="section-title">Support & Guidance</h2>

          <div className="support-grid">
            <div className="support-card card-universal">🗣 Career Counselling</div>
            <div className="support-card card-universal">📄 Resume Help</div>
            <div className="support-card card-universal">📞 Helpline Chat</div>
            <div className="support-card card-universal">🏛 Govt Schemes Info</div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-section">
        <div className="container">
          <h2 className="section-title">How EmpowerHire Works</h2>

          <div className="steps-grid">
            <div className="step-card card-universal">
              <div className="step-number">1</div>
              <h3>Create Your Profile</h3>
              <p>Enter your skills, strengths, interests.</p>
            </div>

            <div className="step-card card-universal">
              <div className="step-number">2</div>
              <h3>Get Your Special Badge</h3>
              <p>Boost visibility to inclusive employers.</p>
            </div>

            <div className="step-card card-universal">
              <div className="step-number">3</div>
              <h3>Apply to Jobs</h3>
              <p>Find jobs from MNCs, Govt, Private sectors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANIES */}
      <section className="companies-section">
        <div className="container">
          <h2 className="section-title">Trusted by Leading Companies</h2>

          <div className="company-logos">
            <img src="/tcs.png" alt="TCS" />
            <img src="/wipro.png" alt="Wipro" />
            <img src="/infosys.png" alt="Infosys" />
            <img src="/accenture.png" alt="Accenture" />
          </div>
        </div>
      </section>

      {/* CHATBOT */}
      <div className="chatbot-container">
        <div className="chatbot-button">💬</div>

        <div className="chatbot-box card-universal">
          <h4>Need Help?</h4>
          <button className="chat-btn">🔍 Search Jobs</button>
          <button className="chat-btn">🎤 Voice Job Search</button>
          <button className="chat-btn">🤖 AI Career Suggestions</button>
          <button className="chat-btn">📄 Resume Score Check</button>
       
        </div>
      </div>
      {/* FOOTER TOOLS HEADING */}
<section className="footer-tools-section">
  <div className="container">
    <h2 className="section-title">AI Career Tools</h2>
  </div>
</section>


      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-card card-universal">
              <h4>📄 Resume Score Checker</h4>
              <p>Improve your resume instantly.</p>
            </div>

            <div className="footer-card card-universal">
              <h4>🎤 Voice Job Search</h4>
              <p>Find jobs using voice commands.</p>
            </div>

            <div className="footer-card card-universal">
              <h4>🤖 AI Career Suggestions</h4>
              <p>Personalized recommendations based on your profile.</p>
            </div>

            <div className="footer-card card-universal">
              <h4>📝 Resume Builder Preview</h4>
              <p>Create a modern CV with our guided tool.</p>
            </div>
          </div>

          <p className="footer-copy">
            © 2025 EmpowerHire — Inclusive Hiring Platform
          </p>
        </div>
      </footer>

    </div>
  );
}
