const Members = ({ photo, name, discription }) => {
  return (
    <div className="bg-white shadow-lg  overflow-hidden w-72 ">
      <img src={photo} alt={name} className="w-full h-96 object-cover" />
      <div className="p-4 text-center">
        <h3 className="text-gray-600 font-bold text-lg">
          <span className="text-[#cc1631] font-bold text-lg">{name}</span>
        </h3>
        <p className="text-gray-600 text-sm mt-2">{discription}</p>
      </div>
    </div>
  );
};

export default Members;
