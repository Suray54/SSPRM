import React from "react";
import "./1-about.styles.scss";
import { Link } from "react-router-dom";
import code from "./../../../../assets/about-section.jpg";
function AboutSection() {
  return (
    <div className="about-section">
      <div className="row">
        <div className="col-lg-6 about-section__details">
          <h2>Who we are</h2>
          <h4>
            We are <span>Software company</span> that brings your idea to life
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            consequatur ex corrupti quos iste? Accusantium, esse. Officiis
            dolorum molestiae, dignissimos tenetur doloremque officia cupiditate
            animi quisquam libero. Modi, asperiores illum.
          </p>

          <Link className="about-section__details--link" to="/about">
            Learn more
          </Link>
        </div>
        <div className="col-lg-6 about-section__image">
          <img src={code} alt="about-section" />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
