import { Link } from "react-router-dom";
import { LogOut } from "lucide-react";
import { motion } from "framer-motion";
import K from "./constants/index";
import { Linkedin, Github, Facebook, Twitter, Youtube } from "lucide-react";


const SideBar = () => {
  return (
    <div className="h-screen w-[300px] bg-aColor flex flex-col px-8 py-5 shadow-md fixed">
      <div>
        <span className="text-white text-2xl font-bold text-center">
        Portfolio <span className="text-secondary">Hive</span>
        </span>
      </div>
      <div className="flex flex-col text-[#BDC3C7] gap-y-[12px] text-l font-bold py-3 ">
        {K.NAVLINKS.map(({ icon, text, link }, index) => (
          <Link
            to={link}
            key={index}
            className="group relative flex items-center gap-x-4 text-white hover:text-white transition-all duration-300"
          >
            <motion.div
              className="bg-secondary p-1 rounded-full flex items-center justify-center w-8 h-8 group-hover:bg-white transition-all duration-500 "
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
      <div>
        
      </div>
      <div className="mt-7">
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
      <footer className=" text-tColor py-4 px-2 ">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex gap-y-4 gap-x-2 mb-2 mr-[90px]">
          <Link to="https://www.linkedin.com" target="_blank" className="bg-gray-200 rounded">
            <Linkedin className="w-5 h-5 hover:text-gray-400" />
          </Link>
          <Link to="https://www.github.com" target="_blank" className="bg-gray-200 rounded">
            <Github className="w-5 h-5 hover:text-gray-400" />
          </Link>
          <Link to="https://www.facebook.com" target="_blank" className="bg-gray-200 rounded">
            <Facebook className="w-5 h-5 hover:text-gray-400" />
          </Link>
          <Link to="https://www.twitter.com" target="_blank" className="bg-gray-200 rounded">
            <Twitter className="w-5 h-5 hover:text-gray-400" />
          </Link>
          <Link to="https://www.youtube.com" target="_blank" className="bg-gray-200 rounded">
            <Youtube className="w-5 h-5 hover:text-gray-400" />
          </Link>
        </div>
        <div className=" mr-[70px]">
        <p className="text-[12px]">
          2024 © Stella-Themes. All Rights Reserved.
        </p>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default SideBar;
