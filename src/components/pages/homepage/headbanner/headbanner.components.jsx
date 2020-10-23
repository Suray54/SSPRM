import React, { Component } from "react";
import "./headbanner.styles.scss";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import banner from "./../../../../assets/dark.jpg";

export class Headbanner extends Component {
  render() {
    return (
      <div className="headbanner" style={{ backgroundImage: `url(${banner})` }}>
        <div className="headbanner__details">
          <h1>we bring your idea to life</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
            atque, eius, sed harum ipsam eligendi.
          </p>
          <Link className="headbanner__details--link" to="/about">
            Learn More
            <span>
              <FaAngleRight />
            </span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Headbanner;
