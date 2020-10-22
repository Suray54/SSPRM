import React, { Component } from "react";
import Footer from "../../layouts/footer/footer.components";
import Navigation from "../../layouts/nav/nav.components";
import "./contact.styles.scss";
import HeadingBannerContact from "./heading-banner/heading-banner.components";
export class Contact extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <HeadingBannerContact />
        <Footer />
      </div>
    );
  }
}

export default Contact;
