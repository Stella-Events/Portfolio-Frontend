import { FileCheck2, Home, Medal, Newspaper, Phone, Power, UserSearch } from "lucide-react";

export default {
    NAVLINKS : [
        {
            icon: <Home/>,
            text: "Home",
            link: "/dashboard"
        },
        {
           icon: <UserSearch/>,
            text: "About Me",
            link: "/dashboard/about-me"
        },
        {
            icon: <Newspaper/>,
            text: "Resume",
            link: "/dashboard/resume"
        },
        {
            icon: <Power/>,
            text: "Skills",
            link: "/dashboard/skills"
        },
        {
            icon: <FileCheck2/>,
            text: "Projects",
            link: "/dashboard/projects"
        },
        {
            icon: <Medal/>,
            text: "Achievements",
            link: "/dashboard/achievements"
        },
        {
            icon: <Phone/>,
            text: "Contact",
            link: "/dashboard/contact"
        },
       
    ] 
    
}

