import PagesLayout from "../layout/pagesLayout";
import K from "../../dashboard/components/constants";
import { Edit, Trash2Icon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Skills = () => {
  const navigate = useNavigate();

  return (
    <PagesLayout headerText="Skills" buttonText="Add New Skill" onClick={() => navigate("/dashboard/skills/add-skill")}>
      <div className="flex flex-col space-y-2">
        <div className="grid grid-cols-3 text-left font-bold text-xl border-b-2 pb-2">
          <span>Name</span>
          <span>Level of Proficiency</span>
          <span className="px-[100px]">Action</span>
        </div>
        {K.SKILLS.map(({ name, levelOfProficiency }, index) => (
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
              <button className="text-green-500 hover:text-green-700 transition-colors duration-200 ml-[100px]">
                <Edit size={20} />
              </button>
              <button className="text-red-500 hover:text-red-700 transition-colors duration-200">
                <Trash2Icon size={20} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </PagesLayout>
  );
};

export default Skills;
