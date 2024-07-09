import { createBrowserRouter, RouterProvider } from "react-router-dom"


import Dashboard from "./pages/dashboard"
import Portfolio from "./pages/portfolio"
import SignUp from "./pages/signUp"
import Signin from "./pages/signIn"
import Landing from "./pages/landing"


const router = createBrowserRouter([
  { path: "/", element: <Landing /> },

  { path: "signin", element: <Signin /> },

  { path: "signup", element: <SignUp /> },

  { path: "/dashboard", element: <Dashboard /> },

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