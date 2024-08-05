import { useOutletContext } from "react-router-dom";
import SkillsCard from "../components/skillsCard"
import { motion } from "framer-motion";



const Skillss = () => {

  const data = useOutletContext();
  console.log("🚀 ~ PortfolioProfile ~ data:", data);

  const variants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction > 0 ? 100 : -100, // Slide from left or right
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
        <div className="h-[900px] w-[1050px] bg-black mr-20 ml-10 mt-20 rounded-2xl shadow-2xl">
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

            <div className="flex flex-col gap-y-5 mt-16">
              <div className="flex justify-center gap-x-5">

                <div className="grid grid-rows-2 grid-flow-col gap-x-10 gap-y-10">
                  {data.skills?.map((skills, index) => (
                     <motion.div
                     key={skills.id}
                     custom={index % 2 === 0 ? 5 : -5} // Alternates between left and right slide
                     initial="hidden"
                     animate="visible"
                     variants={variants}
                   >
                    <SkillsCard
                      key={skills.id}
                      name={skills.name}
                      levelOfProficiency={skills.levelOfProficiency}
                      className="text-white font-bold text-2xl"
                    />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="text-black font-bold mt-6 animate-bounce text-end mr-16 italic"> PoweredBy PortfolioHive</div>
    </div>
  )
}

export default Skillss