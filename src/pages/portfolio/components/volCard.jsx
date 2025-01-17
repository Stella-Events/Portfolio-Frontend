import { Component, MapPin } from "lucide-react"

const VolCard = ({ projectName, role, description, skills, responsibility, location, startDate, endDate }) => {
    return (
        <div>
            <div className="flex flex-row gap-x-3">
                <div className="flex flex-col">
                    <div className="h-5 w-5 rounded-full bg-[#8e44ad]"></div>
                    <div className="w-0.5 h-[360px] bg-white ml-2"></div>
                </div>

                <div className="flex flex-col mt-5 gap-y-10 border-white border-2 rounded-xl">

                    <div className="h-[350px] w-96 bg-purple-600/0 rounded-xl flex justify-center items-center flex-col gap-y-3">
                        <div className=" text-2xl font-bold text-center items-center text-[#8e44ad]">{projectName}</div>

                        <div className="flex flex-col items-start gap-y-3">
                            
                            <div className="text-white text-1xl font-bold text-start italic pl-3 flex flex-col gap-x-2">
                                <div className="flex flex-row gap-x-2 items-center">
                                    <Component className="size-4" />
                                    <span className="text-secondary text-lg">Role:
                                    </span>
                                </div>
                                {role}
                            </div>

                            <div className="text-white text-1xl font-bold text-start italic pl-3 flex flex-col gap-x-2">
                                <div className="flex flex-row gap-x-2 items-center">
                                    <Component className="size-4" />
                                    <span className="text-secondary text-lg">Description:
                                    </span>
                                </div>
                                {description}
                            </div>

                            <div className="text-white text-1xl font-bold text-start italic pl-3 flex flex-col gap-x-2">
                                <div className="flex flex-row gap-x-2 items-center">
                                    <Component className="size-4" />
                                    <span className="text-secondary">Skills:
                                    </span>
                                </div>
                                {skills}
                            </div>

                            <div className="text-white text-1xl font-bold text-start italic pl-3 flex flex-col gap-x-2">
                                <div className="flex flex-row gap-x-2 items-center">
                                    <Component className="size-4" />
                                    <span className="text-secondary">Responsibility:
                                    </span>
                                </div>
                                {responsibility}
                            </div>
                        </div>


                        <div className="flex flex-col">
                            <div>
                                <div className="text-white text-1xl font-bold text-start italic pl-3 flex flex-row gap-x-2"><MapPin className="size-6 text-[#8e44ad] pt-1" />{location}</div>
                            </div>
                            <div className="flex flex-row">
                                <div className="text-white text-1xl font-bold text-start italic pl-3">{startDate}</div>
                                <div className="text-white text-1xl font-bold text-start italic pl-3">{endDate}</div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>


        </div>
    )
}

export default VolCard