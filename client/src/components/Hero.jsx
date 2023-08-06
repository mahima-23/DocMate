import React from "react";
import image from "../images/heroimg.jpg";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Your Health, <br />
          Our Responsibility
        </h1>
        <p>
          At our clinic, we take your health seriously. Our team of expert 
          doctors and healthcare professionals are dedicated to 
          providing you with the best possible care. We believe 
          that a healthy lifestyle is the foundation for a happy life, and we're 
          committed to helping you achieve your health goals. Trust us to be your partner in health.
        </p>
      </div>
      <div className="hero-img">
        <img
          src={image}
          alt="hero"
        />
      </div>
    </section>
  );
};

export default Hero;
