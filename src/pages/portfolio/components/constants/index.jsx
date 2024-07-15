import { CircleUser, FileCheck2, HandHeart, Home, Medal, Newspaper, Power} from "lucide-react";

export default {
    NAVLINKS : [
        {
            icon: <Home/>,
            text: "Welcome",
            link: "/portfolio"
        },
        {
           icon: <CircleUser/>,
            text: "Profile",
            link: "/portfolio/profile"
        },
        {
            icon: <Newspaper/>,
            text: "Education",
            link: "/portfolio/education"
        },
        {
            icon: <Medal/>,
            text: "Achievements",
            link: "/portfolio/achievements"
        },
        {
            icon: <FileCheck2/>,
            text: "Skills",
            link: "/portfolio/skillss"
        },
        {
            icon: <Power/>,
            text: "Projects",
            link: "/portfolio/projectss"
        },
        {
            icon: <HandHeart/>,
            text: "Volunteering",
            link: "/portfolio/volunteering"
        },
       
    ] 
    
}
