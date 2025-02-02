import React from "react";
import TitleBanner from "../components/TitleBanner";
import ProjectCard from "../components/What We Do/ProjectCard";
import VolunteerBg from "../assets/volunteer-title-bg.jpg";
import VolunteerBg2 from "../assets/blog2.png";
import VolunteerBg3 from "../assets/blog1.png";
import { useParams } from "react-router-dom";

// Define project data
const projectsData = {
  1: [
    {
      photo: VolunteerBg3,
      title: "National Stroke Awareness Campaign",
      description:
        "A nationwide initiative to educate communities about the signs and symptoms of stroke, emphasizing the need for early medical intervention. The campaign includes TV ads, community seminars, and educational materials.",
    },
    {
      photo: VolunteerBg2,
      title: "Stroke Awareness in Schools",
      description:
        "A targeted outreach program that educates school-age children about stroke prevention and awareness, helping them recognize symptoms and respond quickly in emergency situations.",
    },
    {
      photo: VolunteerBg3,
      title: "Community Stroke Education Workshops",
      description:
        "Regular workshops in local communities across Ethiopia to provide education on stroke prevention and the importance of healthy living.",
    },
    {
      photo: VolunteerBg2,
      title: "Mobile Stroke Awareness Clinics",
      description:
        "A mobile initiative that travels to rural and underserved areas to offer free stroke screenings, educational materials, and consultations.",
    },
    {
      photo: VolunteerBg3,
      title: "Stroke Awareness Corners",
      description:
        "Interactive booths set up in collaboration with the Ministry of Health Ethiopia, placed in major hospitals and health centers.",
    },
  ],
  2: [
    {
      photo: VolunteerBg3,
      title: "Stroke Rehabilitation Access Initiative",
      description:
        "A project that connects stroke survivors with free physical and occupational therapy at local clinics.",
    },
    {
      photo: VolunteerBg3,
      title: "Telehealth Stroke Therapy",
      description:
        "A remote therapy service that allows stroke survivors to access physical and speech therapy sessions via video calls.",
    },
    {
      photo: VolunteerBg2,
      title: "Post-Stroke Cognitive Rehabilitation",
      description:
        "A program offering free cognitive therapy for stroke survivors experiencing memory and cognitive challenges.",
    },
    {
      photo: VolunteerBg2,
      title: "Stroke Survivor Support Groups",
      description:
        "A network of support groups for stroke survivors and their families to share experiences and receive emotional support.",
    },
  ],
  3: [
    {
      photo: VolunteerBg3,
      title: "Stroke Prevention Research Grants",
      description:
        "A funding initiative to support local researchers conducting studies on stroke prevention methods.",
    },
    {
      photo: VolunteerBg3,
      title: "Healthcare Provider Training Workshops",
      description:
        "A program designed to train healthcare providers on the latest stroke care protocols and rehabilitation techniques.",
    },
    {
      photo: VolunteerBg3,
      title: "Stroke Research Symposium",
      description:
        "An annual conference that brings together global and local experts to present the latest stroke research findings.",
    },
    {
      photo: VolunteerBg2,
      title: "Public Stroke Education Platform",
      description:
        "An online platform that offers free resources such as webinars, articles, and courses on stroke prevention, treatment, and rehabilitation.",
    },
  ],
};

const WhatWeDoProjects = () => {
  const { id } = useParams();
  const selectedProjects = projectsData[id] || []; // Default to an empty array if ID is invalid

  return (
    <div className="font-poppins">
      <TitleBanner title="Our Projects" backgroundImage={VolunteerBg} />

      <div className="py-[95px] mx-10">
        <div className="mb-[77px] text-center">
          <h3 className="text-4xl font-bold font-poppins mb-5">
            {id === "1" && (
              <>
                STROKE{" "}
                <span className="text-customRed">AWARENESS PROJECTS</span>
              </>
            )}
            {id === "2" && (
              <>
                STROKE <span className="text-customRed">THERAPY PROJECTS</span>
              </>
            )}
            {id === "3" && (
              <>
                STROKE EDUCATION &{" "}
                <span className="text-customRed">RESEARCH PROJECTS</span>
              </>
            )}
          </h3>
        </div>

        <div className="flex flex-col sm:grid sm:grid-cols-3 lg:grid-cols-3 gap-8 gap-y-8">
          {selectedProjects.map((project, index) => (
            <ProjectCard
              key={index}
              photo={project.photo}
              title={project.title}
              description={project.description}
              id={id}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoProjects;
