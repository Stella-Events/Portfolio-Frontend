import React from "react";
import { useNavigate } from "react-router-dom";
import PagesLayout from "../layout/pagesLayout";
import K from "../../dashboard/components/constants";
import { Delete, Edit, Edit3, Trash, Trash2 } from "lucide-react";

const Volunteering = () => {
  const navigate = useNavigate();

  return (
    <PagesLayout
      headerText="Volunteering"
      buttonText="Add Volunteering Activity"
      onClick={() => navigate("/dashboard/volunteering/add-volunteering")}
    >
      <div className="space-y-4">
        {K.VOLUNTEERING.map((activity, index) => (
          <div
            key={index}
            className="p-4 border border-gray-300 rounded-lg shadow-md bg-white"
          >
            <h3 className="text-xl font-bold text-secondary">
              {activity.projectName}
            </h3>
            <p className="text-lg font-semibold">
              {activity.organization} - {activity.role}
            </p>
            <p>{activity.description}</p>
            <p>
              <strong>Skills:</strong> {activity.skills.join(", ")}
            </p>
            <p>
              <strong>Responsibility:</strong> {activity.responsibility}
            </p>
            <p>
              <strong>Location:</strong> {activity.location}
            </p>
            <p>
              <strong>Duration:</strong> {activity.startDate} to{" "}
              {activity.endDate}
            </p>
            <div className="flex gap-3 mt-1 ml-[600px]">
                  <button className="text-green-600 hover:text-green-800">
                    <Edit3 />
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    <Trash2 />
                  </button>
                </div>
          </div>
        ))}
      </div>
    </PagesLayout>
  );
};

export default Volunteering;
