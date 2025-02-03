import React from "react";

const VolunteerForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 font-poppins w-3/4"
    >
      <input
        type="text"
        placeholder="Name"
        className="placeholder:text-gray-600 p-3 rounded-md shadow-sm"
      />
      <input
        type="email"
        placeholder="Email"
        className="placeholder:text-gray-600 p-3 rounded-md shadow-sm"
      />
      <input
        type="text"
        placeholder="Role"
        className="placeholder:text-gray-600 p-3 rounded-md shadow-sm"
      />
      <input
        type="tel"
        placeholder="Phone Number"
        className="placeholder:text-gray-600 p-3 rounded-md shadow-sm"
      />
      <textarea
        name="description"
        id="message"
        cols="30"
        rows="10"
        className="text-gray-600 p-3 rounded-md shadow-sm"
      >
        Description
      </textarea>
      <button
        type="submit"
        className="text-white bg-button rounded-md w-fit mx-auto font-bold text-base py-5 px-9"
      >
        Send Message
      </button>
    </form>
  );
};

export default VolunteerForm;
