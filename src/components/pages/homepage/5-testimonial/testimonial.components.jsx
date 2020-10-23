import React from "react";
import "./testimonial.styles.scss";
import anup from "./../../../../assets/anup.jpg";
import sushil from "./../../../../assets/sushil.jpg";
function Testimonials() {
  return (
    <div className=" testimonials">
      <h2>What our Client say</h2>
      <div className="row">
        <div className="col-md-12">
          <div
            className="carousel slide"
            data-ride="carousel"
            id="quote-carousel"
          >
            <div className="carousel-inner text-center">
              <div className="item active">
                <blockquote>
                  <div className="row">
                    <div className="col-sm-8 col-sm-offset-2">
                      <p>
                        I have worked with Suranjan Rai and known him for more
                        than 5 years. Rai understands the needs of a startup -
                        he's reliable, flexible and consistently delivers a
                        valuable service. He's a smart guy who loves to problem
                        solve with fresh ideas. As a bonus, he's absolute
                        pleasure to work with.
                      </p>
                      <small>Anup Maharjan</small>
                    </div>
                  </div>
                </blockquote>
              </div>

              <div className="item">
                <blockquote>
                  <div className="row">
                    <div className="col-sm-8 col-sm-offset-2">
                      <p>
                        It is very crucial for a person to have good
                        communication skills in order to work in a group. We
                        were able to work coherently and made the project a huge
                        success. Being a technology enthusiast he is up-to-date
                        with new technology and provides wide range of services.
                        I was glad I chose right person to work with.
                      </p>
                      <small>Sushil Shrestha</small>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>

            <ol className="carousel-indicators">
              <li
                data-target="#quote-carousel"
                data-slide-to="0"
                className="active"
              >
                <img
                  className="img-responsive "
                  src={anup}
                  alt=" client photo-1"
                />
              </li>
              <li data-target="#quote-carousel" data-slide-to="1">
                <img
                  className="img-responsive"
                  src={sushil}
                  alt="client photo-2"
                />
              </li>
            </ol>

            <a
              data-slide="prev"
              href="#quote-carousel"
              className="left carousel-control"
            >
              <i className="fa fa-chevron-left"></i>
            </a>
            <a
              data-slide="next"
              href="#quote-carousel"
              className="right carousel-control"
            >
              <i className="fa fa-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Testimonials;
