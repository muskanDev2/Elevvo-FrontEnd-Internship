import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import "./App.css";
import Header from "./components/Header";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true      // animate only once when scrolling down
    });
  }, []);

  return (
    <div>
      <Header />
      <Features />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
