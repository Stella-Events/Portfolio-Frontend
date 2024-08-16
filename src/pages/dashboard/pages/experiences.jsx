import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Edit, Trash2 } from "lucide-react";
import PagesLayout from "../layout/pagesLayout";
import { apiDeleteExperience, apiGetExperiences } from "../../../services/experiences";
import Pagelaoder from "../../../components/pagelaoder";
import Loader from "../../../components/loader";
import { toast } from "react-toastify";

const Experiences = () => {
  const navigate = useNavigate();
  const [experiences, setExperiences] = useState([]); // Initialize as an empty array
  const [isLoading, setIsLoading] = useState(false);
  const [isDeletingItems, setDeletingItems] = useState({});

  const fetchExperiences = async () => {
    setIsLoading(true);
    try {
      const res = await apiGetExperiences();
      const experiencesData = res.data.experiences || []; // Ensure the data is an array
      setExperiences(experiencesData);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setDeletingItems((prev) => ({ ...prev, [id]: true }));
    try {
      const res = await apiDeleteExperience(id);
      toast.success(res.data.message);
      setExperiences((prevExperiences) =>
        prevExperiences.filter((experience) => experience.id !== id)
      );
    } catch (error) {
      console.log(error);
      toast.error("An error occurred");
    } finally {
      setDeletingItems((prev) => ({ ...prev, [id]: false }));
    }
  };

  useEffect(() => {
    fetchExperiences();
  }, []);

  return (
    <PagesLayout
      headerText="Experiences"
      buttonText="Add New Experience"
      onClick={() => navigate("/dashboard/experiences/add-experience")}
    >
      {isLoading ? (
        <Pagelaoder />
      ) : (
        <div>
          {Array.isArray(experiences) && experiences.length === 0 ? (
            <p>No experience added yet</p>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {experiences.map(({ id, jobTitle, company, description, startDate, endDate }, index) => (
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
                      <h3 className="text-xl font-semibold text-aColor">{jobTitle}</h3>
                      <p className="text-lg text-secondary">{company}</p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => navigate(`/dashboard/experiences/edit-experience/${id}`)}
                        className="text-green-600 hover:text-green-800 transition-colors duration-200"
                      >
                        <Edit size={20} />
                      </button>
                      <button
                        onClick={() => handleDelete(id)}
                        className="text-red-500 hover:text-red-700 transition-colors duration-200"
                      >
                        {isDeletingItems[id] ? <Loader /> : <Trash2 size={20} />}
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">{description}</p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{startDate}</span>
                    <span>{endDate}</span>
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

export default Experiences;
