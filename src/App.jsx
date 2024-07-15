import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Portfolio from "./pages/portfolio"
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


const router = createBrowserRouter([
  { path: "/", element: <Landing /> },

  { path: "signin", element: <Signin /> },

  { path: "signup", element: <SignUp /> },

  {
    path: "/dashboard", element: <Dashboardlayout />,
    children: [
      {
        index: true,
        element: <Home/>
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
        element: <Skills/>
      },
      {
        path: "skills/add-skill",
        element: <AddSkills/>
      },
      {
        path: "projects",
        element: <Projects />
      },
      {
        path: "achievements",
        element: <Achievements/>
      },
      {
        path: "contact",
        element: <Contact/>
      },
    ]
  },

  { path: "/portfolio", element: <Portfolio /> },
])


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App