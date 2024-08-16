import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PagesLayout from "../layout/pagesLayout";
import { apiGetAllVolunteering, apiDeleteVolunteering } from "../../../services/volunteering";
import Pageloader from "../../../components/pagelaoder";
import Loader from "../../../components/loader";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { Edit3, Trash2 } from "lucide-react";

const Volunteering = () => {
  const navigate = useNavigate();
  const [volunteeringActivities, setVolunteeringActivities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeletingItems, setDeletingItems] = useState({});

  const fetchAllVolunteeringActivities = async () => {
    setIsLoading(true);
    try {
      const res = await apiGetAllVolunteering();
      setVolunteeringActivities(res.data.volunteerings); // Adjust based on your actual API response
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch volunteering activities");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setDeletingItems((prev) => ({ ...prev, [id]: true }));
    try {
      const res = await apiDeleteVolunteering(id);
      toast.success(res.data.message);
      setVolunteeringActivities((prevActivities) => prevActivities.filter((activity) => activity.id !== id));
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while deleting");
    } finally {
      setDeletingItems((prev) => ({ ...prev, [id]: false }));
    }
  };

  useEffect(() => {
    fetchAllVolunteeringActivities();
  }, []);

  return (
    <PagesLayout
      headerText="Volunteering"
      buttonText="Add Volunteering Activity"
      onClick={() => navigate("/dashboard/volunteering/add-volunteering")}
    >
      {isLoading ? (
        <Pageloader />
      ) : (
        <div className="space-y-4">
          {volunteeringActivities.length === 0 ? (
            <p>No volunteering activities added yet</p>
          ) : (
            volunteeringActivities.map((activity, index) => (
              <motion.div
                key={activity.id}
                className="p-4 border border-gray-300 rounded-lg shadow-md bg-white"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-secondary">
                  {activity.projectName}
                </h3>
                <p className="text-lg font-semibold">
                  {activity.organization} - {activity.role}
                </p>
                <p>{activity.description}</p>
                <p>
                  <strong>Skills:</strong> {Array.isArray(activity.skills) ? activity.skills.join(", ") : "No skills listed"}
                </p>
                <p>
                  <strong>Responsibility:</strong> {activity.responsibility}
                </p>
                <p>
                  <strong>Location:</strong> {activity.location}
                </p>
                <p>
                  <strong>Duration:</strong> {activity.startDate} to {activity.endDate}
                </p>
                <div className="flex gap-3 mt-2">
                  <button
                    onClick={() => navigate(`/dashboard/volunteering/edit-volunteering/${activity.id}`)}
                    className="text-green-600 hover:text-green-800"
                  >
                    <Edit3 />
                  </button>
                  <button
                    onClick={() => handleDelete(activity.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    {isDeletingItems[activity.id] ? <Loader /> : <Trash2 />}
                  </button>
                </div>
              </motion.div>
            ))
          )}
        </div>
      )}
    </PagesLayout>
  );
};

export default Volunteering;
