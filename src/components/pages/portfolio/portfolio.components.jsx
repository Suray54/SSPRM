import React, { Component } from "react";
import ContactBanner from "../../layouts/contact-banner/contact-banner.components";
import Footer from "../../layouts/footer/footer.components";
import Navigation from "../../layouts/nav/nav.components";
import HeadingBannerPortfolio from "./heading-banner/heading-banner.components";
import "./portfolio.styles.scss";
export class Portfolio extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <HeadingBannerPortfolio />
        <ContactBanner />
        <Footer />
      </div>
    );
  }
}

export default Portfolio;
