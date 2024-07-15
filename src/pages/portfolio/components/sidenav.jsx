import { Link } from "react-router-dom"
import K from "./constants/index"

const Sidenav = () => {
    return (
        <div>
            <div className="flex flex-col px-5 py-8 mt-0 relative">

                <div className="flex flex-col text-transparent gap-y-[10px] text-xl fixed">
                    {K.NAVLINKS.map(({ icon, text, link }, index) => (
                        <Link
                            to={link}
                            key={index}
                            className="flex gap-x-2 items-center hover:bg-[#e67e22] rounded-full hover:text-white"
                        >
                            <span className="bg-[#e67e22] rounded-full h-10 w-10 text-white flex items-center justify-center">
                                {icon}
                            </span>
                            <span>{text}</span>
                        </Link>
                    ))}
                </div>
                
            </div>
        </div>
    )
}
export default Sidenav

