import { Component } from "lucide-react"

const EduCard = ({ schoolName, program, qualification, grade, location, startDate, endDate }) => {
    return (
        <div>
            <div>
                <div className="flex flex-row">
                    <div className="flex flex-col">
                        <div className="h-5 w-5 rounded-full bg-[#8e44ad]"></div>
                        <div className="w-0.5 h-[360px] bg-white ml-2"></div>
                    </div>

                    <div className="flex flex-col ml-5 gap-y-10">

                        <div className="h-[350px] w-96 bg-purple-600/0 border-white border-2 rounded-xl flex justify-center items-center flex-col mt-5 gap-y-3">
                            <div className=" text-2xl font-bold text-center text-[#8e44ad] italic">{schoolName}</div>

                            <div className="flex flex-col items-start gap-y-3">

                                <div className="text-white text-1xl font-bold text-start italic pl-3 flex flex-row gap-x-2">
                                    <div className="flex flex-row gap-x-2 items-center">
                                        <Component className="size-4" />
                                        <span className="text-secondary text-lg flex items-center">
                                            Program:
                                        </span>
                                    </div>
                                    {program}
                                </div>

                                <div className="text-white text-1xl font-bold text-start italic pl-3 flex flex-row gap-x-2">
                                    <div className="flex flex-row gap-x-2 items-center">
                                        <Component className="size-4" />
                                        <span className="text-secondary text-lg">Qualification:</span>
                                    </div>
                                    {qualification}
                                </div>

                                <div className="text-white text-1xl font-bold text-start italic pl-3 flex flex-row gap-x-2">
                                    <div className="flex flex-row gap-x-2 items-center">
                                        <Component className="size-4" />
                                        <span className="text-secondary text-lg">Grade:</span>
                                    </div>
                                    {grade}
                                </div>

                                <div className="text-white text-1xl font-bold text-start italic pl-3 flex flex-row gap-x-2">
                                    <div className="flex flex-row gap-x-2 items-center">
                                        <Component className="size-4" />
                                        <span className="text-secondary text-lg">
                                            Location:
                                        </span>
                                    </div>
                                    {location}
                                </div>
                            </div>


                            <div className="flex flex-row gap-y-3 items-start mt-3 mr-16">
                                <div className="text-white text-1xl font-bold text-start italic pl-3 flex flex-row gap-x-2">{startDate}</div>
                                <div className="text-white text-1xl font-bold text-start italic pl-3 flex flex-row gap-x-2">{endDate}</div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default EduCard