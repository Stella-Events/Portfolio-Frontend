import ExCard from "../components/exCard"
import { useOutletContext } from "react-router-dom";
import { motion } from "framer-motion";


const Experience = () => {
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
        <div>
            <div className="bg-white w-full min-h-screen bg-cover bg-no-repeat bg-fixed">
                <div className="flex justify-center px-4 lg:px-10">
                    <div className="bg-black w-full max-w-[1050px] lg:h-[930px] mt-10 lg:mt-20 rounded-2xl shadow-2xl">
                        {/* FIRST TWO LINES */}

                        <div className="gap-y-12">
                            <div className="flex flex-row items-center gap-x-5 pt-10">
                                <span className="font-bold text-1xl text-white animate-pulse pl-10">E X P E R I E N C E</span>
                                <div className="h-0.5 w-16 lg:w-32 bg-[#8e44ad]"></div>
                            </div>
                            <div className="pt-3 pl-10">
                                <span className="text-white text-2xl lg:text-4xl font-bold flex flex-row gap-x-2 lg:gap-x-5">LEARN MORE ABOUT ME</span>
                            </div>
                        </div>


                        <div className="flex flex-col items-center">
                            <div className="flex flex-wrap justify-center gap-5 p-5">
                                {data.experiences?.map((experience, index) => (

                                    <motion.div
                                        key={experience.id}
                                        custom={index % 2 === 0 ? 5 : -5}
                                        initial="hidden"
                                        animate="visible"
                                        variants={variants}
                                    >

                                        <ExCard
                                            key={experience.id}
                                            companyName={experience.companyName}
                                            role={experience.role}
                                            responsibility={experience.responsibility}
                                            skills={experience.skills}
                                            startDate={experience.startDate}
                                            endDate={experience.endDate}
                                        />
                                    </motion.div>
                                ))
                                }

                            </div>
                        </div>

                    </div>
                </div>

                <div className="text-black font-bold mt-4 animate-bounce text-end px-4 lg:px-16 italic">PoweredBy PortfolioHive</div>
            </div>
        </div>
    )
}

export default Experience