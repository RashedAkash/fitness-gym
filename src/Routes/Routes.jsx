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
import AddClass from "../Pages/Dashboard/AddClass";
import AddNewForum from "../Pages/Dashboard/AddNewForum";
import RecomandedCls from "../Pages/Dashboard/RecomandedCls";
import ProfileSetting from "../Pages/Dashboard/ProfileSetting";
import Community from "../Pages/Community/Community";
import AdminRoute from "./AdminRoute";
import TrainerRoute from "./TrainerRoute";
import ActivityLog from "../Pages/Dashboard/ActivityLog";
import Payment from "../Pages/Dashboard/Payment";


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
      path: '/forum',
      element:<Community />
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
          element:<PrivateRoute><Dashboard /></PrivateRoute>
        },
        //admin
        {
          path: '/dashboard/sub',
           element:  <AdminRoute><ShowSubscribe /></AdminRoute>,
          // element: <ShowSubscribe />
        },
        {
          path: '/dashboard/allTrainer',
            element:<AllTrainer />
          //  element:<AllTrainer />
        },
        {
          path: '/dashboard/appliedTrainer',
           element:<AdminRoute><AppliedTrainer /></AdminRoute>
          // element:<AppliedTrainer />
        },
        {
          path: '/dashboard/allUsers',
           element:<AdminRoute><Allusers /></AdminRoute>
          // element:<Allusers />
        },
        {
          path: '/dashboard/payment',
          element:<Payment />
        },
        //trainer
        {
          path: '/dashboard/mngMember',
          element:<ManageMember />
        },
        
        {
          path: '/dashboard/addClass',
          element:<AddClass />
        },
        {
          path: '/dashboard/addForum',
          element:<AddNewForum />
        },
        //user
        {
          path: '/dashboard/recClass',
          element:<RecomandedCls />
        },
        {
          path: '/dashboard/profileSettings/',
          element: <ProfileSetting />,
          
        },
        {
          path: '/dashboard/activityLog',
          element:<ActivityLog />
        },
      ]
    },
  ]
  
},
  // {
  //     path: 'dashboard',
  //     element: <DashboardLayouts />,
  //     children: [
  //       {
  //         path: 'dashboard',
  //         element:<PrivateRoute><Dashboard /></PrivateRoute>
  //       },
  //       //admin
  //       {
  //         path: 'sub',
  //         // element:  <AdminRoute><ShowSubscribe /></AdminRoute>,
  //         element: <ShowSubscribe />
  //       },
  //       {
  //         path: 'allTrainer',
  //          element:<AdminRoute><AllTrainer /></AdminRoute>
  //         // element:<AllTrainer />
  //       },
  //       {
  //         path: 'appliedTrainer',
  //         // element:<AdminRoute><AppliedTrainer /></AdminRoute>
  //         element:<AppliedTrainer />
  //       },
  //       {
  //         path: 'allUsers',
  //         // element:<AdminRoute><Allusers /></AdminRoute>
  //         element:<Allusers />
  //       },
  //       //trainer
  //       {
  //         path: 'mngMember',
  //         element:<ManageMember />
  //       },
        
  //       {
  //         path: 'addClass',
  //         element:<AddClass />
  //       },
  //       {
  //         path: 'addForum',
  //         element:<AddNewForum />
  //       },
  //       //user
  //       {
  //         path: 'recClass',
  //         element:<RecomandedCls />
  //       },
  //       {
  //         path: 'profileSettings',
  //         element:<ProfileSetting />
  //       },
  //       {
  //         path: 'activityLog',
  //         element:<ActivityLog />
  //       },
  //     ]
  //   },
  
])