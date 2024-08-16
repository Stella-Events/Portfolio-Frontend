import { Link, Outlet, Navigate } from "react-router-dom"
import { useEffect, useState } from "react";
import SideBar from "../components/sideBar";
import { getDetails } from "../../../services/config";


const DashboardLayout = () => {
    const [user, setUser] = useState();

    const { token, firstName, lastName, userName } = getDetails();
  
    useEffect(() => {
      if (token) {
        setUser({
          firstName,
          lastName,
          userName,
        });
      }
    }, []);

    if (!token) {
        return <Navigate to="/signin" />;
    }

    // const getAvatar = () => {
    //     if (!user) return "N/A";
    //     const initials = `${firstName[0]}${lastName[0]}`;
    //     return initials.toUpperCase();
    //   };

    return (
        <div className="flex">
            <SideBar />
            <Link
            to="/dashboard/profile"
            className="ml-auto bg-pink p-4 rounded-full cursor-pointer"
          >
            {/* <span className="text-xl font-semibold text-white">
              {getAvatar()}
            </span> */}
          </Link>
            <div className="pl-[220px] w-full">
                <Outlet  context={[user, setUser]} />
            </div>
        </div>
    )
}

export default DashboardLayout