const CausesCard = ({
  causesImage,
  Title,
  Description,
  detailView = false,
  extraFields = {},
}) => {
  return (
    <div className="flex flex-col bg-white items-center shadow-md rounded-md w-fit overflow-hidden font-Montserrat hover:shadow-2xl h-full">
      <img
        src={causesImage}
        alt="volunteer Image"
        className="w-full bg-cover min-h-[250px] hover:scale-105 duration-500"
      />
      {/* Title and Description */}
      <div className="flex flex-col items-start text-left pt-6 pr-10 pb-6 pl-12 flex-grow">
        {detailView && <h1 className="text-primary text-base">Projects</h1>}
        <h1
          className={`font-bold text-blue-900 text-2xl font-PlayfairDisplay ${
            detailView ? "hover:text-black" : "hover:text-primary"
          } mb-6 mt-2`}
        >
          {Title}
        </h1>
        <h4 className="text-secondary mb-3 mt-auto">{Description}</h4>
        {/* Continue Reading Link */}
        {!detailView && (
          <button className="text-white text-left mt-auto mb-3 px-4 py-2 rounded-md mr-2 bg-button hover:bg-black">
            Learn More
          </button>
        )}
        {/* Additional Content for Detailed View */}
        {detailView && (
          <div className="mt-12 flex justify-between w-full">
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

export default CausesCard;
