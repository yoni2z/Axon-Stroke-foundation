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
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Role" />
      <input type="email" placeholder="Email" />
      <input type="number" placeholder="Phone Number" />
      <textarea
        name="message"
        id="message"
        cols="30"
        rows="10"
        placeholder="Message"
      />
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
