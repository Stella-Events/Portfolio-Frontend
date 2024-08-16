import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { apiAddExperience } from "../../../../services/experiences";

const AddExperience = () => {
  const navigate = useNavigate();
  const [experience, setExperience] = useState({
    companyName: "",
    role: "",
    responsibility: "",
    skills: "",
    description: "",
    startDate: "",
    endDate: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperience({
      ...experience,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await apiAddExperience(experience);
      toast.success(res.data.message);
      navigate("/dashboard/experiences");
    } catch (error) {
      toast.error("An error occurred while adding the experience");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-[50px] w-[1000px]">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Experience</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex gap-4">
          <div className="flex flex-col w-1/2">
            <label htmlFor="companyName" className="text-lg font-medium">Company Name</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={experience.companyName}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded"
              placeholder="Enter company name"
              required
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label htmlFor="role" className="text-lg font-medium">Role</label>
            <input
              type="text"
              id="role"
              name="role"
              value={experience.role}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded"
              placeholder="Enter role"
              required
            />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col w-1/2">
            <label htmlFor="responsibility" className="text-lg font-medium">Responsibility</label>
            <input
              type="text"
              id="responsibility"
              name="responsibility"
              value={experience.responsibility}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded"
              placeholder="Enter responsibility"
              required
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label htmlFor="skills" className="text-lg font-medium">Skills</label>
            <input
              type="text"
              id="skills"
              name="skills"
              value={experience.skills}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded"
              placeholder="Enter skills"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="description" className="text-lg font-medium">Description</label>
          <textarea
            id="description"
            name="description"
            value={experience.description}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded h-32"
            placeholder="Enter description"
            required
          />
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col w-1/2">
            <label htmlFor="startDate" className="text-lg font-medium">Start Date</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={experience.startDate}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label htmlFor="endDate" className="text-lg font-medium">End Date</label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={experience.endDate}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="py-3 px-6 bg-aColor text-white text-lg font-bold rounded hover:bg-primary-dark transition-all duration-300"
            disabled={isLoading}
          >
            {isLoading ? "Adding..." : "Add Experience"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddExperience;
