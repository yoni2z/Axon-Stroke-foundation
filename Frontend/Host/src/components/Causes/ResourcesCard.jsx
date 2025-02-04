import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const ResourcesCard = ({
  causesImage,
  Title,
  Description,
  Link,
  detailView = false,
  extraFields = {},
}) => {
  return (
    <div className="flex flex-col bg-white items-center shadow-md rounded-md w-fit overflow-hidden font-poppins hover:shadow-2xl h-full">
      {/* Image */}
      <img
        src={causesImage}
        alt="volunteer Image"
        className="w-full min-h-[250px] bg-cover object-cover hover:scale-105 duration-500"
      />

      {/* Title and Description */}
      <div className="flex flex-col items-start text-left pt-6 pr-10 pb-6 pl-12 h-full">
        {detailView && <h1 className="text-primary text-base">Resources</h1>}

        <h1
          className={`font-bold text-2xl ${
            detailView ? "hover:text-black" : "hover:text-primary"
          } mb-4 mt-2`}
        >
          {Title}
        </h1>

        <h4 className="text-secondary mb-3">{Description}</h4>
        {Link && (
          <a
            href={Link}
            className="text-primary font-semibold underline underline-offset-4 transition duration-300 hover:text-black self-center mt-4"
          >
            Learn More →
          </a>
        )}

        {/* Continue Reading Link */}
        {!detailView && (
          <a href="#" className="text-primary hover:text-black mt-auto">
            Read More
          </a>
        )}

        {/* Additional Content for Detailed View */}
        {detailView && (
          <div className="mt-auto flex justify-between w-full">
            {extraFields.buttons?.map((button, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-md mr-2 ${button.style}`}
                onClick={button.onClick}
              >
                {button.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourcesCard;
