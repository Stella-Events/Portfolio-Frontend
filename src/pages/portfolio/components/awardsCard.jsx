import { CalendarDays, Landmark, Trophy } from "lucide-react"


const AwardsCard = ({ pic, name, description, date, institution, day, month }) => {

    return (
        
        <div className="h-80 w-[700px] bg-black place-content-center 
                        px-5 py-5 border border-[#c57816] hover:border-4 shadow-xl rounded-xl">

            <div className="flex flex-row justify-center relative gap-10">
                <div>
                    <img src={pic} alt="" className="h-60 w-30 border border-[#c57816]" />
                    <div className="h-18 w-16 bg-[#c57816] absolute -top-10 right-0 flex flex-col text-2xl font-bold text-center rounded-b-lg">
                        <span>{day}</span>
                        <span>{month}</span>
                    </div>

                </div>

                <div className="flex flex-col gap-y-3 justify-center">
                    <div className="text-4xl font-bold  text-[#c57816]"><Trophy />{name}</div>
                    <div className="text-white flex flex-row justify-evenly">{description}</div>
                    <div className="text-white flex flex-row justify-evenly"><CalendarDays /> {date}</div>
                    <div className="text-white flex flex-row justify-evenly"><Landmark />{institution}</div>

                </div>

            </div>
        </div>

    )
}

export default AwardsCard