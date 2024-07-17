import React, { useState } from "react";

const AddContact = () => {
  const [formData, setFormData] = useState({
    email: "",
    phoneNumber: "",
    linkedinProfile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission (e.g., send data to backend)
    console.log(formData); // Temporary log to show form data
    // After submission logic
  };

  return (
    <div className="container mx-auto px-4 py-8 ml-[250px]">
      <h2 className="text-2xl font-bold mb-4">Add Contact Information</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
       <div className="w-[300px]">
        <div>
          <label htmlFor="email" className="block font-semibold mt-5">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-secondary"
            required
          />
        </div>
        <div className="mt-5">
          <label htmlFor="phoneNumber" className="block font-semibold">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-secondary"
            required
          />
        </div>
        <div className="mt-5">
          <label htmlFor="linkedinProfile" className="block font-semibold">
            LinkedIn Profile
          </label>
          <input
            type="url"
            id="linkedinProfile"
            name="linkedinProfile"
            value={formData.linkedinProfile}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-secondary"
            required
          />
        </div>
        </div>
        <div className="mt-5">
          <button
            type="submit"
            className="bg-aColor text-white py-2 px-4 rounded-md hover:bg-secondary transition-colors duration-300"
          >
            Add Contact Information
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddContact;
