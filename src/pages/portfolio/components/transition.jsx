import { motion } from "framer-motion";

const PageTransition = ({ children }) => (
  <motion.div
    key={location.pathname} // Ensure a unique key for each route
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

export default PageTransition;
