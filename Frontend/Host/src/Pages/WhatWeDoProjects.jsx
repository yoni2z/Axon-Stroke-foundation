import React from "react";
import TitleBanner from "../components/TitleBanner";
//Components
import Cards from "../components/What We Do/Cards";
import VolunteerBg from "../assets/volunteer-title-bg.jpg";

import { useParams } from "react-router-dom";

const WhatWeDoProjects = () => {
  const { id } = useParams();
  return (
    <div className="font-poppins">
      <TitleBanner title="Our Projects" backgroundImage={VolunteerBg} />

      <div className="py-[95px] mx-10">
        <div className="mb-[77px] text-center">
          <h1 className="text-4xl font-bold font-poppins mb-5">
            Our <span className="text-primary">Projects</span>
          </h1>
        </div>

        {/* Render What We Do Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8 mx-auto">
          {id === "1" && (
            <Cards
              photo={VolunteerBg}
              title="A. Stroke Awareness Program"
              description="Our Stroke Awareness Program aims to increase public knowledge about stroke prevention, symptoms, and the importance of early intervention."
            />
          )}
          {id === "2" && (
            <Cards
              photo={VolunteerBg}
              title="Free Stroke Therapy Programs"
              description="Our Free Stroke Therapy Programs provide essential rehabilitation services for stroke survivors, focusing on improving physical and cognitive recovery through therapy and support."
            />
          )}
          {id === "3" && (
            <Cards
              photo={VolunteerBg}
              title="Stroke Education & Research Programs"
              description="Our Stroke Education & Research Programs focus on advancing the knowledge of stroke, its prevention, and innovative treatments. We are committed to supporting research and spreading vital information to both the public and healthcare professionals."
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoProjects;
