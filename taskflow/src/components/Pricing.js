import React from "react";
import "./Pricing.css";

const Pricing = () => {
  return (
    <section className="pricing" id="pricing">
      <h2 className="pricing-title">Choose Your Plan</h2>
      <div className="pricing-cards">
        <div className="pricing-card">
          <div className="icon">💼</div>
          <h3>Free</h3>
          <p className="price">$0/month</p>
          <ul>
            <li>✓ Basic Task Management</li>
            <li>✓ 1 Device Access</li>
            <li>✓ Limited Reminders</li>
          </ul>
          <button className="select-btn">Start Free</button>
        </div>

        <div className="pricing-card popular">
          <div className="icon">🚀</div>
          <h3>Pro</h3>
          <p className="price">$9/month</p>
          <ul>
            <li>✓ Unlimited Tasks</li>
            <li>✓ Multi-Device Sync</li>
            <li>✓ Priority Reminders</li>
          </ul>
          <button className="select-btn">Upgrade</button>
        </div>

        <div className="pricing-card">
          <div className="icon">👥</div>
          <h3>Team</h3>
          <p className="price">$29/month</p>
          <ul>
            <li>✓ Team Collaboration</li>
            <li>✓ Project Boards</li>
            <li>✓ Team Chat</li>
          </ul>
          <button className="select-btn">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
