import { Outlet } from "react-router-dom"
import Sidenav from "../components/sidenav"
import NameNav from "../components/nameNav"
import Ground from "../../../assets/images/ground.jpg"


const portfolioLayout = () => {
    return (
        <div className="bg-[url('./assets/images/ground,jpg')]">
            <NameNav/>
            <div className="flex flex-row justify-between">
                <Sidenav />
                <Outlet />
            </div>
        </div>
    )
}

export default portfolioLayout
