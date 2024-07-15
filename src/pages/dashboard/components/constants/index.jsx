import { Box, Cat, FileBadge, FileCheck2, GanttChart, Home, Linkedin, MailCheck, Medal, Newspaper, Phone, PhoneIncoming, Power, SmartphoneNfc, Sparkles, Target, UserCog, UserSearch } from "lucide-react";

export default {
    NAVLINKS: [
        {
            icon: <Home />,
            text: "Home",
            link: "/dashboard"
        },
        {
            icon: <GanttChart />,
            text: "Overview",
            link: "/dashboard/overview"
        },
        {
            icon: <UserSearch />,
            text: "Profile",
            link: "/dashboard/profile"
        },
        {
            icon: <Newspaper />,
            text: "Experiences",
            link: "/dashboard/experiences"
        },
        {
            icon: <Power />,
            text: "Skills",
            link: "/dashboard/skills"
        },
        {
            icon: <FileCheck2 />,
            text: "Projects",
            link: "/dashboard/projects"
        },
        {
            icon: <Medal />,
            text: "Achievements",
            link: "/dashboard/achievements"
        },
        {
            icon: <Phone />,
            text: "Contact",
            link: "/dashboard/contact"
        },

    ],

    SKILLS: [
        {
            name: "React",
            levelOfProficiency: "Intermediate"
        },
        {
            name: "JavaScript",
            levelOfProficiency: "Beginner"
        },
        {
            name: "HTML",
            levelOfProficiency: "Advanced"
        },
        {
            name: "Node.js",
            levelOfProficiency: "Expert"
        },
        {
            name: "Express",
            levelOfProficiency: "Intermediate"
        },
        {
            name: "Mongo DB",
            levelOfProficiency: "Beginner"
        },
    ],

    OVERVIEW: [
        {
            icon: <Sparkles />,
            text: "Experiences",
            total: 19,
            link: "/experiences"
        },
        {
            icon: <FileBadge />,
            text: "Achievements",
            total: 10,
            link: "/achievements"
        },
        {
            icon: <UserCog />,
            text: "Skills",
            total: 23,
            link: "/skills"
        },
        {
            icon: <Target />,
            text: "Projects",
            total: 30,
            link: "/projects"
        },
        {
            icon: <SmartphoneNfc />,
            text: "Contact Details",
            total: 4,
            link: "/contact-information"
        }
    ],
    EXPERIENCES: [
        {
            jobTitle: "Software Engineer",
            company: "Tech Innovators Inc.",
            description: "Developed and maintained web applications using React and Node.js.",
            startDate: "January 2019",
            endDate: "December 2021"
        },
        {
            jobTitle: "Frontend Developer",
            company: "Creative Solutions Ltd.",
            description: "Designed and implemented user interfaces with HTML, CSS, and JavaScript.",
            startDate: "March 2017",
            endDate: "December 2018"
        },
        {
            jobTitle: "Backend Developer",
            company: "DataStream Corp.",
            description: "Built and optimized server-side logic and database schemas with Python and PostgreSQL.",
            startDate: "June 2020",
            endDate: "Present"
        },
        {
            jobTitle: "Full Stack Developer",
            company: "Innovative Webworks",
            description: "Led a team in developing full-stack solutions for e-commerce platforms using MERN stack.",
            startDate: "September 2015",
            endDate: "February 2017"
        },
        {
            jobTitle: "Junior Developer",
            company: "Startup Hub",
            description: "Assisted in developing and testing new features for the company's main product.",
            startDate: "July 2013",
            endDate: "August 2015"
        }
    ],
    ACHIEVEMENTS: [
        {
            id: 1,
            title: "Outstanding Employee of the Year",
            description: "Awarded for exemplary performance and dedication.",
            year: 2023,
        },
        {
            id: 2,
            title: "Certified Professional in Web Development",
            description: "Achieved certification after completing advanced courses.",
            year: 2022,
        },
        {
            id: 3,
            title: "Dean's List Honors",
            description: "Recognized for academic excellence in the Computer Science department.",
            year: 2021,
        },
        {
            id: 3,
            title: "Dean's List Honors",
            description: "Recognized for academic excellence in the Computer Science department.",
            year: 2021,
        },
        {
            id: 3,
            title: "Dean's List Honors",
            description: "Recognized for academic excellence in the Computer Science department.",
            year: 2021,
        },
    ],
    CONTACT: [
        {
          id: 1,
          type: "Email",
          value: "example@example.com",
          icon: <MailCheck/>
        },
        {
          id: 2,
          type: "Phone Number",
          value: "+1 123-456-7890",
          icon: <PhoneIncoming/>,
        },
        {
          id: 3,
          type: "LinkedIn Profile",
          value: "linkedin.com/in/example",
          icon: <Linkedin/>,
        },
        {
          id: 4,
          type: "GitHub",
          value: "github.com/in/example",
          icon: <Cat/>,
        },
        {
          id: 5,
          type: "Netlify",
          value: "netlify.com/in/example",
          icon: <Box />,
        },
      ],
      PROJECTS: [
        {
          projectName: "Personal Portfolio",
          description: "A personal portfolio website to showcase my projects and skills.",
          technologies: ["React", "Tailwind CSS", "Framer Motion"],
          githubLink: "https://github.com/yourusername/personal-portfolio",
          imageUrl: "https://via.placeholder.com/150",
        },
        {
          projectName: "E-commerce Store",
          description: "An e-commerce store built with modern web technologies.",
          technologies: ["Next.js", "Tailwind CSS", "MongoDB"],
          githubLink: "https://github.com/yourusername/ecommerce-store",
          imageUrl: "https://via.placeholder.com/150",
        },
        {
          projectName: "Chat Application",
          description: "A real-time chat application with authentication and database integration.",
          technologies: ["React", "Node.js", "Socket.io", "Express"],
          githubLink: "https://github.com/yourusername/chat-application",
          imageUrl: "https://via.placeholder.com/150",
        },
        {
          projectName: "Weather App",
          description: "A weather forecasting app using a public API.",
          technologies: ["Vue.js", "Tailwind CSS", "OpenWeather API"],
          githubLink: "https://github.com/yourusername/weather-app",
          imageUrl: "https://via.placeholder.com/150",
        },
        {
          projectName: "Blog Platform",
          description: "A full-featured blog platform with markdown support.",
          technologies: ["Gatsby", "GraphQL", "Tailwind CSS"],
          githubLink: "https://github.com/yourusername/blog-platform",
          imageUrl: "https://via.placeholder.com/150",
        },
      ],

}

