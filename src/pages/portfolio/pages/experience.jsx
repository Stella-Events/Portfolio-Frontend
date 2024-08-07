import ExCard from "../components/exCard"
import { useOutletContext } from "react-router-dom";



const Experience = () => {
    const data = useOutletContext();
    console.log("🚀 ~ PortfolioProfile ~ data:", data);  // Debugging line


    return (
        <div>
            <div className="bg-white w-full min-h-screen bg-cover bg-no-repeat bg-fixed">
                <div className="flex justify-center px-4 lg:px-10">
                    <div className="bg-black w-full max-w-[1050px] lg:h-[930px] mt-10 lg:mt-20 rounded-2xl shadow-2xl">
                        {/* FIRST TWO LINES */}

                        <div className="gap-y-12 p-5 lg:p-10">
                            <div className="flex flex-row items-center gap-x-5 pt-5">
                                <span className="font-bold text-xl lg:text-xl text-white animate-pulse">E X P E R I E N C E</span>
                                <div className="h-0.5 w-16 lg:w-32 bg-[#8e44ad]"></div>
                            </div>
                            <div className="pt-3">
                                <span className="text-white text-2xl lg:text-4xl font-bold flex flex-row gap-x-2 lg:gap-x-5">LEARN MORE ABOUT ME</span>
                            </div>
                        </div>


                        <div className="flex flex-col items-center">
                            <div className="flex flex-wrap justify-center gap-5 p-5">
                                {data.experiences?.map((experience) => (
                                    <ExCard
                                        key={experience.id}
                                        companyName={experience.companyName}
                                        role={experience.role}
                                        responsibility={experience.responsibility}
                                        skills={experience.skills}
                                        startDate={experience.startDate}
                                        endDate={experience.endDate}
                                    />
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