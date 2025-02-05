import { useState, useEffect } from "react";
import { NavLink, resolvePath, useParams, useNavigate } from "react-router-dom";
import TitleBanner from "../components/TitleBanner";
import ResourcesCard from "../components/Causes/ResourcesCard";
import CauseTitleBg from "../assets/cause-title-bg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowRight,
  faLongArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

const ResourcesList = () => {
  const [resourceList, setResourceList] = useState({
    id: "",
    name: "",
    image: "",
    color: "",
    description: "",
    resourceDetails: [],
  });
  const [currentPage, setCurrentPage] = useState(1);
  const { id } = useParams();
  const itemsPerPage = 3;

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/resources/${id}`)
      .then((response) => response.json())
      .then((data) => setResourceList(data))
      .catch((error) => console.log("error fetching resources ", error));
  }, []);

  const totalPages = Math.ceil(
    resourceList.resourceDetails.length / itemsPerPage
  );

  // Get the items for the current page
  const currentItems = resourceList.resourceDetails.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="font-poppins bg-[#F3F5F7]">
      <TitleBanner title="RESOURCES" backgroundImage={CauseTitleBg} />

      <div className="py-[95px] sm:mx-10 mx-3">
        <div className="mb-[77px] text-center">
          <h3 className="text-4xl font-bold font-poppins mb-5">
            <span className="text-customRed font-Lora">
              {resourceList.name.toUpperCase()}
            </span>
          </h3>
        </div>

        <div className="flex flex-col sm:grid sm:grid-cols-3 gap-8 mx-auto">
          {currentItems.map((list) => (
            <NavLink
              to={`/resource-details/${list.id}`}
              key={list.id}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <ResourcesCard
                causesImage={list.image}
                Title={list.title}
                Description={list.description}
              />
            </NavLink>
          ))}
        </div>
        <div className="bg-white mt-8 mb-5 py-6 px-12 flex items-center rounded-md">
          <div className="flex flex-row items-center justify-between w-full">
            {/* Previous Button */}
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className={`text-secondary hover:text-button ${
                currentPage === 1 && "opacity-50 cursor-not-allowed"
              }`}
            >
              <FontAwesomeIcon icon={faLongArrowLeft} />
            </button>

            {/* Page Numbers */}
            <div className="flex flex-row items-center justify-center gap-1 mx-auto">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`w-8 h-8 ${
                    currentPage === index + 1
                      ? "bg-button text-white rounded-full"
                      : "text-black hover:text-white hover:bg-button hover:rounded-full"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`text-secondary hover:text-button ${
                currentPage === totalPages && "opacity-50 cursor-not-allowed"
              }`}
            >
              <FontAwesomeIcon icon={faLongArrowRight} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesList;
