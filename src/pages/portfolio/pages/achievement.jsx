import AwardsCard from "../components/awardsCard"
import { useOutletContext } from "react-router-dom";
import { motion } from "framer-motion";


const Achievement = () => {

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
    <div className="bg-white w-full min-h-screen bg-cover bg-no-repeat bg-fixed">
      <div className="flex justify-center px-4 lg:px-10">
        <div className="bg-black w-full max-w-[1050px] lg:h-[950px] mt-10 lg:mt-20 rounded-2xl shadow-2xl">
          {/* FIRST TWO LINES */}
          <div className="gap-y-12">
            <div className="flex flex-row items-center gap-x-5 pt-10" >
              <span className="font-bold text-1xl text-white pl-10 animate-pulse">A C H I E V E M E N T S</span>
              <div className="h-0.5 w-16 lg:w-32 bg-[#8e44ad]"></div>
            </div>

            <div className="pt-3 pl-10">
              <span className="text-white text-2xl lg:text-4xl font-bold flex flex-row gap-x-2 lg:gap-x-5">
                <p>{data.firstName}</p>
                <p >{data.lastName}</p>
                <p >{data.otherNames}</p>
              </span>
            </div>
          </div>

          {/* AWARDS CARDS*/}
          <div className="flex flex-col items-center">
            {/* TOP-ROW */}
            <div className="flex flex-wrap justify-center gap-5 p-5">
              {data.achievements?.map((achievements, index) => (
                <motion.div
                key={achievements.id}
                custom={index % 2 === 0 ? 5 : -5}
                initial="hidden"
                animate="visible"
                variants={variants}
              >
                <AwardsCard
                  key={achievements.id}
                  image={`https://savefiles.org/${achievements.image}?shareable_link=327`} 
                  awards={achievements.awards}
                  description={achievements.description}
                  date={achievements.date}
                  nameOfInstitution={achievements.nameOfInstitution} 
                  />
                   </motion.div>
              ))
              }
            </div>
          </div>
        </div>
      </div>
      <div className="text-black font-bold mt-4 animate-bounce text-end mr-4 lg:mr-16 italic"> PoweredBy PortfolioHive</div>
    </div>
  )
}

export default Achievement