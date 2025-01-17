import { createBrowserRouter, RouterProvider } from "react-router-dom"
import SignUp from "./pages/signUp"
import Signin from "./pages/signIn"
import Landing from "./pages/landingPage/landing"
import Dashboardlayout from "./pages/dashboard/layout"
import Profile from "./pages/dashboard/pages/profile"
import Projects from "./pages/dashboard/pages/projects"
import Home from "./pages/dashboard/pages/home"
import Contact from "./pages/dashboard/pages/contact"
import Skills from "./pages/dashboard/pages/skills"
import Achievements from "./pages/dashboard/pages/achievements"
import Overview from "./pages/dashboard/pages/overview"
import AddProfile from "./pages/dashboard/pages/forms/addProfile"
import AddSkills from "./pages/dashboard/pages/forms/addSkills"
import PortfolioLayout from "./pages/portfolio/layout"
import PortfolioProfile from "./pages/portfolio/pages/profile"
import PortfolioExperience from "./pages/portfolio/pages/experience"
import PortfolioEducation from "./pages/portfolio/pages/education"
import PortfolioAchievement from "./pages/portfolio/pages/achievement"
import PortfolioProjects from "./pages/portfolio/pages/projectss"
import PortfolioVolunteering from "./pages/portfolio/pages/volunteering"
import PortfolioSkills from "./pages/portfolio/pages/skillss"
import AddExperience from "./pages/dashboard/pages/forms/addExperience"
import AddProject from "./pages/dashboard/pages/forms/addProject"
import Education from "./pages/dashboard/pages/education"
import AddEducation from "./pages/dashboard/pages/forms/addEducation"
import Volunteering from "./pages/dashboard/pages/volunteering"
import AddAchievements from "./pages/dashboard/pages/forms/addAchievements"
import AddVolunteering from "./pages/dashboard/pages/forms/addVolunteering"
import AddContact from "./pages/dashboard/pages/forms/addContact"
import LearnMore from "./pages/dashboard/pages/learnMore"
import { apiGetUserDetails } from "./services/preview";
import AuthLayout from "./pages/auth/layouts/authLayout"
import About from "./pages/landingPage/about"
import { toast } from "react-toastify"
import { AnimatePresence } from "framer-motion"
import PageTransition from "./pages/portfolio/components/transition"
import SkillEdit from "./pages/dashboard/pages/editDelete/skillEdit"
import ProfileEdit from "./pages/dashboard/pages/editDelete/profileEdit"
import Experiences from "./pages/dashboard/pages/experiences"



const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  {
    element: <AuthLayout />,
    children: [
      { path: "signin", element: <Signin /> },

      { path: "signup", element: <SignUp />, },
    ],
  },

  { path: "learnmore", element: <LearnMore /> },

  { path: "about", element: <About /> },

  {
    path: "/dashboard", element: <Dashboardlayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "overview",
        element: <Overview />
      },

      {
        path: "profile",
        element: <Profile />
      },
      {
        path: "profile/add-profile",
        element: <AddProfile />
      },
      { path: "/dashboard/profile/edit/:id", element: <ProfileEdit />},

      {
        path: "experiences",
        element: <Experiences />
      },
      {
        path: "experiences/add-experience",
        element: <AddExperience />
      },


      {
        path: "skills",
        element: <Skills />
      },
      {
        path: "skills/add-skill",
        element: <AddSkills />
      },
      { path: "/dashboard/skills/edit-skill/:id", element: <SkillEdit /> },

      {
        path: "projects",
        element: <Projects />
      },
      {
        path: "projects/add-project",
        element: <AddProject />
      },

      {
        path: "achievements",
        element: <Achievements />
      },
      {
        path: "achievements/add-achievement",
        element: <AddAchievements />
      },

      {
        path: "education",
        element: <Education />
      },
      {
        path: "education/add-education",
        element: <AddEducation />
      },

      {
        path: "volunteering",
        element: <Volunteering />
      },
      {
        path: "volunteering/add-volunteering",
        element: <AddVolunteering />
      },

      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "contact/add-contact",
        element: <AddContact />
      },
    ]
  },


  {
    path: "/portfolio/:username",
    element: (
      <AnimatePresence>
        <PageTransition>
          <PortfolioLayout />
        </PageTransition>
      </AnimatePresence>
    ),

    loader: async ({ params }) => {
      const username = params.username;
      try {
        const response = await apiGetUserDetails(username);
        const userProfileData = response?.data?.user;
        return userProfileData;
      } catch (error) {
        toast.error("An error occurred");
        return null;
      }
    },
    children: [

      {
        index: true,
        element: <PortfolioProfile />,
      },

      {
        path: "experience",
        element: <PortfolioExperience />
      },

      {
        path: "education",
        element: <PortfolioEducation />
      },

      {
        path: "achievements",
        element: <PortfolioAchievement />
      },

      {
        path: "skillss",
        element: <PortfolioSkills />
      },

      {
        path: "projectss",
        element: <PortfolioProjects />
      },

      {
        path: "Volunteering",
        element: <PortfolioVolunteering />
      },
    ]
  },


])


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App