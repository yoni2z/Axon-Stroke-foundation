import React from "react";
import { useState, useEffect } from "react";
import TitleBanner from "../components/TitleBanner";
//Components
import Cards from "../components/What We Do/Cards";
import VolunteerBg1 from "../assets/volunteer-title-bg.jpg";
import VolunteerBg2 from "../assets/blog2.png";
import VolunteerBg3 from "../assets/blog1.png";

const WhatWeDo = () => {
  const [WhatWeDoData, setWhatWeDoData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/programs/")
      .then((response) => response.json())
      .then((data) => setWhatWeDoData(data))
      .catch((error) => console.log("error fetching programs ", error));
  }, []);

  return (
    <div className="font-poppins">
      <TitleBanner title="WHAT WE DO" backgroundImage={VolunteerBg1} />

      <div className="py-[95px] mx-10">
        <div className="mb-[77px] text-center">
          <h1 className="text-4xl font-bold font-poppins mb-5">
            OUR PROGRAMS & <span className="text-primary">PROJECTS</span>
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
        <div className="flex flex-col sm:grid sm:grid-cols-3 lg:grid-cols-3 gap-8 gap-y-8">
          {WhatWeDoData.map((card) => (
            <Cards
              key={card.id}
              photo={card.photo}
              title={card.name}
              description={card.description}
              id={card.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
