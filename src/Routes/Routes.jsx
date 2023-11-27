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
import ClassDetails from "../Pages/Classes/ClassDetails";
import TrainerDetails from "../Pages/Trainer/TrainerDetails";
import ApplyTrainer from "../Pages/Trainer/ApplyTrainer";
import Pricing from "../Pages/Trainer/Pricing";
import DashboardLayouts from "../Layouts/DashboardLayouts";
import ShowSubscribe from "../Pages/Dashboard/ShowSubscribe";
import AllTrainer from "../Pages/Dashboard/AllTrainer";
import AppliedTrainer from "../Pages/Dashboard/AppliedTrainer";
import Allusers from "../Pages/Dashboard/Allusers";
import PrivateRoute from "./PrivateRoutes";
import ManageMember from "../Pages/Dashboard/ManageMember";


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
      path: '/classes/:id',
      element: <ClassDetails />,
      loader:({params})=> fetch(`http://localhost:5000/gymClasses/${params.id}`)
    },
    {
      path: '/trainer',
      element:<Trainer />
    },
    {
      path: '/trainerApply',
      element:<PrivateRoute><ApplyTrainer /></PrivateRoute>
    },
    {
      path: '/pricing',
      element:<Pricing />
    },
    {
      path: '/trainer/:id',
      element: <PrivateRoute><TrainerDetails /></PrivateRoute>,
      loader:({params})=>fetch(`http://localhost:5000/trainer/${params.id}`)
    },
    {
      path: '/blogs/:id',
      element: <BlogDetails />,
      loader: ({params})=> fetch(`http://localhost:5000/blogs/${params?.id}`)
    },
    {
      path: '/dashboard',
      element: <DashboardLayouts />,
      children: [
        {
          path: '/dashboard',
          element:<Dashboard />
        },
        //admin
        {
          path: '/dashboard/sub',
          element:<ShowSubscribe />
        },
        {
          path: '/dashboard/allTrainer',
          element:<AllTrainer />
        },
        {
          path: '/dashboard/appliedTrainer',
          element:<AppliedTrainer />
        },
        {
          path: '/dashboard/allUsers',
          element:<Allusers />
        },
        //trainer
        {
          path: '/dashboard/mngMember',
          element:<ManageMember />
        },
      ]
    },
  ]
  
}
  
])