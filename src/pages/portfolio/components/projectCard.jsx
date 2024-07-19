import React from 'react'

const ProjectCard = ({ image, projectName, description, contributors, links, institution, skillone, skilltwo, skillthree, skillfour }) => {
    return (
        <div>
            <div className="h-60 w-[850px] bg-purple-950/80 border-6 border-orange-600 rounded-2xl cursor-pointer">

                <div className="flex flex-row justify-evenly items-center gap-x-5 relative">

                    {/* IMAGE */}
                    <div className="flex justify-evenly items-center mt-3">
                        <div><img src={image} alt="" className="h-48 w-60 border-2 border-white rounded-2xl object-cover" /></div>
                    </div>

                    {/* SKILLS TABLETS PLUS ALL */}
                    <div >
                        <div className="flex flex-col mb-3">

                            <div className="flex flex-col gap-y-5">

                                <div className="text-white text-3xl font-bold flex flex-row text-start gap-x-4 mt-5">{projectName}</div>

                                <div className="flex flex-row gap-x-5 text-white">

                                    <div className="h-8 w-28 bg-red-500 rounded-2xl flex items-center justify-center">
                                        {skillone}
                                    </div>
                                    <div className="h-8 w-28 bg-green-500 rounded-2xl flex items-center justify-center">
                                        {skilltwo}
                                    </div>
                                    <div className="h-8 w-28 bg-blue-400 rounded-2xl flex items-center justify-center">
                                        {skillthree}

                                    </div>
                                    <div className="h-8 w-28 bg-red-500 rounded-2xl flex items-center justify-center">
                                        {skillfour}
                                    </div>
                                </div>
                            </div>

                            <div className="text-white flex flex-row gap-x-4 mt-5 text-center">{description}</div>
                            <div className="text-white flex flex-row text-start gap-x-4 mt-2">{contributors}</div>
                            {/* <div className="text-white flex flex-row text-start gap-x-4 mt-5">{skills}</div> */}
                            <div className="text-white font-bold text-2xl flex flex-row text-start gap-x-4 italic">{institution}</div>
                        </div>
                    </div>
                    {/* links */}
                    <div className="flex flex-col absolute right-0 bottom-0 text-white pr-5 pb-3">
                        <div>{links}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard