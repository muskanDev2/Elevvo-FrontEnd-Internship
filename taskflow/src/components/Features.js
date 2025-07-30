import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <section className="features">
      <h2>Why TaskFlow?</h2>
      <div className="features-container">
        <div className="feature-box">
          <span className="icon">🧠</span>
          <h3>Stay Focused</h3>
          <p>Organize your tasks so you never feel overwhelmed.</p>
        </div>
        <div className="feature-box">
          <span className="icon">📱</span>
          <h3>Mobile Ready</h3>
          <p>Manage tasks easily on phones and tablets anytime, anywhere.</p>
        </div>
        <div className="feature-box">
          <span className="icon">🤝</span>
          <h3>Collaborate</h3>
          <p>Work with your team on shared goals and deadlines.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
