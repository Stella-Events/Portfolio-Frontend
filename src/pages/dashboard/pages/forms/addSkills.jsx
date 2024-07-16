import { useState } from "react";

const AddSkills = () => {
  const [skill, setSkill] = useState({
    name: "",
    proficiency: "beginner"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSkill({
      ...skill,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(skill);
    // Add your form submission logic here
  };

  return (
    <div className="p-[100px] w-[500px]">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Skill</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-lg font-medium">Skill Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={skill.name}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
            placeholder="Enter skill name"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="proficiency" className="text-lg font-medium">Level of Proficiency</label>
          <select
            id="proficiency"
            name="proficiency"
            value={skill.proficiency}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
            required
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
            <option value="expert">Expert</option>
          </select>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="py-3 px-6 bg-aColor text-white text-lg font-bold rounded hover:bg-primary-dark transition-all duration-300"
          >
            Add Skill
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddSkills;
