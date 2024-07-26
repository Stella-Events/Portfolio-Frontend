import { Link } from "react-router-dom"
import K from "./constants/index"

const Sidenav = () => {
    return (
        <div>
            <div className="flex mt-0 ">

                <div className="flex text-white text-l fixed bg-secondary h-20 w-full justify-between z-20 px-10">
                    <div>
                        <span className="text-4xl text-white flex pt-5 font-bold">Portfolio<span className="text-black text-4xl">Hive</span></span>
                    </div>
                    <div className="flex flex-row text-lg gap-x-4">
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
        </div>
    )
}
export default Sidenav

