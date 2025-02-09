import React from "react";
import "./styles.css";
import i1 from "../../assets/About/1.svg";
import i2 from "../../assets/About/2.svg";
import i3 from "../../assets/About/3.svg";
import i4 from "../../assets/About/4.svg";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <div className="about" >
      <div className="about-us">
        <div className="about-us-text">
          <h2>
            ABOUT <br className="mobile-hidden" />{" "}
            <span className="span1">WHAT WE DO</span>
          </h2>
          <p className="montserrat-font">
            From the very beginning, Axon Stroke Foundation has been dedicated
            <br />
            to one mission: improving the lives of those affected by stroke{" "}
            <br />
            through awareness, prevention, and recovery support.
          </p>
          <Link
            to="/about-us"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Know More
          </Link>
        </div>
      </div>
      <div className="about-logos">
        <div className="about-col1">
          <div className="block1">
            <span>
              <img src={i1} alt="" />
            </span>
            <h5>Leave a Legacy</h5>
            <p>
              Create lasting impact, transform <br />
              lives, inspire change.
            </p>
          </div>
          <div className="block2">
            <span>
              <img src={i2} alt="" />
            </span>
            <h5>Become a Fundraiser</h5>
            <p>
              Raise funds, empower communities, <br /> inspire collective
              support.
            </p>
          </div>
        </div>
        <div className="about-col2">
          <div className="block3">
            <span>
              <img src={i3} alt="" />
            </span>
            <h5>Make a Donation</h5>
            <p>
              Support projects, create brighter <br /> futures, drive change.
            </p>
          </div>
          <div className="block4">
            <span>
              <img src={i4} alt="" />
            </span>
            <h5>Become a Volunteer</h5>
            <p>
              Lend skills, make <br /> difference, be positive force.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
