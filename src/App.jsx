import { createBrowserRouter, RouterProvider } from "react-router-dom"

import SignUp from "./pages/signUp"
import Signin from "./pages/signIn"
import Landing from "./pages/landing"
import Dashboardlayout from "./pages/dashboard/layout"
import Profile from "./pages/dashboard/pages/profile"
import Projects from "./pages/dashboard/pages/projects"
import Home from "./pages/dashboard/pages/home"
import Contact from "./pages/dashboard/pages/contact"
import Skills from "./pages/dashboard/pages/skills"
import Achievements from "./pages/dashboard/pages/achievements"
import Overview from "./pages/dashboard/pages/overview"
import AddProfile from "./pages/dashboard/pages/addProfile"
import AddSkills from "./pages/dashboard/pages/addSkills"
import Experiences from "./pages/dashboard/pages/experiences"
import PortfolioLayout from "./pages/portfolio/layout"
import PortfolioWelcome from "./pages/portfolio/pages/welcome"
import PortfolioProfile from "./pages/portfolio/pages/profile"
import PortfolioEducation from "./pages/portfolio/pages/education"
import PortfolioAchievement from "./pages/portfolio/pages/achievement"
import PortfolioProjects from "./pages/portfolio/pages/projectss"
import PortfolioVolunteering from "./pages/portfolio/pages/volunteering"
import PortfolioSkills from "./pages/portfolio/pages/skillss"



const router = createBrowserRouter([
  { path: "/", element: <Landing /> },

  { path: "signin", element: <Signin /> },

  { path: "signup", element: <SignUp /> },

  {
    path: "/dashboard", element: <Dashboardlayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "overview",
        element: <Overview/>
      },

      {
        path: "profile",
        element: <Profile/>
      },
      {
        path: "profile/add-profile",
        element: <AddProfile/>
      },
      {
        path: "experiences",
        element: <Experiences/>
      },
      {
        path: "skills",
        element: <Skills />
      },
      {
        path: "skills/add-skill",
        element: <AddSkills/>
      },
      {
        path: "projects",
        element: <Projects/>
      },
      {
        path: "achievements",
        element: <Achievements />
      },
      {
        path: "contact",
        element: <Contact />
      },
    ]
  },



  
  {
    path: "/portfolio", element: <PortfolioLayout/>,
    children: [
      {
        index: true,
        element: <Welcome/>
      },
      {
        path: "profile",
        element: <PortfolioProfile/>
      },
      {
        path: "education",
        element: <PortfolioEducation/>
      },
      {
        path: "achievements",
        element: <PortfolioAchievement/>
      },
      {
        path: "skillss",
        element: <PortfolioSkills/>
      },
      {
        path: "projectss",
        element: <PortfolioProjects/>
      },
      {
        path: "Volunteering",
        element: <PortfolioVolunteering/>
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