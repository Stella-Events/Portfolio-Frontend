import { Box, Cat, FileBadge, FileCheck2, GanttChart, GraduationCap, HandHeart, Heart, Home, Linkedin, MailCheck, Medal, Newspaper, Phone, PhoneIncoming, Power, School, Settings2, SmartphoneNfc, Sparkles, Target, UserCog, UserSearch } from "lucide-react";
import project1 from "../../../../assets/images/project1.jpg"
import project2 from "../../../../assets/images/project2.jpg"
import project3 from "../../../../assets/images/project3.jpg"
import project4 from "../../../../assets/images/project4.jpg"
import project5 from "../../../../assets/images/project5.jpg"


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
            icon: <GraduationCap />,
            text: "Education",
            link: "/dashboard/education"
        },
        {
            icon: <Medal />,
            text: "Achievements",
            link: "/dashboard/achievements"
        },
        {
            icon: <Settings2 />,
            text: "Skills",
            link: "/dashboard/skills"
        },
        {
            icon: <FileCheck2 />,
            text: "Projects",
            link: "/dashboard/projects"
        },

        {
            icon: <HandHeart />,
            text: "Volunteering",
            link: "/dashboard/volunteering"
        },

        // {
        //     icon: <Phone />,
        //     text: "Contact",
        //     link: "/dashboard/contact"
        // },

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

    EDUCATION: [
        {
            schoolName: "Harvard University",
            program: "Computer Science",
            qualification: "Bachelor's Degree",
            grade: "A",
            location: "Cambridge, MA",
            startDate: "2014-09-01",
            endDate: "2018-06-01"
        },
        {
            schoolName: "Stanford University",
            program: "Software Engineering",
            qualification: "Master's Degree",
            grade: "A",
            location: "Stanford, CA",
            startDate: "2018-09-01",
            endDate: "2020-06-01"
        },
        {
            schoolName: "Massachusetts Institute of Technology",
            program: "Data Science",
            qualification: "PhD",
            grade: "A+",
            location: "Cambridge, MA",
            startDate: "2020-09-01",
            endDate: "2023-06-01"
        },
        {
            schoolName: "University of California, Berkeley",
            program: "Information Technology",
            qualification: "Bachelor's Degree",
            grade: "B",
            location: "Berkeley, CA",
            startDate: "2012-09-01",
            endDate: "2016-06-01"
        },
        {
            schoolName: "University of Oxford",
            program: "Artificial Intelligence",
            qualification: "Master's Degree",
            grade: "A+",
            location: "Oxford, UK",
            startDate: "2016-09-01",
            endDate: "2018-06-01"
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

    VOLUNTEERING: [
        {
            organization: "Community Health Initiative",
            description: "Providing health check-ups and medical supplies to underprivileged communities.",
            skills: ["First Aid", "Public Speaking"],
            role: "Volunteer Coordinator",
            responsibility: "Organize volunteer schedules and manage community outreach.",
            location: "Springfield",
            startDate: "2020-01-15",
            endDate: "2020-12-15",
            projectName: "Health Outreach Program"
        },
        {
            organization: "Environmental Awareness Group",
            description: "Raising awareness about environmental conservation and organizing cleanup drives.",
            skills: ["Event Planning", "Communication"],
            role: "Event Organizer",
            responsibility: "Plan and execute awareness events and cleanup drives.",
            location: "Greenville",
            startDate: "2019-03-01",
            endDate: "2019-11-30",
            projectName: "Green Earth Campaign"
        },
        {
            organization: "Literacy for All",
            description: "Teaching basic literacy and numeracy skills to adults.",
            skills: ["Teaching", "Patience"],
            role: "Literacy Tutor",
            responsibility: "Teach adults basic reading, writing, and math skills.",
            location: "Riverdale",
            startDate: "2021-05-20",
            endDate: "2022-05-20",
            projectName: "Adult Literacy Program"
        },
        {
            organization: "Animal Rescue Foundation",
            description: "Rescuing and rehabilitating stray animals.",
            skills: ["Animal Care", "Teamwork"],
            role: "Animal Care Volunteer",
            responsibility: "Assist with animal rescue operations and care for animals at the shelter.",
            location: "Lakeside",
            startDate: "2022-07-10",
            endDate: "2022-12-31",
            projectName: "Stray Animal Rescue"
        },
        {
            organization: "Tech for Good",
            description: "Providing technical education and resources to underrepresented communities.",
            skills: ["Coding", "Mentorship"],
            role: "Tech Mentor",
            responsibility: "Teach coding and technical skills to students.",
            location: "Techville",
            startDate: "2023-02-01",
            endDate: "2023-12-01",
            projectName: "Code for Change"
        }
    ],

    CONTACT: [
        {
            id: 1,
            type: "Email",
            value: "example@example.com",
            icon: <MailCheck />
        },
        {
            id: 2,
            type: "Phone Number",
            value: "+1 123-456-7890",
            icon: <PhoneIncoming />,
        },
        {
            id: 3,
            type: "LinkedIn Profile",
            value: "linkedin.com/in/example",
            icon: <Linkedin />,
        },
        {
            id: 4,
            type: "GitHub",
            value: "github.com/in/example",
            icon: <Cat />,
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
            imageUrl: project1,
        },
        {
            projectName: "E-commerce Store",
            description: "An e-commerce store built with modern web technologies.",
            technologies: ["Next.js", "Tailwind CSS", "MongoDB"],
            githubLink: "https://github.com/yourusername/ecommerce-store",
            imageUrl: project2,
        },
        {
            projectName: "Chat Application",
            description: "A real-time chat application with authentication and database integration.",
            technologies: ["React", "Node.js", "Socket.io", "Express"],
            githubLink: "https://github.com/yourusername/chat-application",
            imageUrl: project3,
        },
        {
            projectName: "Weather App",
            description: "A weather forecasting app using a public API.",
            technologies: ["Vue.js", "Tailwind CSS", "OpenWeather API"],
            githubLink: "https://github.com/yourusername/weather-app",
            imageUrl: project4,
        },
        {
            projectName: "Blog Platform",
            description: "A full-featured blog platform with markdown support.",
            technologies: ["Gatsby", "GraphQL", "Tailwind CSS"],
            githubLink: "https://github.com/yourusername/blog-platform",
            imageUrl: project5,
        },
    ],

}

