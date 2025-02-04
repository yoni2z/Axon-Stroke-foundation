import { useState, useEffect } from "react";
import TitleBanner from "../components/TitleBanner";
import CausesCard from "../components/Causes/CausesCard";
import { useParams, useNavigate } from "react-router-dom";
import CauseTitleBg from "../assets/cause-title-bg.jpg";
import ResourcesCard from "../components/Causes/ResourcesCard";

const ResourceDetails = () => {
  const [resources, setResources] = useState({
    id: "",
    name: "",
    image: "",
    color: "",
    description: "",
    resourceDetails: [],
  });
  const { id } = useParams();
  const navigate = useNavigate();
  const [resourceDetails, setResourceDetails] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/resources/")
      .then((response) => response.json())
      .then((data) => setResources(data))
      .catch((error) => console.log("error fetching resources ", error));
  }, []);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/resource-details/${id}`)
      .then((response) => response.json())
      .then((data) => setResourceDetails(data))
      .catch((error) => console.log("error fetching the resource details", error));
  }, [id]);

  if (!resourceDetails) {
    return <div>Resources not found</div>;
  }

  const handlePrev = () => {
    const prevId = parseInt(id) - 1;
    if (prevId >= 1) {
      navigate(`/resource-details/${prevId}`);
    }
  };

  const handleNext = () => {
    const nextId = parseInt(id) + 1;
    if (nextId <= Object.keys(resourceDetails).length) {
      navigate(`/resource-details/${nextId}`);
    }
  };

  return (
    <div className="font-poppins bg-[#F3F5F7]">
      <TitleBanner title="Resources" backgroundImage={CauseTitleBg} />
      <div className="py-[95px] sm:mx-10 mx-3 flex flex-col items-center">
        <ResourcesCard
          causesImage={resourceDetails.image}
          Title={resourceDetails.title}
          Description={resourceDetails.description}
          Link={resourceDetails.link}
          detailView={true}
          extraFields={{
            buttons: [
              {
                label: "Prev",
                style: "bg-button text-white hover:bg-black",
                onClick: handlePrev,
              },
              {
                label: "Next",
                style: "bg-button text-white hover:bg-black",
                onClick: handleNext,
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default ResourceDetails;
