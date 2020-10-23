import React from "react";
import banner from "./../../../../assets/back.webp";
const HeadingBannerAbout = () => {
  return (
    <div
      className="headingbanner"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <h1>Our About</h1>
      <p>
        <span className="bottom">Home</span> / <span>About</span>
      </p>
    </div>
  );
};

export default HeadingBannerAbout;
