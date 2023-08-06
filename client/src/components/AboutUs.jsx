import React from "react";
import image from "../images/aboutimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img src={image} alt="hero" />
          </div>
          <div className="hero-content">
            <p>
              We're passionate about providing top-quality healthcare to our
              patients. Our team of experienced doctors and caring staff are
              committed to creating a warm and welcoming environment where you
              feel comfortable and cared for. We strive to make your experience
              with us as smooth and stress-free as possible, and we're always
              here to answer any questions you may have. Choose us for all your
              healthcare needs, and let us help you achieve optimal health and
              wellness.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
