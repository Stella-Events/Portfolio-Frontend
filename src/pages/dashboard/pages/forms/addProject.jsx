import { useState } from "react";

const AddProject = () => {
  const [project, setProject] = useState({
    projectName: "",
    description: "",
    contributors: "",
    skills: "",
    links: "",
    nameOfInstitution: "",
    image: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject({
      ...project,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProject({
      ...project,
      image: file
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(project);
    // Add your form submission logic here
  };

  return (
    <div className="px-[100px] w-[800px]">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Project</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col">
          <label htmlFor="projectName" className="text-lg font-medium">Project Name</label>
          <input
            type="text"
            id="projectName"
            name="projectName"
            value={project.projectName}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
            placeholder="Enter project name"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="description" className="text-lg font-medium">Description</label>
          <textarea
            id="description"
            name="description"
            value={project.description}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded h-32"
            placeholder="Enter description"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="contributors" className="text-lg font-medium">Contributors</label>
          <input
            type="text"
            id="contributors"
            name="contributors"
            value={project.contributors}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
            placeholder="Enter contributors"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="skills" className="text-lg font-medium">Skills</label>
          <input
            type="text"
            id="skills"
            name="skills"
            value={project.skills}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
            placeholder="Enter skills"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="links" className="text-lg font-medium">Links</label>
          <input
            type="text"
            id="links"
            name="links"
            value={project.links}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
            placeholder="Enter links"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="nameOfInstitution" className="text-lg font-medium">Name of Institution</label>
          <input
            type="text"
            id="nameOfInstitution"
            name="nameOfInstitution"
            value={project.nameOfInstitution}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
            placeholder="Enter name of institution"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="image" className="text-lg font-medium">Upload Image</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="py-3 px-6 bg-aColor text-white text-lg font-bold rounded hover:bg-primary-dark transition-all duration-300"
          >
            Add Project
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProject;
