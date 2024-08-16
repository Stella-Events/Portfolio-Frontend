import { Link, useNavigate } from "react-router-dom"
import K from "./constants/index"
import { useState } from "react";
import { LayoutDashboard, LogOut, Menu, X } from "lucide-react";

const Sidenav = ({ username }) => {
    console.log(username)

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // const handleDashboard = () => {
    //     console.log("Welcome Back To Dashboard");
    //     navigate("/dashboard");
    // };

    // const handleLogout = () => {
    //     console.log("User logged out");
    //     navigate("/signin");
    // };


    return (
        <div>
            <div className="fixed top-0 left-0 w-full z-50">

                <div className="flex items-center justify-between bg-[#8e44ad] h-20 w-full px-4 md:px-8">
                    <div>
                        <span className="text-3xl md:text-4xl text-white font-bold">Portfolio<span className="text-black">Hive</span></span>
                    </div>

                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-white">
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>

                    <div className="flex flex-row gap-x-2">
                        <div className={`md:flex md:items-center md:gap-x-5 ${isMenuOpen ? 'block' : 'hidden'} absolute md:relative top-20 right-0 md:top-0 md:right-0 w-full md:w-auto bg-[#8e44ad] md:bg-transparent font-bold text-white text-center md:text-left p-4 md:p-0`}>
                            {K.NAVLINKS.map(({ text, link }, index) => (
                                <Link
                                    to={link.replace(":username", username)}
                                    key={index}
                                    className="block py-2 md:py-0 hover:text-black"
                                    onClick={() => setIsMenuOpen(false)}
                                >

                                    {text}
                                </Link>
                            ))}
                        </div>

                        {/* <div className="flex items-center justify-center">
                            <div className="h-14 w-0.5 bg-gray-600"></div>
                        </div> */}

                        <hr />

                        <div className="flex flex-col gap-y-2">
                            {/* <div className="relative group">
                                <Link
                                    onClick={handleDashboard}
                                    className="text-white py-1 flex justify-center border border-black rounded-full hover:bg-black"
                                >
                                    <LayoutDashboard className="h-4 w-4" />
                                </Link>
                                <span className="absolute left-0 transform translate-y-6 -translate-x-full ml-2 mt-2 px-2 py-1 
                                text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Dashboard
                                </span>
                            </div> */}
                            {/* <div className="h-0.5 w-6 bg-gray-600"></div> */}

                            <div className="relative group">
                            {/* <button
                                onClick={handleLogout}
                                className="text-white py-1 flex justify-center border border-black rounded-full hover:bg-black"
                            >
                                <LogOut className="h-4 " />
                            </button>
                            <span className="absolute left-5 transform translate-y-6 -translate-x-full ml-2 mt-2 px-2 py-1 
                            text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Logout
                            </span> */}
                            </div>


                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Sidenav

