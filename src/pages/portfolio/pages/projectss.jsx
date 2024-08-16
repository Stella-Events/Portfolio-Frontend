import ProjectCard from "../components/projectCard"
import { useOutletContext } from "react-router-dom"
import { motion } from "framer-motion";


const Projectss = () => {

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
    <div className="bg-white w-full h-[1500px] bg-cover bg-no-repeat bg-fixed cursor-pointer">
      <div className="flex justify-center">
        <div className="h-[1350px] w-[1050px] bg-black mr-10 ml-20 mt-20 rounded-2xl">
          {/* FIRST TWO LINES */}
          <div className="gap-y-12">
            <div className="flex flex-row items-center gap-x-5 pt-10" >
              <span className="font-bold text-1xl text-white pl-10">P R O J E C T S</span>
              <div className="h-0.5 w-32 bg-[#8e44ad]"></div>
            </div>
            <div className="pt-3 pl-10">
              <span className="text-white text-4xl font-bold">LEARN MORE ABOUT ME</span>
            </div>

            <div className="flex flex-col justify-center items-center mt-10 gap-y-10">
              {data.projects?.map((projects, index) => (

                <motion.div
                     key={projects.id}
                     custom={index % 2 === 0 ? 5 : -5} // Alternates between left and right slide
                     initial="hidden"
                     animate="visible"
                     variants={variants}
                   >

                <ProjectCard
                  key={projects.id}
                  image={projects.image}
                  projectName={projects.projectName}
                  skillone={projects.skills}
                  skilltwo={projects.skills}
                  skillthree={projects.skills}
                  skillfour={projects.skills}
                  description={projects.description}
                  contributors={projects.contributors}
                  nameOfInstitution={projects.nameOfInstitution}
                  links={projects.links}

                />
                </motion.div>
              ))
              }
            </div>
            {/* <div className="flex justify-center mt-5">
              <div className="h-0.5 w-[850px] bg-white"></div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="text-black font-bold mt-6 animate-bounce text-end mr-16 italic"> PoweredBy PortfolioHive</div>
    </div>
  )
}

export default Projectss