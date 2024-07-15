import React from "react";
import { useNavigate } from "react-router-dom";
import PagesLayout from "../layout/pagesLayout";
import K from "../../dashboard/components/constants";
import { motion } from "framer-motion";

const Contact = () => {
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., sending data to backend)
    alert("Message sent!"); // Temporary alert for demonstration
  };

  return (
    <PagesLayout
      headerText="Contact Information"
      buttonText="Add New Contact"
      onClick={() => navigate("/dashboard/contact/add-contact")}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {K.CONTACT.map(({ id, type, value, icon }) => (
            <motion.div
              key={id}
              className="p-4 bg-white rounded-lg shadow-md flex items-center space-x-4 hover:shadow-lg transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex-shrink-0">{icon}</div>
              <div>
                <p className="text-lg font-semibold">{type}</p>
                <a
                  href={value.startsWith("http") ? value : `https://${value}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {value}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="bg-gray-100 rounded-lg shadow-md p-6 mt-10">
          <h2 className="text-2xl font-bold mb-4">LET'S TALK</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="flex-1">
                <label htmlFor="name" className="block font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border border-gray-400 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 placeholder-gray-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="flex-1 mt-4 md:mt-0">
                <label htmlFor="email" className="block font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border border-gray-400 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 placeholder-gray-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block font-semibold">
                How can I help you?
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full border border-gray-400 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 placeholder-gray-500"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="bg-aColor text-white py-2 px-4 rounded-md hover:bg-secondary transition-colors duration-300"
              >
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </div>
    </PagesLayout>
  );
};

export default Contact;
