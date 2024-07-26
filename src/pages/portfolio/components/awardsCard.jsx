import { CalendarDays, Landmark, ScrollText, Trophy } from "lucide-react"



const AwardsCard = ({ pic, name, description, date, institution}) => {

    return (
        
        <div className="h-60 w-[450px] bg-purple-950/20 place-content-center 
                        px-5 py-5 border border-[#8e44ad] hover:border-4 shadow-xl rounded-lg">

            <div className="flex flex-row justify-center relative gap-5">
                <div className="w-1/2">
                    <img src={pic} alt="" className="h-50 w-full border border-[#8e44ad]" />
                    {/* <div className="h-18 w-16 bg-[#c57816] absolute -top-10 right-0 flex flex-col text-2xl font-bold text-center rounded-b-lg">
                        <span>{day}</span>
                        <span>{month}</span>
                    </div> */}

                </div>
                            
                <div className="flex flex-col gap-y-3 justify-evenly">
                    <div className="text-white text-1xl font-bold flex flex-row text-start gap-x-4"><Trophy className="text-[#8e44ad]"/>{name}</div>
                    <div className="text-white flex flex-row text-start gap-x-4"><ScrollText className="text-[#8e44ad]  size-[40px]"/>{description}</div>
                    <div className="text-white flex flex-row text-start gap-x-4"><CalendarDays className="text-[#8e44ad] "/> {date}</div>
                    <div className="text-white flex flex-row text-start gap-x-4"><Landmark className="text-[#8e44ad] size-[40px]"/>{institution}</div>

                </div>

            </div>
        </div>

    )
}

export default AwardsCard