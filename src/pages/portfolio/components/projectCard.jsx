import React from 'react'
import { Link } from 'react-router-dom';
import gitWhite from "../../../assets/images/gitWhite.png"

const ProjectCard = ({ image, projectName, description, contributors,
    nameOfInstitution, skills }) => {

    console.log(image);
    return (
        <div className="mb-8">
            <div className="bg-purple-950/80 border-6 border-orange-600 rounded-2xl cursor-pointer p-4 md:p-6 max-w-full
            transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 relative">

                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-5 relative">

                    {/* IMAGE */}
                    <div className="flex-shrink-0">
                        <div><img src={image} alt="project Image" className="h-40 w-full md:w-60 md:h-48 border-2 border-white rounded-2xl object-cover" /></div>
                    </div>

                    {/* SKILLS TABLETS PLUS ALL */}
                    <div >
                        {/* <div className="flex flex-col mb-3"> */}

                        <div className="flex flex-col text-center md:text-left">

                            <div className="text-white text-2xl md:text-3xl font-bold">{projectName}</div>

                            <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-3 text-white">
                                Skills: {skills}
                            </div>
                        </div>

                        <div className="text-white mt-4">{description}</div>
                        <div className="text-white mt-2">{contributors}</div>
                        {/* <div className="text-white flex flex-row text-start gap-x-4 mt-5">{skills}</div> */}
                        <div className="text-white font-bold text-xl md:text-2xl italic mt-4">{
                            nameOfInstitution
                        }</div>
                        {/* </div> */}
                    </div>
                    {/* links */}
                    <Link

                        to="https://github.com"

                        className="h-16 w-16 bg-white/20 rounded-full flex flex-row justify-center items-center gap-5 
                        absolute top-32 right-0">
                        <div>
                            <img src={gitWhite} alt="icon-of-twitter-logo" className="h-10 w-10" />
                        </div>
                    </Link>
                </div>
            </div>
            <div className="flex justify-center mt-5">
                <div className="h-0.5 w-full md:w-[850px] bg-white"></div>
            </div>
        </div>
    )
}

export default ProjectCard