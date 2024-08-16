import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PagesLayout from "../layout/pagesLayout";
import { motion } from "framer-motion";
import { apiGetAchievements, apiDeleteAchievement } from "../../../services/achievements"; 
import Pageloader from "../../../components/pagelaoder";
import Loader from "../../../components/loader";
import { toast } from "react-toastify";
import { Edit, Trash2Icon } from "lucide-react";

const Achievements = () => {
  const navigate = useNavigate();
  const [achievements, setAchievements] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeletingItems, setDeletingItems] = useState({});

  const fetchAchievements = async () => {
    setIsLoading(true);
    try {
      const res = await apiGetAchievements();
      setAchievements(res.data.achievements);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch achievements");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setDeletingItems((prev) => ({ ...prev, [id]: true }));
    try {
      const res = await apiDeleteAchievement(id);
      toast.success(res.data.message);
      setAchievements(achievements.filter((achievement) => achievement.id !== id));
    } catch (error) {
      console.error(error);
      toast.error("An error occurred");
    } finally {
      setDeletingItems((prev) => ({ ...prev, [id]: false }));
    }
  };

  useEffect(() => {
    fetchAchievements();
  }, []);

  return (
    <PagesLayout
      headerText="Achievements"
      buttonText="Add New Achievement"
      onClick={() => navigate("/dashboard/achievements/add-achievement")}
    >
      {isLoading ? (
        <Pageloader />
      ) : (
        <div className="container mx-auto px-4 py-8">
          {achievements.length === 0 ? (
            <p>No achievements added yet</p>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {achievements.map(({ id, title, description, year }, index) => (
                <motion.div
                  key={id}
                  className="p-6 bg-white rounded-lg shadow-md flex flex-col gap-4"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-semibold text-aColor">{title}</h3>
                      <p className="text-lg text-secondary">{description}</p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => navigate(`/dashboard/achievements/edit-achievement/${id}`)}
                        className="text-green-600 hover:text-green-800 transition-colors duration-200"
                      >
                        <Edit size={20} />
                      </button>
                      <button
                        onClick={() => handleDelete(id)}
                        className="text-red-600 hover:text-red-800 transition-colors duration-200"
                      >
                        {isDeletingItems[id] ? <Loader /> : <Trash2Icon size={20} />}
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">{description}</p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{year}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      )}
    </PagesLayout>
  );
};

export default Achievements;
