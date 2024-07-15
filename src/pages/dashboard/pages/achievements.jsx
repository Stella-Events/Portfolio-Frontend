import React from "react";
import { useNavigate } from "react-router-dom";
import PagesLayout from "../layout/pagesLayout";
import K from "../../dashboard/components/constants";

const Achievements = () => {
  const navigate = useNavigate();

  return (
    <PagesLayout
      headerText="Achievements"
      buttonText="Add New Achievement"
      onClick={() => navigate("/dashboard/achievements/add-achievement")}
    >
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Achievements</h2>
        <div className="grid grid-cols-1 gap-6">
          {K.ACHIEVEMENTS.map((achievement) => (
            <div
              key={achievement.id}
              className="p-6 bg-white rounded-lg shadow-md flex flex-col gap-4"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold text-aColor">
                    {achievement.title}
                  </h3>
                  <p className="text-lg text-secondary">
                    {achievement.description}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="text-green-600 hover:text-green-800">
                    Edit
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    Delete
                  </button>
                </div>
              </div>
              <p className="text-sm text-gray-700">
                {achievement.description}
              </p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>{achievement.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PagesLayout>
  );
};

export default Achievements;
