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
import AddProfile from "./pages/dashboard/pages/forms/addProfile"
import AddSkills from "./pages/dashboard/pages/forms/addSkills"
import Experiences from "./pages/dashboard/pages/experiences"
import PortfolioLayout from "./pages/portfolio/layout"
import PortfolioWelcome from "./pages/portfolio/pages/welcome"
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
        path: "experiences/add-experience",
        element: <AddExperience />
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
    path: "/portfolio", element: <PortfolioLayout/>,
    children: [
      // {
      //   index: true,
      //   element: <PortfolioWelcome/>
      // },
      {
        index: true,
        element: <PortfolioProfile/>
      },
      {
        path: "experience",
        element: <PortfolioExperience/>
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