import ProjectCard from "../components/projectCard"
import { useOutletContext } from "react-router-dom"
import { motion } from "framer-motion";


const Projectss = () => {

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
    <div className="bg-white w-full min-h-screen bg-cover bg-no-repeat bg-fixed cursor-pointer">
      <div className="flex justify-center px-4 md:px-10">
        <div className="w-full max-w-screen-lg bg-black my-10 p-8 md:p-14 rounded-2xl shadow-2xl">
          {/* FIRST TWO LINES */}
          <div className="gap-y-12">
            <div className="flex flex-row items-center gap-x-5">
              <span className="font-bold text-1xl text-white pl-10">P R O J E C T S</span>
              <div className="h-0.5 w-24 md:w-32 bg-[#8e44ad]"></div>
            </div>
            <div className="pt-3 pl-10">
              <span className="text-white text-2xl md:text-4xl font-bold">LEARN MORE ABOUT ME</span>
            </div>

            <div className="flex flex-col justify-center items-center mt-10 gap-y-10">
              {data.projects?.map((projects, index) => (

                <motion.div
                     key={projects.id}
                     custom={index % 2 === 0 ? 5 : -5} 
                     initial="hidden"
                     animate="visible"
                     variants={variants}
                   >

                <ProjectCard
                  key={projects.id}
                  image={`https://savefiles.org/${projects.image}?shareable_link=327`} 
                  projectName={projects.projectName}
                  skills={projects.skills}
                  description={projects.description}
                  contributors={projects.contributors}
                  nameOfInstitution={projects.nameOfInstitution}
                  links={projects.links}

                />
                </motion.div>
              ))
              }
            </div>
          </div>
        </div>
      </div>
      <div className="text-black font-bold mt-4 animate-bounce text-end mr-4 md:mr-16 italic"> PoweredBy PortfolioHive</div>
    </div>
  )
}

export default Projectss