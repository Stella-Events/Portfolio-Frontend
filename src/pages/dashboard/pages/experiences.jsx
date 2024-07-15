import { useNavigate } from "react-router-dom";
import PagesLayout from "../layout/pagesLayout";
import K from "../../dashboard/components/constants";
import { Edit, Trash2 } from "lucide-react";

const Experiences = () => {
  const navigate = useNavigate();

  return (
    <PagesLayout headerText="Experiences" buttonText="Add New Experience" onClick={() => navigate("/dashboard/experiences/add-experience")}>
      <div className="grid grid-cols-1 gap-6">
        {K.EXPERIENCES.map(({ jobTitle, company, description, startDate, endDate }, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-md flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold text-aColor">{jobTitle}</h3>
                <p className="text-lg text-secondary">{company}</p>
              </div>
              <div className="flex gap-2">
                <button className="text-green-600 hover:text-green-800">
                  <Edit size={20} />
                </button>
                <button className="text-red-600 hover:text-red-800">
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
            <p className="text-sm text-gray-700">{description}</p>
            <div className="flex justify-between text-sm text-gray-500">
              <span>{startDate}</span>
              <span>{endDate}</span>
            </div>
          </div>
        ))}
      </div>
    </PagesLayout>
  );
};

export default Experiences;
