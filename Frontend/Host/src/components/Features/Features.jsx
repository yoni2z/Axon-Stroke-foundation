import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { FeaturesCard } from "../Features-Card/Features-Card";
import i1 from "../../assets/Features/6.jpeg";
import i2 from "../../assets/Features/4.jpg";
import i3 from "../../assets/Features/5.png";

export const Features = () => {
  return (
    <div className="features">
      <div className="features-container">
        <div className="features-container-texts">
          <h2>
            Featured <span className="feature-span">Causes</span>
          </h2>
          <p>
            Join our featured cause to create lasting change and empower
            communities in need.
          </p>
        </div>
        <div className="features-news">
          <FeaturesCard
            image={i1}
            title={"Explore New Opportunities Today"}
            description={
              "Discover innovative ways to make a difference and create positive change in the world"
            }
          />
          <FeaturesCard
            image={i2}
            title={"Find Your Path to Giving"}
            description={
              "Choose from various ways to contribute and support causes close to your heart."
            }
          />
          <FeaturesCard
            image={i3}
            title={"Make a Difference, Your Way"}
            description={
              "From volunteering to donations, find personalized ways to impact lives meaningfully."
            }
          />
        </div>
      </div>
    </div>
  );
};
