import React from "react";
import "./heading-banner.styles.scss";
import banner from "./../../../../assets/back.jpg";
const HeadingBannerServices = () => {
  return (
    <div
      className="headingbanner"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <h1>Our Services</h1>
      <p>
        <span className="bottom">Home</span> / <span>Services</span>
      </p>
    </div>
  );
};

export default HeadingBannerServices;
