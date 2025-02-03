import React, { useState } from "react";

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    email: "",
    phone_number: "",
    self_description: "",
  });

  const [loading, setLoading] = useState(false); // Track submission status
  const [submitted, setSubmitted] = useState(false); // Track success status

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    try {
      const response = await fetch("http://127.0.0.1:8000/api/volunteers/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true); // Mark submission as successful
        setTimeout(() => setSubmitted(false), 3000); // Reset after 3 seconds
        setFormData({
          name: "",
          role: "",
          email: "",
          phone_number: "",
          self_description: "",
        });
      } else {
        const errorData = await response.json();
        console.error("Submission failed:", errorData);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false); // Stop loading after request completes
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 font-poppins w-3/4"
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="placeholder:text-gray-600 p-3 rounded-md shadow-sm"
        required
      />
      <input
        type="text"
        name="role"
        placeholder="Role"
        value={formData.role}
        onChange={handleChange}
        className="placeholder:text-gray-600 p-3 rounded-md shadow-sm"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="placeholder:text-gray-600 p-3 rounded-md shadow-sm"
      />
      <input
        type="tel"
        name="phone_number"
        placeholder="Phone Number"
        value={formData.phone_number}
        onChange={handleChange}
        className="placeholder:text-gray-600 p-3 rounded-md shadow-sm"
        required
      />
      <textarea
        name="self_description"
        placeholder="Description"
        value={formData.self_description}
        onChange={handleChange}
        className="text-gray-600 p-3 rounded-md shadow-sm h-20"
      />
      <button
        type="submit"
        className={`text-white rounded-md w-fit mx-auto font-bold text-base py-5 px-9 ${
          loading ? "bg-gray-500 cursor-not-allowed" : "bg-button"
        }`}
        disabled={loading}
      >
        {loading ? "Submitting..." : submitted ? "Submitted!" : "Send Message"}
      </button>
    </form>
  );
};

export default VolunteerForm;
