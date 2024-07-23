import { Link, NavLink } from "react-router-dom";
import { LogOut, Linkedin, Github, Facebook, Twitter, Youtube, Menu } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { apiLogout } from "../../../../src/services/auth";
import { useState } from "react";
import K from "./constants/index";

const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    tap: { scale: 0.95 }
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);

  const logout = async () => {
    try {
      await apiLogout();
      toast.success("Logged out successfully");
      navigate("/login");
    } catch (error) {
      toast.error("An error occured");
    }
  };

  return (
    <div className={`h-screen ${isCollapsed ? 'w-[60px]' : 'w-[200px]'} bg-bgColor flex flex-col px-2 py-5 shadow-md fixed overflow-y-auto`}>
      <div className="flex justify-between items-center px-4">
        <span className={`text-secondary text-2xl font-bold ${isCollapsed ? 'hidden' : 'block'}`}>
          Portfolio <span className="text-accent">Hive</span>
        </span>
        <button onClick={toggleCollapse}>
          <Menu className="text-primary" />
        </button>
      </div>
      <motion.div
        className="flex flex-col text-primary gap-y-[12px] text-l font-bold py-3"
        initial="hidden"
        animate="visible"
        variants={{ hidden: { transition: { staggerChildren: 0.2 } }, visible: { transition: { staggerChildren: 0.2 } } }}
      >
        {K.NAVLINKS.map(({ icon, text, link }, index) => (
          <NavLink
            to={link}
            key={index}
            className={({ isActive }) =>
              `flex items-center p-2 ${
                isActive ? "text-primary bg-accent" : "text-[#BDC3C7]"
              } hover:text-white transition-colors duration-300 rounded-lg`
            }
            end
          >
            {({ isActive }) => (
              <motion.div
                className="flex items-center gap-x-4"
                variants={linkVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <span className={`p-2 rounded-full ${isActive ? 'bg-white text-accent' : 'bg-transparent text-white'} transition-colors duration-300`}>
                  {icon}
                </span>
                {!isCollapsed && <span>{text}</span>}
              </motion.div>
            )}
          </NavLink>
        ))}
      </motion.div>
      <div className="mt-auto">
      </div>
      <div>
      </div>
      <footer>
        <div className="container mx-auto flex flex-col items-center">
          <div className="flex gap-4 mb-2">
            <Link to="https://www.linkedin.com" target="_blank" className="rounded">
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-white transition-colors duration-300" />
            </Link>
            <Link to="https://www.github.com" target="_blank" className="rounded">
              <Github className="w-5 h-5 text-gray-400 hover:text-white transition-colors duration-300" />
            </Link>
            <Link to="https://www.facebook.com" target="_blank" className="rounded">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white transition-colors duration-300" />
            </Link>
            <Link to="https://www.twitter.com" target="_blank" className="rounded">
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white transition-colors duration-300" />
            </Link>
            <Link to="https://www.youtube.com" target="_blank" className="rounded">
              <Youtube className="w-5 h-5 text-gray-400 hover:text-white transition-colors duration-300" />
            </Link>
          </div>
          {!isCollapsed && (
            <div>
              <p className="text-[12px] text-center">
                2024 © Stella-Themes. All Rights Reserved.
              </p>
            </div>
          )}
        </div>
      </footer>
    </div>
  );
};
};
export default SideBar;
