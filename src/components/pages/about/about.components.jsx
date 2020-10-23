import React, { Component } from "react";
import ContactBanner from "../../layouts/contact-banner/contact-banner.components";
import Footer from "../../layouts/footer/footer.components";
import Navigation from "../../layouts/nav/nav.components";
import "./about.styles.scss";
import HeadingBannerAbout from "./heading-banner/heading-banner.components";

export class About extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <HeadingBannerAbout />
        <ContactBanner />
        <Footer />
      </div>
    );
  }
}

export default About;
