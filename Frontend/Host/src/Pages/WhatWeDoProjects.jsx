import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TitleBanner from "../components/TitleBanner";
import ProjectCard from "../components/What We Do/ProjectCard";
import VolunteerBg from "../assets/volunteer-title-bg.jpg";
import VolunteerBg2 from "../assets/blog2.png";
import VolunteerBg3 from "../assets/blog1.png";

const WhatWeDoProjects = () => {
  const { id } = useParams();
  const [WhatWeDoData, setWhatWeDoData] = useState({
    id: "",
    name: "",
    color: "",
    photo: "",
    description: "",
    projects: [],
  });

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/programs/${id}`)
      .then((response) => response.json())
      .then((data) => setWhatWeDoData(data))
      .catch((error) => console.log("error fetching programs ", error));
  }, []);

  const selectedProjects = WhatWeDoData.projects || [];

  return (
    <div className="font-poppins">
      <TitleBanner title="Our Projects" backgroundImage={VolunteerBg} />

      <div className="py-[95px] mx-10">
        <div className="mb-[77px] text-center">
          <h3 className="text-4xl font-bold font-poppins mb-5">
            <span className="text-customRed font-Lora">
              {WhatWeDoData.name.toUpperCase()}
            </span>
          </h3>
        </div>

        <div className="flex flex-col sm:grid sm:grid-cols-3 lg:grid-cols-3 gap-8 gap-y-8">
          {selectedProjects.map((project) => (
            <ProjectCard
              key={project.id}
              photo={project.image}
              title={project.title}
              description={project.description}
              id={project.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoProjects;
