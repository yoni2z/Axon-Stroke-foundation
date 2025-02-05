import React, { useEffect, useState } from "react";

import VolunteerForm from "../components/Volunteer/VolunteerForm";
import TitleBanner from "../components/TitleBanner";
import VolunteerBg from "../assets/volunteer-title-bg.jpg";

const VolunteerPage = () => {
  return (
    <div className="font-poppins">
      <TitleBanner title="Volunteer" backgroundImage={VolunteerBg} />
      {/* Become a Volunteer Section */}
      <div>
        <div className=" py-[95px] bg-background ">
          <div className="flex flex-col mx-10 items-center justify-center">
            <div className="mb-[77px] text-center">
              <h1 className="text-4xl font-bold font-Lora mb-5">
                BECOME A <span className="text-primary">VOLUNTEER</span>
              </h1>
              <p className="text-secondary max-w-[80%] mx-auto font-Montserrat">
                Your time and skills can make a significant impact on our
                efforts. Volunteers help us run community workshops, assist in
                events, provide administrative support, and contribute to our
                outreach programs. Whether you have healthcare expertise or just
                a passion for helping others, your contribution will be valued.
              </p>
            </div>
            <VolunteerForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerPage;
