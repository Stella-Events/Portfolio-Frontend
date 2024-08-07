import { Component } from "lucide-react"

const ExCard = ({companyName, role, responsibility, skills, description, startDate, endDate }) => {
  return (
    <div>
         <div>
            <div className="flex flex-row">
                <div className="flex flex-col ml-2">
                    <div className="h-5 w-5 rounded-full bg-[#8e44ad]"></div>
                    <div className="w-0.5 h-[360px] bg-white ml-2"></div>
                </div>

                <div className="flex flex-col ml-4 gap-y-10">

                    <div className="h-[350px] w-96 bg-purple-600/0 border-white border-2 rounded-xl flex justify-center items-center flex-col mt-5">
                        <div className=" text-2xl font-bold text-center text-[#8e44ad] italic ">{companyName}</div>
                        <div className="flex flex-col items-start gap-y-3 pt-5">
                        <div className="text-white text-1xl font-bold text-center italic pl-3 flex flex-row gap-x-2"><Component className="size-4" />{role}</div>
                        <div className="text-white text-1xl font-bold text-start italic pl-3 flex flex-row gap-x-2"><Component className="size-4" />{responsibility}</div>
                        <div className="text-white text-1xl font-bold text-start italic pl-3 flex flex-row gap-x-2"><Component className="size-4" />{skills}</div>
                        <div className="text-white text-1xl font-bold text-start italic pl-3 flex flex-row gap-x-2"><Component className="size-4" />{description}</div>
                        </div>


                        <div className="flex flex-row gap-y-3 mt-3">
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

export default ExCard