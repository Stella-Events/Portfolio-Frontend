import { Link } from "react-router-dom"
import K from "./constants/index"

const SideBar = () => {
  return (
    <div className="h-screen w-[400px] bg-tColor flex flex-col px-8 py-8">
      <div>
        <span className="text-white text-3xl font-bold text-center">Stella <span className="text-aColor">Portfolio</span></span>
      </div>
      <div className="flex flex-col text-bgColor gap-y-[30px] text-xl font-bold py-4 ">
        {K.NAVLINKS.map(({icon, text, link}, index) => (
            <Link
              to={link}
              key={index}
              className="flex gap-x-4 items-center hover:bg-secondary hover:text-white hover:rounded-"
              >
                <span className="bg-secondary text-white">
                  {icon}
                </span>
                <span>{text}</span>
            </Link>
          )) }
         </div>
      <div>
        signout
      </div>
    </div>
  )
}

export default SideBar