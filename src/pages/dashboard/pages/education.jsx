import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Edit, Trash2 } from "lucide-react";
import PagesLayout from "../layout/pagesLayout";
import { apiDeleteEducation, apiGetEducation } from "../../../services/education";
import Pagelaoder from "../../../components/pagelaoder";
import Loader from "../../../components/loader";
import { toast } from "react-toastify";

const Education = () => {
  const navigate = useNavigate();
  const [education, setEducation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeletingItems, setDeletingItems] = useState({});

  const fetchEducation = async () => {
    setIsLoading(true);
    try {
      const res = await apiGetEducation();
      setEducation(res.data.education);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setDeletingItems((prev) => ({ ...prev, [id]: true }));
    try {
      const res = await apiDeleteEducation(id);
      toast.success(res.data.message);
      setEducation(education.filter((edu) => edu.id !== id));
    } catch (error) {
      console.log(error);
      toast.error("An error occurred");
    } finally {
      setDeletingItems((prev) => ({ ...prev, [id]: false }));
    }
  };

  useEffect(() => {
    fetchEducation();
  }, []);

  return (
    <PagesLayout
      headerText="Education"
      buttonText="Add New Education"
      onClick={() => navigate("/dashboard/education/add-education")}
    >
      {isLoading ? (
        <Pagelaoder />
      ) : (
        <div>
          {education.length === 0 ? (
            <p>No education added yet</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  className="p-6 bg-white rounded-lg shadow-md flex flex-col gap-4"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-semibold">{edu.schoolName}</h3>
                      <p className="mt-2"><strong>Program:</strong> {edu.program}</p>
                      <p className="mt-2"><strong>Qualification:</strong> {edu.qualification}</p>
                      <p className="mt-2"><strong>Grade:</strong> {edu.grade}</p>
                      <p className="mt-2"><strong>Location:</strong> {edu.location}</p>
                      <p className="mt-2"><strong>Start Date:</strong> {new Date(edu.startDate).toLocaleDateString()}</p>
                      <p className="mt-2"><strong>End Date:</strong> {new Date(edu.endDate).toLocaleDateString()}</p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => navigate(`/dashboard/education/edit-education/${edu.id}`)}
                        className="text-green-600 hover:text-green-800 transition-colors duration-200"
                      >
                        <Edit size={20} />
                      </button>
                      <button
                        onClick={() => handleDelete(edu.id)}
                        className="text-red-500 hover:text-red-700 transition-colors duration-200"
                      >
                        {isDeletingItems[edu.id] ? <Loader /> : <Trash2 size={20} />}
                      </button>
                    </div>
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

export default Education;
