
import './App.css'
import {  createHashRouter, RouterProvider } from 'react-router-dom'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'

import OTP from './pages/OTP/OTP'
import DashboardLayout from './pages/DashboardLayout/DashboardLayout'
import ItemManagment from './pages/ItemManagment/ItemManagment'
import Dashboard from './pages/Dashboard/Dashboard'


let router = createHashRouter([

 
    { index: true, element: <DashboardLayout/> },
    { path: "/signup", element: <Register/> },
    { path: "/signin", element: <Login/> },
    { path: "/otp", element: <OTP/> },
    {path: "/dashboard" , element: <DashboardLayout/> , children: [

      { index: true, element: <Dashboard/> },
      { path: "/dashboard/orders", element: <div>Orders</div> },
      { path: "/dashboard/branch", element: <div>Branch</div> },
      { path: "/dashboard/inventory", element: <div>Inventory</div> },
      { path: "/dashboard/itemmanagement", element: <ItemManagment/> },
    ]
    },

 
  ]
)
  
 export default function App() {
 
 
 
   return <>      <RouterProvider router={router}>

   </RouterProvider>
 
 
 
   </>
 }



//  cd shortcuts/client
// git init
// git add .
// git commit -m "Initial commit - Client setup"
// git remote add origin https://github.com/username/shortcuts-client.git
// git branch -M main
// git push -u origin main