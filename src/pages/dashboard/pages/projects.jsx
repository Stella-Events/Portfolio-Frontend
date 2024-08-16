import React, { useEffect, useState } from "react";
import PagesLayout from "../layout/pagesLayout";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { apiGetAllProjects, apiDeleteProject } from "../../../services/projects";
import Pageloader from "../../../components/pagelaoder";
import Loader from "../../../components/loader";
import { toast } from "react-toastify";
import { Edit, Trash2Icon } from "lucide-react";

const Projects = () => {
  const navigate = useNavigate();
  const [allProjects, setAllProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeletingItems, setDeletingItems] = useState({});

  const fetchAllProjects = async () => {
    setIsLoading(true);
    try {
      const res = await apiGetAllProjects();
      setAllProjects(res.data.projects);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch projects");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setDeletingItems((prev) => ({ ...prev, [id]: true }));
    try {
      const res = await apiDeleteProject(id);
      toast.success(res.data.message);
      setAllProjects((prevProjects) => prevProjects.filter((project) => project.id !== id));
    } catch (error) {
      console.error(error);
      toast.error("An error occurred");
    } finally {
      setDeletingItems((prev) => ({ ...prev, [id]: false }));
    }
  };

  useEffect(() => {
    fetchAllProjects();
  }, []);

  return (
    <PagesLayout
      headerText="Projects"
      buttonText="Add New Project"
      onClick={() => navigate("/dashboard/projects/add-project")}
    >
      {isLoading ? (
        <Pageloader />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {allProjects.length === 0 ? (
            <p>No projects added yet</p>
          ) : (
            allProjects.map(
              ({
                id,
                projectName,
                description,
                contributors = [],
                skills = [],
                links = {},
                nameOfInstitution,
                imageUrl,
              }, index) => (
                <motion.div
                  key={id}
                  className="bg-white shadow-md rounded-lg overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <img
                    src={imageUrl}
                    alt={projectName}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-6 flex flex-col justify-between">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-xl font-semibold">{projectName}</h2>
                      <div className="flex gap-2">
                        <button
                          onClick={() => navigate(`/dashboard/projects/edit-project/${id}`)}
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
                    <p className="text-sm text-gray-600 mb-4">{description}</p>
                    <p className="text-sm text-gray-600 mb-4">
                      <span className="font-semibold">Contributors:</span>{" "}
                      {Array.isArray(contributors) ? contributors.join(", ") : "No contributors listed"}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {Array.isArray(skills) ? (
                        skills.map((skill, index) => (
                          <span
                            key={index}
                            className="bg-gray-200 text-gray-800 text-xs font-medium px-2 py-1 rounded"
                          >
                            {skill}
                          </span>
                        ))
                      ) : (
                        <p>No skills listed</p>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      <span className="font-semibold">Institution:</span>{" "}
                      {nameOfInstitution}
                    </p>
                    {links.github ? (
                      <Link
                        to={links.github}
                        target="_blank"
                        className="text-secondary hover:text-secondary-dark transition-all duration-300"
                      >
                        View on GitHub
                      </Link>
                    ) : (
                      <p>No GitHub link provided</p>
                    )}
                  </div>
                </motion.div>
              )
            )
          )}
        </div>
      )}
    </PagesLayout>
  );
};

export default Projects;
