import { useState } from "react";

const AddAchievements = () => {
  const [achievement, setAchievement] = useState({
    awards: "",
    description: "",
    image: null,
    date: "",
    institutionName: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAchievement({
      ...achievement,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setAchievement({
      ...achievement,
      image: e.target.files[0]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(achievement);
    // Add your form submission logic here
  };

  return (
    <div className="p-10 w-[1000px]">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Achievement</h2>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
        <div className="flex flex-col">
          <label htmlFor="awards" className="text-lg font-medium">Awards</label>
          <input
            type="text"
            id="awards"
            name="awards"
            value={achievement.awards}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
            placeholder="Enter awards"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="description" className="text-lg font-medium">Description</label>
          <textarea
            id="description"
            name="description"
            value={achievement.description}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded h-32"
            placeholder="Enter description"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="image" className="text-lg font-medium">Image</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleFileChange}
            className="p-2 border border-gray-300 rounded"
            accept="image/*"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="date" className="text-lg font-medium">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={achievement.date}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="institutionName" className="text-lg font-medium">Name of Institution</label>
          <input
            type="text"
            id="institutionName"
            name="institutionName"
            value={achievement.institutionName}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
            placeholder="Enter name of institution"
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="py-3 px-6 bg-aColor text-white text-lg font-bold rounded hover:bg-primary-dark transition-all duration-300"
          >
            Add Achievement
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAchievements;
