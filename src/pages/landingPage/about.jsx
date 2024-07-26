import { motion } from "framer-motion";
import { landingBg, teamImg } from "../../assets";

const About = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#2C3E50] text-white">
      <div className="absolute inset-0">
        <img
          src={landingBg}
          alt="About background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-8 py-16">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About <span className="text-secondary">Us</span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Learn more about our mission, vision, and the team that makes it all happen.
        </motion.p>
        <div className="flex flex-col md:flex-row gap-8">
          <motion.div
            className="flex-1 bg-white bg-opacity-20 p-8 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p>
              Our mission is to create a platform where professionals can showcase their work, skills, and projects in a visually stunning and interactive way.
            </p>
          </motion.div>
          <motion.div
            className="flex-1 bg-white bg-opacity-20 p-8 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p>
              We envision a world where everyone has the tools and opportunities to present their portfolios seamlessly, enhancing their professional presence.
            </p>
          </motion.div>
        </div>
        <motion.div
          className="mt-16 flex flex-col md:flex-row items-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="flex-1">
            <img
              src={teamImg}
              alt="Our Team"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">Our Team</h2>
            <p>
              Our team is comprised of dedicated professionals with a passion for innovation and excellence. Together, we strive to make Portfolio Hive the best platform for showcasing your work.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
