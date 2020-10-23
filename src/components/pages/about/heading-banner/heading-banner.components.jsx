import React from "react";
import banner from "./../../../../assets/back.jpg";
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
