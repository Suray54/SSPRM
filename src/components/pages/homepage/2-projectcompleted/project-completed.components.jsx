import React from "react";
import "./project-completed.styles.scss";
import { VscAccount } from "react-icons/vsc";
import { BsCodeSlash } from "react-icons/bs";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { RiCupLine } from "react-icons/ri";
import "./counter";
import background from "./../../../../assets/dark-back.webp";
function ProjectCompleted() {
  return (
    <div
      className="project-completed"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="row">
        <div className="col-lg-3 col-md-6 project-completed__detail">
          <span className="project-completed__detail--icon">
            <HiOutlineEmojiHappy />
          </span>
          <h1>
            <span className="count">100</span>
            <span>%</span>
          </h1>
          <p>Happy customer</p>
        </div>
        <div className="col-lg-3 col-md-6 project-completed__detail">
          <span className="project-completed__detail--icon">
            <BsCodeSlash />
          </span>
          <h1>
            <span className="count">100</span>
            <span>.Mil</span>
          </h1>
          <p>Lines of code</p>
        </div>
        <div className="col-lg-3 col-md-6 project-completed__detail">
          <span className="project-completed__detail--icon">
            <RiCupLine />
          </span>
          <h1>
            <span className="count">50</span>
            <span>k</span>
          </h1>
          <p>Cup of coffee</p>
        </div>
        <div className="col-lg-3 col-md-6 project-completed__detail">
          <span className="project-completed__detail--icon">
            <VscAccount />
          </span>
          <h1>
            <span className="count">100</span>
            <span></span>
          </h1>
          <p>Project Completed</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCompleted;
