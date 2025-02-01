import React from "react";
import "./styles.css";
import i1 from "../../assets/About/1.svg";
import i2 from "../../assets/About/2.svg";
import i3 from "../../assets/About/3.svg";
import i4 from "../../assets/About/4.svg";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <div className="about">
      <div className="about-us">
        <div className="about-us-text">
          <h2>
            About <br className="mobile-hidden" />{" "}
            <span className="span1">What We Do</span>
          </h2>
          <p>
            We are a non-profit organization dedicated to <br /> raising
            awareness about stroke,
            <br />
            providing essential therapeutic support, and <br /> improving stroke
            care across Ethiopia and Africa., <br />
            Our mission is to educate communities on stroke prevention, <br />
            provide resources for recovery, and ensure <br /> that stroke
            survivors have access to <br />
            the therapies and surgeries they need.
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
              Lorem ipsum dolor sit amet <br />
              consectetur adipisicing elit. <br />
            </p>
          </div>
          <div className="block2">
            <span>
              <img src={i2} alt="" />
            </span>
            <h5>Become a Fundraiser</h5>
            <p>
              Lorem ipsum dolor sit amet <br />
              consectetur adipisicing elit. <br />
              Itaque
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
              Lorem ipsum dolor sit amet <br />
              consectetur adipisicing elit. <br />
              Itaque
            </p>
          </div>
          <div className="block4">
            <span>
              <img src={i4} alt="" />
            </span>
            <h5>Become a Volunteer</h5>
            <p>
              Lorem ipsum dolor sit amet <br />
              consectetur adipisicing elit. <br />
              Itaque
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
