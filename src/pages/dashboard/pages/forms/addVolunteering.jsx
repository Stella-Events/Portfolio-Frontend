import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { apiAddVolunteering } from "../../../../services/volunteering";

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
    image: null,
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });

      const res = await apiAddVolunteering(formDataToSend);
      toast.success(res.data.message);
      navigate("/dashboard/volunteering");
    } catch (error) {
      toast.error("An error occurred while adding the volunteering experience");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="px-[150px] w-[1000px]">
      <h2 className="text-2xl font-bold mb-6 text-center">Add Volunteering Experience</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="organization" className="text-lg font-medium">Organization</label>
          <input
            type="text"
            id="organization"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
            placeholder="Enter organization"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="description" className="text-lg font-medium">Description</label>
          <textarea
            id="description"
            name="description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded h-32"
            placeholder="Enter description"
            required
          ></textarea>
        </div>
        <div className="flex flex-col">
          <label htmlFor="skills" className="text-lg font-medium">Skills</label>
          <input
            type="text"
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
            placeholder="Enter skills"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="role" className="text-lg font-medium">Role</label>
          <input
            type="text"
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
            placeholder="Enter role"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="responsibility" className="text-lg font-medium">Responsibility</label>
          <input
            type="text"
            id="responsibility"
            name="responsibility"
            value={formData.responsibility}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
            placeholder="Enter responsibility"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="location" className="text-lg font-medium">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
            placeholder="Enter location"
          />
        </div>
        <div className="flex justify-between space-x-4">
          <div className="flex flex-col w-full">
            <label htmlFor="startDate" className="text-lg font-medium">Start Date</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="endDate" className="text-lg font-medium">End Date</label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded"
              required
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="projectName" className="text-lg font-medium">Project Name</label>
          <input
            type="text"
            id="projectName"
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
            placeholder="Enter project name"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="image" className="text-lg font-medium">Upload Image</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="py-3 px-6 bg-aColor text-white text-lg font-bold rounded hover:bg-secondary transition-all duration-300"
            disabled={isLoading}
          >
            {isLoading ? "Adding..." : "Add Volunteering Experience"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddVolunteering;
