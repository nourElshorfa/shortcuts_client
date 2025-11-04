
import './App.css'
import {  createHashRouter, RouterProvider } from 'react-router-dom'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import OTP from './pages/OTP/OTP'
import DashboardLayout from './pages/DashboardLayout/DashboardLayout'
import ItemManagment from './pages/ItemManagment/ItemManagment'
import Dashboard from './pages/Dashboard/Dashboard'
import Stock from './pages/Stock/Stock'
import NotFound from './pages/NotFound/NotFound'
import AddItem from './pages/AddItem/AddItem'


let router = createHashRouter([
  { index: true, element: <DashboardLayout /> },
  { path: "/signup", element: <Register /> },
  { path: "/signin", element: <Login /> },
  { path: "/otp", element: <OTP /> },
  { path: "*", element: <NotFound /> },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "orders", element: <div>Orders</div> },           // بدل /dashboard/orders
      { path: "branch", element: <div>Branch</div> },           // بدل /dashboard/branch
      { path: "stock", element: <Stock /> },                    // بدل /dashboard/inventory
      { path: "itemmanagement", element: <ItemManagment /> },   // بدل /dashboard/itemmanagement
      { path: "additem", element: <AddItem /> },   // بدل /dashboard/itemmanagement
    ]
  },
])
  
 export default function App() {
 
 
 
   return <>      <RouterProvider router={router}>
   </RouterProvider>
   </>
 }



//  cd shortcuts/client
// git init
// git add .
// git commit -m "Initial commit - client setup"
// git remote add origin https://github.com/username/shortcuts-client.git
// git branch -M main
// git push -u origin main

