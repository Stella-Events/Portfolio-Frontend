import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { homeBg } from "../../../assets";

const roles = ["Data Analyst", "Frontend Developer", "Backend Developer"];

const Home = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
    }, 2000); // Change role every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full flex items-center justify-center bg-[#2C3E50] text-white">
      <div className="absolute inset-0">
        <img
          src={homeBg}
          alt="Dashboard home background image"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="relative z-10 text-center bg-[rgba(0,0,0,0.5)] p-8 rounded-lg">
        <span className="text-[62px] font-bold">
          CHRISTIAN <span className="text-secondary">GREY</span>
        </span>
        <p className="mt-4 text-[28px]">
          <span className="mr-2">I am a</span>
          <AnimatePresence mode="wait">
            <motion.span
              key={currentRole}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="inline-block font-bold text-secondary"
            >
              {roles[currentRole]}
            </motion.span>
          </AnimatePresence>
        </p>
      </div>
    </div>
  );
};

export default Home;
