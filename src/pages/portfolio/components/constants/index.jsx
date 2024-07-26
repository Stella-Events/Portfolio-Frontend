import { CandlestickChart, CircleUser, FileCheck2, HandHeart, Medal, Newspaper, Power} from "lucide-react";

export default {
    NAVLINKS : [
        // {
        //     icon: <Home/>,
        //     text: "Welcome",
        //     link: "/portfolio"
        // },
        {
           icon: <CircleUser/>,
            text: "Profile",
            link: "/portfolio/:username"
        },
        {
           icon: <CandlestickChart/>,
            text: "Experience",
            link: "/portfolio/:username/experience"
        },
        {
            icon: <Newspaper/>,
            text: "Education",
            link: "/portfolio/:username/education"
        },
        {
            icon: <Medal/>,
            text: "Achievements",
            link: "/portfolio/:username/achievements"
        },
        {
            icon: <FileCheck2/>,
            text: "Skills",
            link: "/portfolio/:username/skillss"
        },
        {
            icon: <Power/>,
            text: "Projects",
            link: "/portfolio/:username/projectss"
        },
        {
            icon: <HandHeart/>,
            text: "Volunteering",
            link: "/portfolio/:username/volunteering"
        },
       
    ] 
    
}
