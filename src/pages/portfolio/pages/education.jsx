import React from 'react'
import EduCard from '../components/eduCard'
import { useOutletContext } from 'react-router-dom';
import { motion } from "framer-motion";

const Education = () => {

  const data = useOutletContext();
  console.log("🚀 ~ PortfolioProfile ~ data:", data);

  const variants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction > 0 ? 100 : -100,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
      },
    },
  };

  return (
    <div className="bg-white w-full h-[1080px] bg-cover bg-no-repeat bg-fixed">
      <div className="flex justify-center">
        <div className="h-[930px] w-[1050px] bg-black mr-10 ml-10 mt-20 rounded-2xl shadow-2xl">
          {/* FIRST TWO HEADER LINES */}
          <div className="gap-y-12">
            <div className="flex flex-row items-center gap-x-5 pt-10" >
              <span className="font-bold text-1xl text-white pl-10 animate-pulse">E D U C A T I O N</span>
              <div className="h-0.5 w-32 bg-[#8e44ad]"></div>
            </div>
            <div className="pt-3 pl-10">
              <span className="text-white text-4xl font-bold">MY EDUCATION TIMELINE</span>
            </div>
          </div>

          {/* EDUCATION */}

          <div className="flex flex-col items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 p-5">

              {data.education?.map((education, index) => (

                <motion.div
                  key={education.id}
                  custom={index % 2 === 0 ? 5 : -5}
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                >

                  <EduCard
                    key={education.id}
                    schoolName={education.schoolName}
                    program={education.program}
                    qualification={education.qualification}
                    grade={education.grade}
                    location={education.location}
                    startDate={education.startDate}
                    endDate={education.enDate}
                  />
                </motion.div>
              ))
              }

            </div>

          </div>

        </div>
      </div>
      <div className="text-black font-bold mt-4 animate-bounce text-end mr-16 italic"> PoweredBy PortfolioHive</div>
    </div>
  )
}

export default Education