import { useOutletContext } from "react-router-dom";
import SkillsCard from "../components/skillsCard"
import { motion } from "framer-motion";



const Skillss = () => {

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
      <div className="flex justify-center px-4 md:px-10">
        <div className="w-full max-w-screen-lg bg-black my-10 p-8 md:p-14 rounded-2xl shadow-2xl">
          {/* FIRST TWO LINES */}
          <div className="gap-y-12">
            <div className="flex flex-row items-center gap-x-5 pt-10" >
              <span className="font-bold text-1xl text-white pl-10 animate-pulse">S  K  I  L  L  S</span>
              <div className="h-0.5 w-32 bg-[#8e44ad]"></div>
            </div>
            <div className="pt-3 pl-10">
              <span className="text-white text-4xl font-bold flex flex-row gap-x-5">
                <p>{data.firstName}</p>
                <p >{data.lastName}</p>
                <p >{data.otherNames}</p>
              </span>
            </div>

            <div className="flex flex-col gap-y-5 mt-12 md:mt-16">
              <div className="flex justify-center">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                  {data.skills?.map((skills, index) => (
                     <motion.div
                     key={skills.id}
                     custom={index % 2 === 0 ? 5 : -5}
                     initial="hidden"
                     animate="visible"
                     variants={variants}
                   >
                    <SkillsCard
                      key={skills.id}
                      name={skills.name}
                      levelOfProficiency={skills.levelOfProficiency}
                       className="text-white font-bold text-xl md:text-2xl"
                    />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="text-black font-bold mt-4 animate-bounce text-end mr-4 md:mr-16 italic"> PoweredBy PortfolioHive</div>
    </div>
  )
}

export default Skillss