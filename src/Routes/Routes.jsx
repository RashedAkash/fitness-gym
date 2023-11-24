import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import Gallery from "../Pages/Gallery/Gallery";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Classes from "../Pages/Classes/Classes";
import Trainer from "../Pages/Trainer/Trainer";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ErrorPage from "../Pages/Error/ErrorPage";
import BlogDetails from "../Pages/BlogDetails/BlogDetails";

export const router = createBrowserRouter([{
  path: '/',
  element: <MainLayouts />,
  errorElement:<ErrorPage />,
  children: [
    {
      path: '/',
      element:<Home />
    },
    {
      path: '/gallery',
      element:<Gallery />
    },
    {
      path: '/login',
      element:<Login />
    },
    {
      path: '/signUp',
      element:<SignUp />
    },
    {
      path: '/classes',
      element:<Classes />
    },
    {
      path: '/trainer',
      element:<Trainer />
    },
    {
      path: '/blogs/:id',
      element: <BlogDetails />,
      loader: ({params})=> fetch(`http://localhost:5000/blogs/${params?.id}`)
    },
    {
      path: '/dashboard',
      element:<Dashboard />
    },
  ]
  
}
  
])