import { Link } from "react-router-dom"
import K from "./constants/index"

const Sidenav = () => {
    return (
        <div>
            <div className="flex mt-0 ">

                <div className="flex text-white text-l fixed bg-orange-700 h-20 w-full justify-evenly z-20">
                <span className="text-4xl text-white flex pt-5 font-bold">Portfolio<span className="text-black text-4xl">Hive</span></span>
                    {K.NAVLINKS.map(({ text, link }, index) => (
                        <Link
                            to={link}
                            key={index}
                            className="flex gap-x-2 items-center"

                        >   
                            <span className="text-white flex items-center justify-center">
                                {/* {icon} */}
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

