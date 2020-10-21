import React, { Component } from "react";
import ContactBanner from "../../layouts/contact-banner/contact-banner.components";
import Footer from "../../layouts/footer/footer.components";
import Navigation from "../../layouts/nav/nav.components";
import Headbanner from "./headbanner/headbanner.components";
import "./homepage.styles.scss";
export class Homepage extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Headbanner />
        <ContactBanner />
        <Footer />
      </div>
    );
  }
}

export default Homepage;
