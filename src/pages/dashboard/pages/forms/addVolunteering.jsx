import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddVolunteering = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    organization: "",
    description: "",
    skills: "",
    role: "",
    responsibility: "",
    location: "",
    startDate: "",
    endDate: "",
    projectName: "",
    image: null, // State to store the selected image file
  });

  const handleChange = (e) => {
    if (e.target.name === "image") {
      // Handle image file upload separately
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      // Handle text input changes
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission (e.g., send data to backend)
    console.log(formData); // Temporary log to show form data
    // After submission logic, navigate back to main volunteering page or dashboard
    navigate("/dashboard/volunteering");
  };

  return (
    <div className="px-[150px] w-[1000px]">
      <h2 className="text-2xl font-bold mb-1 text-center">Add New Skill</h2>
      <div className="container mx-auto px-4 py-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="organization" className="block font-semibold">
              Organization
            </label>
            <input
              type="text"
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-secondary"
              required
            />
          </div>
          <div>
            <label htmlFor="description" className="block font-semibold">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              value={formData.description}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-secondary"
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="skills" className="block font-semibold">
              Skills
            </label>
            <input
              type="text"
              id="skills"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-secondary"
            />
          </div>
          <div>
            <label htmlFor="role" className="block font-semibold">
              Role
            </label>
            <input
              type="text"
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-secondary"
            />
          </div>
          <div>
            <label htmlFor="responsibility" className="block font-semibold">
              Responsibility
            </label>
            <input
              type="text"
              id="responsibility"
              name="responsibility"
              value={formData.responsibility}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-secondary"
            />
          </div>
          <div>
            <label htmlFor="location" className="block font-semibold">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-secondary"
            />
          </div>
          <div className="flex justify-between">
            <div>
              <label htmlFor="startDate" className="block font-semibold">
                Start Date
              </label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-secondary"
                required
              />
            </div>
            <div>
              <label htmlFor="endDate" className="block font-semibold">
                End Date
              </label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-secondary"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="projectName" className="block font-semibold">
              Project Name
            </label>
            <input
              type="text"
              id="projectName"
              name="projectName"
              value={formData.projectName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-secondary"
            />
          </div>
          <div>
            <label htmlFor="image" className="block font-semibold">
              Upload Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-secondary"
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-aColor text-white py-2 px-4 rounded-md hover:bg-secondary transition-colors duration-300 ml-[100px]"
            >
              Add Volunteering Experience
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddVolunteering;
