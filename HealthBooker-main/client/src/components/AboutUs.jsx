import React from "react";
import image from "../images/aboutimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content">
            <p>
            A health booking website serves as a convenient platform for individuals seeking to manage 
            their healthcare appointments and services efficiently. These websites typically allow users to
             browse through a comprehensive list of healthcare providers, ranging from general 
             practitioners and specialists to diagnostic centers and wellness clinics. 
             With features like real-time availability, patient reviews, and detailed profiles of medical professionals, 
             users can make informed decisions about their healthcare needs.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
