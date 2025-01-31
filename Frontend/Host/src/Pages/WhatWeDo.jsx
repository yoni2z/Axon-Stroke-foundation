import React from "react";
import TitleBanner from "../components/TitleBanner";
//Components
import Cards from "../components/What We Do/Cards";
import VolunteerBg1 from "../assets/volunteer-title-bg.jpg";
import VolunteerBg2 from "../assets/blog2.png";
import VolunteerBg3 from "../assets/blog1.png";

const WhatWeDo = () => {
  return (
    <div className="font-poppins">
      <TitleBanner title="WHAT WE DO" backgroundImage={VolunteerBg1} />

      <div className="py-[95px] mx-10">
        <div className="mb-[77px] text-center">
          <h1 className="text-4xl font-bold font-poppins mb-5">
            Our Programs and <span className="text-primary">Projects</span>
          </h1>
          <p className="text-secondary max-w-[80%] mx-auto">
            At Axon Stroke Foundation, our work revolves around three core
            programs: Stroke Awareness, Free Stroke Therapy, and Stroke
            Education & Research. These programs form the foundation of our
            mission to improve stroke care, support survivors, and educate
            communities. Below are the key projects within each program.
          </p>
        </div>

        {/* Render What We Do Cards */}
        <div className="flex flex-col gap-14 mx-auto">
          <Cards
            photo={VolunteerBg2}
            title="A. Stroke Awareness Program"
            description="Our Stroke Awareness Program aims to increase public knowledge about stroke prevention, symptoms, and the importance of early intervention."
            id="1"
          />
          <Cards
            photo={VolunteerBg2}
            title="Free Stroke Therapy Programs"
            description="Our Free Stroke Therapy Programs provide essential rehabilitation services for stroke survivors, focusing on improving physical and cognitive recovery through therapy and support."
            id="2"
          />
          <Cards
            photo={VolunteerBg3}
            title="Stroke Education & Research Programs"
            description="Our Stroke Education & Research Programs focus on advancing the knowledge of stroke, its prevention, and innovative treatments. We are committed to supporting research and spreading vital information to both the public and healthcare professionals."
            id="3"
          />
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
