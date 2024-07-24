import { Link, Outlet, Navigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { SquareMenu } from "lucide-react";
import { getToken } from "../../../services/config";
import { apiGetProfile } from "../../../services/profile";
import { toast } from "react-toastify";
import SideBar from "../components/sideBar";


const DashboardLayout = () => {
    const [profile, setProfile] = useState();

    const token = getToken();

    const getProfile = async () => {
        try {
            const response = await apiGetProfile();
            const userProfileData = response?.data.profile;
            setProfile(userProfileData);
        } catch (error) {
            toast.error("An error occured");
        }
    };

    useEffect(() => {
        if (token) {
            getProfile();
        }
    }, []);

    if (!token) {
        return <Navigate to="/signin" />;
    }


    return (
        <div className="flex">
            <SideBar />
            <div className="pl-[220px] w-full">
                <Outlet context={[profile, setProfile]} />
            </div>
        </div>
    )
}

export default DashboardLayout