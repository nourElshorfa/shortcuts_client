import { FaBell } from "react-icons/fa";

export default function Navbar() {



  return <>
  
  <div className="bg-white shadow-xl rounded-lg my-2 p-3 mb-5 flex flex-col sm:flex-row items-center sm:justify-end gap-3">
  
  {/* Search input */}
  <input
    type="search"
    placeholder="🔍 search by order id"
    className="w-full sm:w-auto px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 placeholder-gray-400"
  />

  {/* Bell icon */}
  <FaBell className="text-gray-600 sm:mx-4" />

  {/* Username */}
  <h2 className="text-sm sm:text-base">Hello, Mostafa</h2>

  {/* Profile circle */}
  <div className="bg-red-900 h-7 w-7 rounded-full"></div>

</div>

  </>
}
