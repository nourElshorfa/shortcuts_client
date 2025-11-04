import { useState } from "react";
import { FaBox, FaCog, FaSignOutAlt, FaShoppingCart, FaTachometerAlt, FaUsers } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { TfiHeadphoneAlt } from "react-icons/tfi";


export default function DashboardLayoutSidebar() {

  let navigate = useNavigate()

    const [expandedMenus, setExpandedMenus] = useState<{ [key: string]: boolean }>({});

    function logout() {

        localStorage.removeItem("token");
        navigate("/signin");
      }

    const toggleMenu  = (id : string) => {
        setExpandedMenus((prev) => ({
          ...prev,
          [id]: !prev[id],
        }));
      };

  return (
    <div className="h-screen shadow-2xl bg-gray-50 border-r border-gray-200 flex flex-col">
      <div className="p-6 border-b border-gray-200">
      <h1 className="text-[#18234D] text-center lg:text-3xl ">
              SHORT <span className="text-[#F47820]">CUTS</span>
            </h1>

      </div>

      {/* Dashboard */}
      <div className="flex-1 overflow-y-auto py-4">
        <Link to="/dashboard" className="w-full px-6 py-3 flex items-center gap-3 text-gray-600  hover:bg-blue-950 hover:text-white ">
          <FaTachometerAlt size={15} className="text-[#A5A5A5]" />
          <span className="text-sm">Dashboard</span>
        </Link>


      {/* Item Mangement */}
        <Link to="/dashboard/itemmanagement" className="w-full px-6 py-3 flex items-center gap-3  text-gray-600  hover:bg-blue-950 hover:text-white ">
          <FaBox size={12} className="text-[#A5A5A5]" />
          <span className="font-medium">Item Management</span>
        </Link>

     

     {/* Orders */}
        <button
          onClick={() => toggleMenu("orders")}
          className="w-full flex items-center justify-between px-5 py-3 rounded-lg text-gray-700 hover:bg-blue-950 hover:text-white transition"
        >
          <div className="flex items-center gap-3">
            <FaShoppingCart size={16} className="text-[#A5A5A5] ms-0.5" />
            <span className="font-medium">Orders</span>
          </div>
          {expandedMenus["orders"] ? <FaChevronUp /> : <FaChevronDown />}
        </button>

        {expandedMenus["orders"] && (
          <div className="mt-2 pl-10 flex flex-col gap-2 text-gray-600">
            <Link
              to="/dashboard/orders"
              className="hover:text-blue-800 transition"
            >
              All Orders
            </Link>
            <Link
              to="/dashboard/orders/new"
              className="hover:text-blue-800 transition"
            >
              Add New Order
            </Link>
          </div>
        )}

         {/* Stock */}
        <button
          onClick={() => toggleMenu("stock")}
          className="w-full flex items-center justify-between px-5 py-3 rounded-lg text-gray-700 hover:bg-blue-950 hover:text-white transition"
        >
          <div className="flex items-center gap-3">
            <FaBox size={16} className="text-[#A5A5A5] ms-0.5" />
            <span className="font-medium">Stock</span>
          </div>
          {expandedMenus["stock"] ? <FaChevronUp /> : <FaChevronDown />}
        </button>

        {expandedMenus["stock"] && (
          <div className="mt-2 pl-10 flex flex-col gap-2 text-gray-600">
            <Link
              to="/dashboard/stock"
              className="hover:text-blue-800 transition"
            >
              Generate Stock Code
            </Link>
            <Link
              to="/dashboard/orders/stockshelf"
              className="hover:text-blue-800 transition"
            >
              Generate Shelf Code
            </Link>
          </div>
        )}
     

        {/* Users */}
        <Link to="/dashboard/users" className="w-full px-6 py-3 flex items-center gap-3 text-gray-600  hover:bg-blue-950 hover:text-white ">
          <FaUsers size={15} className="text-[#A5A5A5]" />
          
          <span className="font-medium">Users</span>
        </Link>

        {/* Merchants */}

        <Link to="/dashboard/merchants" className="w-full px-6 py-3 flex items-center gap-3 text-gray-600  hover:bg-blue-950 hover:text-white ">
          <FaBox size={12} className="text-[#A5A5A5]"/>
          <span className="font-medium">Merchants</span>
        </Link>

        {/* Settings */}

        <Link to="/dashboard/settings" className="w-full px-6 py-3 flex items-center gap-3 text-gray-600  hover:bg-blue-950 hover:text-white ">
          <FaCog size={15} className="text-[#A5A5A5]" />
          <span className="font-medium">Settings</span>
        </Link>
      </div>


      {/* Help Center and Log Out */}

      <div className="border-t border-gray-200 py-4">
        <Link to="/help" className="w-full px-6 py-3 flex items-center gap-3 text-gray-600  hover:bg-blue-950 hover:text-white ">
          <TfiHeadphoneAlt size={15} className="text-[#A5A5A5]" />
          <span className="font-medium">Help Center</span>
        </Link>

        <div onClick={  ()=> logout() }   className="w-full px-6 py-3 flex items-center gap-3 text-red-500 hover:bg-red-200 ">
         
        <FaSignOutAlt   size={15} className="text-[#A5A5A5]" />
          <span className="font-medium">Log Out</span>
        </div>
      </div>


    </div>
  );
}