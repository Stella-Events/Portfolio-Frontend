import PagesLayout from "../layout/pagesLayout";
import K from "../../dashboard/components/constants";
import { Edit, Trash2Icon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { apiDeleteSkill, apiGetSkills } from "../../../services/skills";
import Pagelaoder from "../../../components/pagelaoder";
import { toast } from "react-toastify";
import Loader from "../../../components/loader";

const Skills = () => {
  const navigate = useNavigate();
  const [skills, setSkills] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeletingItems, setDeletingItems] = useState({});

  const fetchSkills = async () => {
    setIsLoading(true);
    try {
      const res = await apiGetSkills();
      console.log(res.data);
      setSkills(res.data.skills);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setDeletingItems((prev) => ({ ...prev, [id]: true }));
    try {
      const res = await apiDeleteSkill(id);
      console.log(res.data);
      toast.success(res.data.message);
      setSkills(skills.filter((skill) => skill.id !== id));
    } catch (error) {
      console.log(error);
      toast.error("An error occurred");
    } finally {
      setDeletingItems((prev) => ({ ...prev, [id]: false }));
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  return (
    <PagesLayout headerText="Skills" buttonText="Add New Skill" onClick={() => navigate("/dashboard/skills/add-skill")}>
      {isLoading ? (
        <Pagelaoder />
      ) : (
        <div>
          {skills.length === 0 ? (
            <p>No skill added yet</p>
          ) : (
            <div className="flex flex-col space-y-2">
              <div className="grid grid-cols-3 text-left font-bold text-xl border-b-2 pb-2">
                <span>Name</span>
                <span>Level of Proficiency</span>
                <span className="px-[100px]">Action</span>
              </div>
              {skills.map(({ name, levelOfProficiency, id }, index) => (
                <motion.div
                  key={index}
                  className="grid grid-cols-3 items-center text-lg p-2 border-b"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <span>{name}</span>
                  <span>{levelOfProficiency}</span>
                  <div className="flex gap-x-4">
                    <button
                      onClick={() => navigate(`/dashboard/skills/edit-skill/${id}`)}
                      className="text-green-500 hover:text-green-700 transition-colors duration-200 ml-[100px]"
                    >
                      <Edit size={20} />
                    </button>
                    <button
                      onClick={() => handleDelete(id)}
                      className="text-red-500 hover:text-red-700 transition-colors duration-200"
                    >
                      {isDeletingItems[id] ? <Loader /> : <Trash2Icon size={20} />}
                    </button>
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

export default Skills;
