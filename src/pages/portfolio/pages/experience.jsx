import paintBg from "../../../assets/images/paintBg.jpg"

import ExCard from "../components/exCard"
import { useOutletContext } from "react-router-dom";



const Experience = () => {
    const data = useOutletContext();
    console.log("🚀 ~ PortfolioProfile ~ data:", data);  // Debugging line
    return (
        <div>
            <div className="bg-[url('./assets/images/paintBg.jpg')] w-full h-[1080px] bg-cover bg-no-repeat bg-fixed">
                <div className="flex justify-center">
                    <div className="h-[930px] w-[1050px] bg-black/80 mr-10 ml-10 mt-20 rounded-2xl">
                        {/* FIRST TWO LINES */}
                        <div className="gap-y-12">
                            <div className="flex flex-row items-center gap-x-5 pt-10" >
                                <span className="font-bold text-1xl text-white pl-10 animate-pulse">E X P E R I E N C E</span>
                                <div className="h-0.5 w-32 bg-orange-600"></div>
                            </div>
                            <div className="pt-3 pl-10">
                                <span className="text-white text-4xl font-bold">LEARN MORE ABOUT ME</span>
                            </div>
                        </div>

                        <div className="flex flex-row">
                            <div >
                                <ExCard
                                    companyName="Creative Solutions"
                                    role="Frontend Developer"
                                    responsibility="Designed and implemented user interfaces with HTML, CSS, and JavaScript."
                                    skills="HTML, CSS, REACT"
                                    description="Designed and implemented user interfaces with HTML, CSS, and JavaScript."
                                    startDate="March 2017 -"
                                    endDate="December 2018"
                                />

                                <ExCard
                                    companyName="Creative Solutions"
                                    role="Frontend Developer"
                                    responsibility="Designed and implemented user interfaces with HTML, CSS, and JavaScript."
                                    skills="HTML, CSS, REACT"
                                    description="Designed and implemented user interfaces with HTML, CSS, and JavaScript."
                                    startDate="March 2017 -"
                                    endDate="December 2018"
                                />
                            </div>
                            <div >
                                <ExCard
                                    companyName="Creative Solutions"
                                    role="Frontend Developer"
                                    responsibility="Designed and implemented user interfaces with HTML, CSS, and JavaScript."
                                    skills="HTML, CSS, REACT"
                                    description="Designed and implemented user interfaces with HTML, CSS, and JavaScript."
                                    startDate="March 2017 -"
                                    endDate="December 2018"
                                />

                                <ExCard
                                    companyName="Creative Solutions"
                                    role="Frontend Developer"
                                    responsibility="Designed and implemented user interfaces with HTML, CSS, and JavaScript."
                                    skills="HTML, CSS, REACT"
                                    description="Designed and implemented user interfaces with HTML, CSS, and JavaScript."
                                    startDate="March 2017 -"
                                    endDate="December 2018"
                                />
                            </div>
                        </div>

                    </div>
                </div>

                <div className="text-white font-bold mt-6 animate-bounce text-end mr-16 italic"> PoweredBy PortfolioHive</div>
            </div>
        </div>
    )
}

export default Experience