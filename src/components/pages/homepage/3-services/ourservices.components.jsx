import React from "react";
import "./ourservices.styles.scss";
import { Link } from "react-router-dom";
import { BsPhone } from "react-icons/bs";
import { FiMonitor } from "react-icons/fi";
import { DiPhotoshop } from "react-icons/di";
function OurServices() {
  return (
    <div className="services">
      <div className="services__header">
        <h2>What we offer</h2>
      </div>
      <div className="row">
        <div className="col-lg-4 no-space">
          <div className="services__details">
            <span className="services__details--icon">
              <FiMonitor />
            </span>
            <h3 className="services__details--heading">
              web design and Developement
            </h3>
            <p className="services__details--lorem">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit ut exercitationem eius eligendi voluptates veritatis
              molestias,
            </p>
            <Link to="/services" className="services__details--link">
              Learn More
            </Link>
          </div>
        </div>
        <div className="col-lg-4  no-space">
          <div className="services__details">
            <span className="services__details--icon">
              <BsPhone />
            </span>
            <h3 className="services__details--heading">Mobile App</h3>
            <p className="services__details--lorem">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit ut exercitationem eius eligendi voluptates veritatis
              molestias,
            </p>
            <Link to="/services" className="services__details--link">
              Learn More
            </Link>
          </div>
        </div>
        <div className="col-lg-4 no-space">
          <div className="services__details">
            <span className="services__details--icon">
              <DiPhotoshop />
            </span>
            <h3 className="services__details--heading">Graphic Design</h3>
            <p className="services__details--lorem">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit ut exercitationem eius eligendi voluptates veritatis
              molestias,
            </p>
            <Link to="/services" className="services__details--link">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
