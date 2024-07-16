import { Outlet } from "react-router-dom"
import SideBar from "../components/sideBar"
const DashboardLayout = () => {
    return (
        <div className="flex ">
            <SideBar />
            <div className="pl-[300px] w-full"><Outlet /></div>
        </div>
    )
}

export default DashboardLayout