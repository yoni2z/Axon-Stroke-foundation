import React from "react";
import { NavLink } from "react-router-dom";

const ProjectCard = ({ photo, title, description, id }) => {
  return (
    <div className="flex flex-col bg-white items-center shadow-md rounded-md w-fit overflow-hidden font-poppins hover:shadow-2xl ">
      <img
        src={photo}
        alt="volunteer Image"
        className="w-full bg-contain min-h-[250px] hover:scale-105 duration-500"
      />

      {/* Title and Description */}
      <div className="flex flex-col items-start text-left pt-6 pr-10 pb-6 pl-12 h-full">
        <h1 className={"font-bold text-2xl hover:text-primary mb-6 mt-2"}>
          {title}
        </h1>
        <h4 className="text-secondary mb-3">{description}</h4>

        {/* Continue Reading Link */}
        <NavLink
          to={`/whatwedo/projects/details/${id}`}
          className="text-customRed hover:text-black text-left mt-auto mb-3"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Read More
        </NavLink>
      </div>
    </div>
  );
};

export default ProjectCard;
