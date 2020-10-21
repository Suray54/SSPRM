import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./contact-banner.styles.scss";
export class ContactBanner extends Component {
  render() {
    return (
      <div className="contact-banner">
        <h3>Send us a message if you have any Queries.</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          obcaecati at omnis itaque quam optio aspernatur.
        </p>
        <button>
          <Link to="/contact" className="contact-banner__link">
            GET IN TOUCH !
          </Link>
        </button>
      </div>
    );
  }
}

export default ContactBanner;
