import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content" data-aos="fade-up">
        <h3>TaskFlow</h3>
        <p>Helping you organize, focus, and achieve more every day.</p>

        <div className="socials">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaEnvelope /></a>
        </div>

        <div className="footer-links">
          <a href="#features">Features</a>
          <a href="#testimonials">Reviews</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>

        <p className="copyright">© 2025 TaskFlow. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
