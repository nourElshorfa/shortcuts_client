import { Outlet } from "react-router-dom";
import DashboardLayoutSidebar from "../../components/Dashboardsidebar";
import Navbar from "../../components/Navbar";


export default function DashboardLayout() {








  return <>
  
<div className="mx-auto w-[95%]">

  <div className="grid grid-cols-9 gap-2">

    <div className="col-span-9 md:col-span-2 ">
    <DashboardLayoutSidebar />
    </div>

    <div className="col-span-9 md:col-span-7">
    <div className="p-3">
      <Navbar />
    <Outlet />
      </div>
    </div>

  </div>
</div>

  
  
  </>



}
