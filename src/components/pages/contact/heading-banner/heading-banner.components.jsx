import React from "react";
import banner from "./../../../../assets/back.jpg";
const HeadingBannerContact = () => {
  return (
    <div
      className="headingbanner"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <h1>Our Contact</h1>
      <p>
        <span className="bottom">Home</span> / <span>Contact</span>
      </p>
    </div>
  );
};

export default HeadingBannerContact;
