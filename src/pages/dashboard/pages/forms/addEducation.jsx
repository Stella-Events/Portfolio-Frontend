import { useState } from "react";

const AddEducation = () => {
  const [education, setEducation] = useState({
    schoolName: "",
    program: "",
    qualification: "",
    grade: "",
    location: "",
    startDate: "",
    endDate: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation({
      ...education,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(education);
    // Add your form submission logic here
  };

  return (
    <div className="p-10 w-[1000px]">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Education</h2>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
        <div className="flex flex-col">
          <label htmlFor="schoolName" className="text-lg font-medium">School Name</label>
          <input
            type="text"
            id="schoolName"
            name="schoolName"
            value={education.schoolName}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
            placeholder="Enter school name"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="program" className="text-lg font-medium">Program</label>
          <input
            type="text"
            id="program"
            name="program"
            value={education.program}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
            placeholder="Enter program"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="qualification" className="text-lg font-medium">Qualification</label>
          <input
            type="text"
            id="qualification"
            name="qualification"
            value={education.qualification}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
            placeholder="Enter qualification"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="grade" className="text-lg font-medium">Grade</label>
          <input
            type="text"
            id="grade"
            name="grade"
            value={education.grade}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
            placeholder="Enter grade"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="location" className="text-lg font-medium">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={education.location}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
            placeholder="Enter location"
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
              value={education.startDate}
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
              value={education.endDate}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="py-3 px-6 bg-aColor text-white text-lg font-bold rounded hover:bg-primary-dark transition-all duration-300"
          >
            Add Education
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEducation;
