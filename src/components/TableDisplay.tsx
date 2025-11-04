import { MdModeEdit, MdOutlineFilterAlt } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";


export default function TableDisplay() {



  return <>
  
        <div className="bg-white shadow-xl rounded-lg my-5 p-5">
  
  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
    {/* Title */}
    <h1 className="text-xl lg:text-2xl font-semibold">
      Item Management
    </h1>

    {/* Buttons */}
    <div className="flex flex-wrap gap-3">
      <button className="cursor-pointer flex items-center gap-2 border border-[#162556] px-3 py-2 rounded-lg text-sm hover:bg-red-700 hover:text-white transition">
        Delete Item <RiDeleteBin6Line />
      </button>

      <button className="cursor-pointer flex items-center gap-2 border border-[#162556] px-3 py-2 rounded-lg text-sm hover:bg-[#162556] hover:text-white transition">
        Add Item +
      </button>

      <button className="border border-[#162556] p-2 rounded-full hover:bg-[#162556] hover:text-white cursor-pointer transition">
        <MdOutlineFilterAlt size={18} />
      </button>

      <button className="border border-[#162556] p-2 rounded-full hover:bg-[#162556] hover:text-white cursor-pointer transition">
        <MdModeEdit size={18} />
      </button>
    </div>
  </div>

  {/* Table */}
  <div className="overflow-x-auto">
    {/* Header */}
    <div className="hidden lg:grid grid-cols-7 gap-6 font-semibold text-gray-700 border-b border-gray-300 pb-4 mb-4 px-2">
      <div className="min-w-24">Item ID</div>
      <div className="min-w-28">PR Name</div>
      <div className="min-w-24">Src</div>
      <div className="min-w-20">Qty</div>
      <div className="min-w-24">WH</div>
      <div className="min-w-20">Status</div>
      <div className="min-w-28">Last Sync</div>
    </div>

    {/* Row 1 */}
    <div className="grid grid-cols-1 lg:grid-cols-7 gap-6 py-5 px-2 border-b border-gray-200">
      <div className="min-w-24">
        <span className="md:hidden font-semibold text-gray-600 text-xs block mb-1">Item ID</span>
        <div className="font-semibold md:font-normal text-gray-900">BBXBXN</div>
      </div>
      <div className="min-w-28">
        <span className="md:hidden font-semibold text-gray-600 text-xs block mb-1">Product</span>
        <div className="text-gray-900">iPhone</div>
      </div>
      <div className="min-w-24">
        <span className="md:hidden font-semibold text-gray-600 text-xs block mb-1">Source</span>
        <div className="text-gray-900">Vendor</div>
      </div>
      <div className="min-w-20">
        <span className="md:hidden font-semibold text-gray-600 text-xs block mb-1">Qty</span>
        <div className="text-gray-900">25</div>
      </div>
      <div className="min-w-24">
        <span className="md:hidden font-semibold text-gray-600 text-xs block mb-1">Warehouse</span>
        <div className="text-gray-900">Jeddah</div>
      </div>
      <div className="min-w-20">
        <span className="md:hidden font-semibold text-gray-600 text-xs block mb-1">Status</span>
        <div className="text-green-600 font-semibold">In Stock</div>
      </div>
      <div className="min-w-28">
        <span className="md:hidden font-semibold text-gray-600 text-xs block mb-1">Last Sync</span>
        <div className="text-gray-900">Oct 28, 2025</div>
      </div>
    </div>

    {/* Row 2 */}
    <div className="grid grid-cols-1 lg:grid-cols-7 gap-6 py-5 px-2 border-b border-gray-200">
      <div className="min-w-24">
        <span className="md:hidden font-semibold text-gray-600 text-xs block mb-1">Item ID</span>
        <div className="font-semibold md:font-normal text-gray-900">ORDERID01</div>
      </div>
      <div className="min-w-28">
        <span className="md:hidden font-semibold text-gray-600 text-xs block mb-1">Product</span>
        <div className="text-gray-900">Samsung S23</div>
      </div>
      <div className="min-w-24">
        <span className="md:hidden font-semibold text-gray-600 text-xs block mb-1">Source</span>
        <div className="text-gray-900">Warehouse</div>
      </div>
      <div className="min-w-20">
        <span className="md:hidden font-semibold text-gray-600 text-xs block mb-1">Qty</span>
        <div className="text-gray-900">14</div>
      </div>
      <div className="min-w-24">
        <span className="md:hidden font-semibold text-gray-600 text-xs block mb-1">Warehouse</span>
        <div className="text-gray-900">Jeddah</div>
      </div>
      <div className="min-w-20">
        <span className="md:hidden font-semibold text-gray-600 text-xs block mb-1">Status</span>
        <div className="text-yellow-600 font-semibold">Pending</div>
      </div>
      <div className="min-w-28">
        <span className="md:hidden font-semibold text-gray-600 text-xs block mb-1">Last Sync</span>
        <div className="text-gray-900">Oct 30, 2025</div>
      </div>
    </div>

    {/* Row 3 */}
    <div className="grid grid-cols-1 lg:grid-cols-7 gap-6 py-5 px-2 border-b border-gray-200">
      <div className="min-w-24">
        <span className="md:hidden font-semibold text-gray-600 text-xs block mb-1">Item ID</span>
        <div className="font-semibold md:font-normal text-gray-900">ORDERID02</div>
      </div>
      <div className="min-w-28">
        <span className="md:hidden font-semibold text-gray-600 text-xs block mb-1">Product</span>
        <div className="text-gray-900">Samsung S23</div>
      </div>
      <div className="min-w-24">
        <span className="md:hidden font-semibold text-gray-600 text-xs block mb-1">Source</span>
        <div className="text-gray-900">Warehouse</div>
      </div>
      <div className="min-w-20">
        <span className="md:hidden font-semibold text-gray-600 text-xs block mb-1">Qty</span>
        <div className="text-gray-900">14</div>
      </div>
      <div className="min-w-24">
        <span className="md:hidden font-semibold text-gray-600 text-xs block mb-1">Warehouse</span>
        <div className="text-gray-900">Jeddah</div>
      </div>
      <div className="min-w-20">
        <span className="md:hidden font-semibold text-gray-600 text-xs block mb-1">Status</span>
        <div className="text-yellow-600 font-semibold">Pending</div>
      </div>
      <div className="min-w-28">
        <span className="md:hidden font-semibold text-gray-600 text-xs block mb-1">Last Sync</span>
        <div className="text-gray-900">Oct 30, 2025</div>
      </div>
    </div>
  </div>

</div>
      
  
  </>
}
