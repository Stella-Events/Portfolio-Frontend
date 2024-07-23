import { Outlet } from "react-router-dom"
import SideBar from "../components/sideBar"


const DashboardLayout = () => {
    const [profile, setProfile] = useState();

      const token = getToken();

    const getUserProfile = async () => {
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
            getUserProfile();
        }
    }, []);
  
   if (!token) {
        return <Navigate to="/signin" />;
      }


    return (
        <div className="flex ">
            <SideBar />
            <div className="pl-[200px] w-full">
            <Outlet context={[profile, setProfile]} />
            </div>
        </div>
    )
}

export default DashboardLayout