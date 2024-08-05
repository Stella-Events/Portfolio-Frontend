import { Component } from "lucide-react"

const EduCard = ({schoolName, program, qualification, grade, location, startDate, endDate }) => {
  return (
    <div>
        <div>
        <div className="flex flex-row pt-5">
                <div className="flex flex-col ml-10 mt-5">
                    <div className="h-5 w-5 rounded-full bg-[#8e44ad]"></div>
                    <div className="w-0.5 h-[340px] bg-white ml-2"></div>
                </div>

                <div className="flex flex-col ml-10 mt-5 gap-y-10">

                    <div className="h-[320px] w-96 bg-purple-600/0 border-white border-2 rounded-xl flex justify-center items-center flex-col mt-5 gap-y-3">
                        <div className=" text-2xl font-bold text-center text-[#8e44ad] italic">{schoolName}</div>
                        <div className="flex flex-col items-start gap-y-3">
                        <div className="text-white text-1xl font-bold text-center italic pl-3 flex flex-row gap-x-2"><Component className="size-4" />{program}</div>
                        <div className="text-white text-1xl font-bold text-start italic pl-3 flex flex-row gap-x-2"><Component className="size-4" />{qualification}</div>
                        <div className="text-white text-1xl font-bold text-start italic pl-3 flex flex-row gap-x-2"><Component className="size-4" />{grade}</div>
                        <div className="text-white text-1xl font-bold text-start italic pl-3 flex flex-row gap-x-2"><Component className="size-4" />{location}</div>
                        </div>


                        <div className="flex flex-col gap-y-3 items-start mt-3 mr-16">
                            <div className="text-white text-1xl font-bold text-start italic pl-3 flex flex-row gap-x-2"><Component className="size-4" />{startDate}</div>
                            <div className="text-white text-1xl font-bold text-start italic pl-3 flex flex-row gap-x-2"><Component className="size-4" />{endDate}</div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default EduCard