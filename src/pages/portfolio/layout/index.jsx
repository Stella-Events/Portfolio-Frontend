import { Outlet } from "react-router-dom"
import Sidenav from "../components/sidenav"



const PortfolioLayout = () => {
    return (
        <div>
            <div className="">
                <Sidenav />
                <div className="mt-20">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default PortfolioLayout
