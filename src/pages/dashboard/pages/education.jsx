import { useNavigate } from "react-router-dom";
import PagesLayout from "../layout/pagesLayout";
import K from "../../dashboard/components/constants";


const Education = () => {
  const navigate = useNavigate();

  return (
    <PagesLayout headerText="Education" buttonText="Add New Education" onClick={() => navigate("/dashboard/education/add-education")}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {K.EDUCATION.map((edu, index) => (
          <div key={index} className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold">{edu.schoolName}</h3>
            <p className="mt-2"><strong>Program:</strong> {edu.program}</p>
            <p className="mt-2"><strong>Qualification:</strong> {edu.qualification}</p>
            <p className="mt-2"><strong>Grade:</strong> {edu.grade}</p>
            <p className="mt-2"><strong>Location:</strong> {edu.location}</p>
            <p className="mt-2"><strong>Start Date:</strong> {new Date(edu.startDate).toLocaleDateString()}</p>
            <p className="mt-2"><strong>End Date:</strong> {new Date(edu.endDate).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </PagesLayout>
  );
};

export default Education;
