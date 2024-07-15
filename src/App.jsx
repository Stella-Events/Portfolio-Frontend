import { createBrowserRouter, RouterProvider } from "react-router-dom"

import SignUp from "./pages/signUp"
import Signin from "./pages/signIn"
import Landing from "./pages/landing"
import Dashboardlayout from "./pages/dashboard/layout"
import AboutMe from "./pages/dashboard/pages/aboutMe"
import Resume from "./pages/dashboard/pages/resume"
import Projects from "./pages/dashboard/pages/projects"
import Home from "./pages/dashboard/pages/home"
import Contact from "./pages/dashboard/pages/contact"
import Skills from "./pages/dashboard/pages/skills"
import Achievements from "./pages/dashboard/pages/achievements"
import PortfolioLayout from "./pages/portfolio/layout"
import Welcome from "./pages/portfolio/pages/welcome"
import Profile from "./pages/portfolio/pages/profile"
import Education from "./pages/portfolio/pages/education"
import Achievement from "./pages/portfolio/pages/achievement"
import Projectss from "./pages/portfolio/pages/projectss"
import Volunteering from "./pages/portfolio/pages/volunteering"
import Skillss from "./pages/portfolio/pages/skillss"


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
        path: "about-me",
        element: <AboutMe />
      },
      {
        path: "resume",
        element: <Resume />
      },
      {
        path: "skills",
        element: <Skills />
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
        element: <Profile/>
      },
      {
        path: "education",
        element: <Education/>
      },
      {
        path: "achievements",
        element: <Achievement/>
      },
      {
        path: "skillss",
        element: <Skillss/>
      },
      {
        path: "projectss",
        element: <Projectss/>
      },
      {
        path: "Volunteering",
        element: <Volunteering/>
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