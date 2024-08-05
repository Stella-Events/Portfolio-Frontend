import { Link } from "react-router-dom"
import K from "./constants/index"
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Sidenav = ({ username }) => {
    console.log(username)

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


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
                </div>

            </div>
        </div>
    )
}
export default Sidenav

