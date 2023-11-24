import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
 
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes.jsx';
import AuthContext from './Context/AuthContext.jsx';
import { QueryClient, QueryClientProvider,  } from '@tanstack/react-query';

 const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext>
      <QueryClientProvider client={queryClient}>      
      <RouterProvider router={router} />     
    </QueryClientProvider>
     </AuthContext>
   
  </React.StrictMode>,
)
