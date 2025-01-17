import { useOutletContext } from 'react-router-dom';
import VolCard from '../components/volCard'
import { motion } from "framer-motion";

const Volunteering = () => {

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
            <div className="flex flex-row items-center gap-x-5" >
              <span className="font-bold text-1xl text-white animate-pulse">V O L U N T E E R I N G</span>
              <div className="h-0.5 w-24 md:w-32 bg-[#8e44ad]"></div>
            </div>
            <div className="pt-3 mb-5">
              <span className="text-white text-4xl font-bold flex flex-row gap-x-5">
                <p>{data.firstName}</p>
                <p >{data.lastName}</p>
                <p >{data.otherNames}</p>
              </span>
            </div>

            <div className="flex flex-col items-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 p-5">
                {data.volunteering?.map((volunteering, index) => (

                  <motion.div
                    key={volunteering.id}
                    custom={index % 2 === 0 ? 5 : -5}
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                  >

                    <VolCard
                      key={volunteering.id}
                      projectName={volunteering.projectName}
                      role={volunteering.role}
                      description={volunteering.description}
                      skills={volunteering.skills}
                      responsibility={volunteering.responsibility}
                      location={volunteering.location}
                      startDate={volunteering.startDate}
                      endDate={volunteering.endDate}
                    />
                    </motion.div>
                    ))
                }
                  </div>
            </div>

            </div>
          </div>
        </div>
        <div className="text-black font-bold mt-4 animate-bounce text-end mr-16 italic"> PoweredBy PortfolioHive</div>
      </div>
      )

}

      export default Volunteering