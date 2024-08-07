import React from 'react'

const ProjectCard = ({ image, projectName, description, contributors, links, 
                    nameOfInstitution, skillone, skilltwo, skillthree, skillfour }) => {


                        const baseURL = "https://portfolio-backend-ff91.onrender.com"; 
                        const fullImagePath = `${baseURL}/${image}`;

                        console.log(image);
    return (
        <div className="mb-8">
            <div className="bg-purple-950/80 border-6 border-orange-600 rounded-2xl cursor-pointer p-4 md:p-6 max-w-full">

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-5 relative">

                    {/* IMAGE */}
                    <div className="flex-shrink-0">
                        <div><img src={fullImagePath} alt="project Image" className="h-40 w-full md:w-60 md:h-48 border-2 border-white rounded-2xl object-cover"  /></div>
                    </div>

                    {/* SKILLS TABLETS PLUS ALL */}
                    <div >
                        {/* <div className="flex flex-col mb-3"> */}

                            <div className="flex flex-col text-center md:text-left">

                                <div className="text-white text-2xl md:text-3xl font-bold">{projectName}</div>

                                <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-3">

                                    <div className="h-8 w-24 md:w-28 bg-red-500 rounded-2xl flex items-center justify-center">
                                        {skillone}
                                    </div>
                                    <div className="h-8 w-24 md:w-28 bg-green-500 rounded-2xl flex items-center justify-center">
                                        {skilltwo}
                                    </div>
                                    <div className="h-8 w-24 md:w-28 bg-blue-400 rounded-2xl flex items-center justify-center">
                                        {skillthree}

                                    </div>
                                    <div className="h-8 w-24 md:w-28 bg-red-500 rounded-2xl flex items-center justify-center">
                                        {skillfour}
                                    </div>
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
                    <div className="mt-4 md:mt-0 md:absolute md:right-0 md:bottom-0 text-white text-sm md:text-base pr-5 pb-3">
                        <div>{links}</div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-5">
              <div className="h-0.5 w-full md:w-[850px] bg-white"></div>
            </div>
        </div>
    )
}

export default ProjectCard