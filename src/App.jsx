import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Portfolio from "./pages/portfolio"
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
        path: "about-me",
        element: <AboutMe />
      },
      {
        path: "resume",
        element: <Resume />
      },
      {
        path: "skills",
        element: <Skills/>
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