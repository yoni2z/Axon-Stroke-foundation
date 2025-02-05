import React from "react";
import { NavLink } from "react-router-dom";

const Cards = ({ photo, title, description, id }) => {
  return (
    <NavLink
      to={`/whatwedo/projects/${id}`}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <div className="flex flex-col bg-white items-center shadow-md rounded-md w-fit overflow-hidden font-Montserrat hover:shadow-2xl h-[85%]">
        <img
          src={photo}
          alt="volunteer Image"
          className="w-full bg-cover object-cover min-h-[250px] hover:scale-105 duration-500"
        />
        <div className="flex flex-col items-start text-left pt-6 pr-10 pb-6 pl-12 h-full">
          <h1
            className={
              "font-bold text-2xl hover:text-primary mb-6 mt-2 font-Lora"
            }
          >
            {title}
          </h1>
          <h4 className="text-secondary mb-3">{description}</h4>
          <button className="text-white text-left mt-auto mb-3 px-4 py-2 rounded-md mr-2 bg-button hover:bg-black">
            Load Projects
          </button>
        </div>
      </div>
    </NavLink>
  );
};

export default Cards;
