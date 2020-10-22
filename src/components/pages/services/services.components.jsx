import React, { Component } from "react";
import ContactBanner from "../../layouts/contact-banner/contact-banner.components";
import Footer from "../../layouts/footer/footer.components";
import Navigation from "../../layouts/nav/nav.components";
import HeadingBannerServices from "./heading-banner/heading-banner.components";
import "./services.styles.scss";
export class Services extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <HeadingBannerServices />
        <ContactBanner />
        <Footer />
      </div>
    );
  }
}

export default Services;
