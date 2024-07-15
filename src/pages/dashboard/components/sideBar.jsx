import { Link } from "react-router-dom";
import { LogOut } from "lucide-react";
import { motion } from "framer-motion";
import K from "./constants/index";

const SideBar = () => {
  return (
    <div className="h-screen w-[300px] bg-[#2C3E50] flex flex-col px-8 py-5 shadow-md ">
      <div>
        <span className="text-white text-2xl font-bold text-center">
        Portfolio <span className="text-secondary">Hive</span>
        </span>
      </div>
      <div className="flex flex-col text-[#BDC3C7] gap-y-[20px] text-l font-bold py-6 ">
        {K.NAVLINKS.map(({ icon, text, link }, index) => (
          <Link
            to={link}
            key={index}
            className="group relative flex items-center gap-x-4 text-white hover:text-white transition-all duration-300"
          >
            <motion.div
              className="bg-secondary p-2 rounded-full flex items-center justify-center w-9 h-9 group-hover:bg-white transition-all duration-500"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-white group-hover:text-[#2C3E50] text-xl ">
                {icon}
              </span>
            </motion.div>
            <motion.span
              className="absolute left-14 bg-secondary text-white py-1 px-2 rounded opacity-0 group-hover:opacity-100 group-hover:bg-white group-hover:text-[#2C3E50] transition-opacity duration-300"
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {text}
            </motion.span>
          </Link>
        ))}
      </div>
      <div className="mt-auto">
        <motion.button
          className="group flex items-center gap-x-4 text-[#BDC3C7] hover:text-white transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="bg-red-500 p-2 rounded-full flex items-center justify-center w-8 h-8 group-hover:bg-white transition-all duration-500"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <LogOut className="text-white group-hover:text-[#2C3E50]" />
          </motion.div>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Sign Out
          </span>
        </motion.button>
      </div>
    </div>
  );
};

export default SideBar;
