import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import aboutBg from "../../../assets/images/aboutBg.jpg"

const LearnMore = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-[#2C3E50] text-white">
      <div className="absolute inset-0">
        <img
          src={aboutBg}
          alt="About background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="relative z-10 text-center bg-[rgba(0,0,0,0.6)] p-8 rounded-lg max-w-3xl mx-auto">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Learn More About Portfolio Hive
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Portfolio Hive is your one-stop solution for showcasing your projects, skills, and professional achievements. Whether you are a developer, designer, or creative professional, our platform provides you with the tools to create a stunning portfolio.
        </motion.p>
        <motion.div
          className="text-left mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <h2 className="text-2xl font-semibold mb-2">Key Features:</h2>
          <ul className="list-disc list-inside">
            <li className="mb-2">Easy to use portfolio builder with customizable templates</li>
            <li className="mb-2">Showcase your projects with detailed descriptions and images</li>
            <li className="mb-2">Highlight your skills and professional experiences</li>
            <li className="mb-2">Connect your social media and professional profiles</li>
            <li className="mb-2">Downloadable resumes and contact information</li>
          </ul>
        </motion.div>
        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <Link
            to="/signup"
            className="bg-secondary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition-all duration-300"
          >
            Get Started
          </Link>
          <Link
            to="/"
            className="border border-secondary text-white py-2 px-4 rounded-lg hover:bg-secondary hover:text-[#2C3E50] transition-all duration-300"
          >
            Back to Home
        
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default LearnMore;
