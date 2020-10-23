import React, { Component } from "react";
import ContactBanner from "../../layouts/contact-banner/contact-banner.components";
import Footer from "../../layouts/footer/footer.components";
import Navigation from "../../layouts/nav/nav.components";
import AboutSection from "./1-about/1-about.components";
import ProjectCompleted from "./2-projectcompleted/project-completed.components";
import OurServices from "./3-services/ourservices.components";
import WhyChooseUs from "./4-whychooseus/whychooseus.components";
import Testimonials from "./5-testimonial/testimonial.components";
import Headbanner from "./headbanner/headbanner.components";
import "./homepage.styles.scss";
export class Homepage extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Headbanner />
        <AboutSection />
        <ProjectCompleted />
        <OurServices />
        <WhyChooseUs />
        <Testimonials />
        <ContactBanner />
        <Footer />
      </div>
    );
  }
}

export default Homepage;
