import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import landingBg from "../assets/images/landingBg.png";

const Landing = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center bg-[#2C3E50] text-white">
      <div className="absolute inset-0">
        <img
          src={landingBg}
          alt="Landing background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="relative z-10 flex flex-col md:flex-row items-center bg-[rgba(0,0,0,0.6)] p-8 rounded-lg">
        {/* Navigation Links */}
        <motion.div
          className="absolute top-4 left-1/2 transform -translate-x-1/2 flex gap-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Link
            to="/about"
            className="text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition-all duration-300"
          >
            About
          </Link>
          <Link
            to="#services"
            className="text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition-all duration-300"
          >
            Services
          </Link>
          <Link
            to="#contact"
            className="text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition-all duration-300"
          >
            Contact
          </Link>
        </motion.div>
        <motion.div
          className="md:w-1/2 flex items-center justify-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={landingBg}
            alt="Landing background"
            className="w-full h-full object-cover rounded-lg md:mr-8"
          />
        </motion.div>
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Welcome to Portfolio <span className="text-secondary">Hive</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Showcase your work, skills, and projects all in one place.
          </motion.p>
          <motion.div
            className="flex justify-center md:justify-start gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Link
              to="/signup"
              className="bg-secondary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition-all duration-300"
            >
              Get Started
            </Link>
            <Link
              to="/learnmore"
              className="border border-secondary text-white py-2 px-4 rounded-lg hover:bg-secondary hover:text-[#2C3E50] transition-all duration-300"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;
