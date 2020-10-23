import React from "react";
import banner from "./../../../../assets/back.webp";
const HeadingBannerPortfolio = () => {
  return (
    <div
      className="headingbanner"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <h1>Our Portfolio</h1>
      <p>
        <span className="bottom">Home</span> / <span>Portfolio</span>
      </p>
    </div>
  );
};

export default HeadingBannerPortfolio;
