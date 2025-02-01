import React from "react";
import "./styles.css";
import i1 from "../../assets/Donate/donation.jpg";

export const Donate = () => {
  return (
    <div className="donate">
      <div className="donate-image">
        <img src={i1} alt="" />
      </div>
      <div className="donate-text">
        <h2>
          An Important <br /> Event{" "}
          <span>
            For <br /> Charity
          </span>
        </h2>
        <p>
          Your generosity can transform lives and bring hope to those in need. <br />
          Every donation, big or small, makes a meaningful impact.
        </p>
        <div className="donations">
          <a href="">$10</a>
          <a href="">$50</a>
          <a href="">$100</a>
          <a href="">More</a>
        </div>
        <a href="">Donate Now</a>
      </div>
    </div>
  );
};
