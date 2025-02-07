import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TitleBanner from "../components/TitleBanner";
import CausesCard from "../components/Causes/CausesCard";
import CauseTitleBg from "../assets/cause-title-bg.jpg";
import VolunteerBg2 from "../assets/blog2.png";
import VolunteerBg3 from "../assets/blog1.png";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState([]);

  useEffect(() => {
<<<<<<< HEAD
    fetch(`https://axonstroke.org/api/projects/`)
=======
    fetch(`http://127.0.0.1:8000/api/projects/`)
>>>>>>> 9afe5157ae9127c68d61959de2f73d4d793f451a
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.log("error fetching programs ", error));
  }, []);

  useEffect(() => {
    fetch(`https://axonstroke.org/api/projects/${id}`)
      .then((response) => response.json())
      .then((data) => setProject(data))
      .catch((error) => console.log("error fetching programs ", error));
  }, [id]);

  if (!project) {
    return <div className="text-center text-xl mt-20">Project Not Found</div>;
  }

  // Navigation Handlers
  const handlePrev = () => {
    const prevId = parseInt(id) - 1;
    if (prevId >= 1) {
      navigate(`/whatwedo/projects/details/${prevId}`);
    }
  };

  const handleNext = () => {
    const nextId = parseInt(id) + 1;
    if (nextId < projects.length - 1) {
      navigate(`/whatwedo/projects/details/${nextId}`);
    }
  };

  return (
    <div className="font-poppins bg-[#F3F5F7]">
      <TitleBanner title="PROJECT DETAILS" backgroundImage={CauseTitleBg} />
      <div className="py-[95px] sm:mx-10 mx-3 flex flex-col items-center">
        <CausesCard
          causesImage={project.image}
          Title={project.title}
          Description={project.description}
          detailView={true}
          extraFields={{
            buttons: [
              {
                label: "Prev",
                style: "bg-button text-white hover:bg-black",
                onClick: handlePrev,
                // disabled: prevId === 0,
              },
              {
                label: "Next",
                style: "bg-button text-white hover:bg-black",
                onClick: handleNext,
                // disabled: nextId === projects.length - 1,
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default ProjectDetails;
