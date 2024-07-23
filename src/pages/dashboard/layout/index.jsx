import { Outlet } from "react-router-dom"
import SideBar from "../components/sideBar"


const DashboardLayout = () => {
    const token = getToken();

    if (!token) {
        return <Navigate to="/signin" />;
      }

    return (
        <div className="flex ">
            <SideBar />
            <div className="pl-[200px] w-full"><Outlet /></div>
        </div>
    )
}

export default DashboardLayout