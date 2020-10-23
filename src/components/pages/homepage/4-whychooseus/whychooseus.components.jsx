import React from "react";
import "./whychooseus.styles.scss";
import { BiCheckCircle } from "react-icons/bi";
import whyus from "../../../../assets/developer.webp";
function WhyChooseUs() {
  return (
    <div className="whychooseus">
      <div className="row">
        <div
          className="col-md-6 no-space whychooseus__background"
          style={{ backgroundImage: `url(${whyus} )` }}
        ></div>
        <div className="col-md-6 no-space">
          <div className="whychooseus__details">
            <h2>Why choose us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              ducimus corrupti. Itaque porro ad, doloremque voluptates labore
              laudantium ab esse, quibusdam veniam consequatur totam explicabo,
              ea et placeat? Adipisci, neque.
            </p>

            <p>
              <span className="whychooseus__details--icon">
                <BiCheckCircle />
              </span>
              <span>
                Small enough to care, large enough to deliver excellence
              </span>
            </p>
            <p>
              <span className="whychooseus__details--icon">
                <BiCheckCircle />
              </span>
              <span>Trusted advice, imaginative solutions</span>
            </p>
            <p>
              <span className="whychooseus__details--icon">
                <BiCheckCircle />
              </span>
              <span>An accessible team.</span>
            </p>
            <p>
              <span className="whychooseus__details--icon">
                <BiCheckCircle />
              </span>
              <span>Ensuring a smooth transition.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
