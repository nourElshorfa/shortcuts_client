import { CiCreditCard2 } from "react-icons/ci"

export default function DataDetails() {
  return <>
   <div className="grid grid-cols-6 md:grid-cols-12 bg-white shadow-xl rounded-lg my-2 p-5">
      
      <div className="col-span-3 md:col-span-3 border border-gray-200 p-2">

        <div className="flex items-center gap-2">
       <p>23545.5</p>
       <CiCreditCard2 className="text-[#CB8954] "/>

        </div>
        <h2>Total items</h2>
        <p className="text-[#C1C1C1] text-sm">
          + 3.9 % this week
        </p>
      </div>

      <div className="col-span-3 md:col-span-3 border border-gray-200 p-2">

<div className="flex items-center gap-2">
<p>23545.5</p>
<CiCreditCard2 className="text-[#CB8954] "/>

</div>
<h2>Total items</h2>
<p className="text-[#C1C1C1] text-sm">
  + 3.9 % this week
</p>
</div>


<div className="col-span-3 md:col-span-3 border border-gray-200 p-2">

<div className="flex items-center gap-2">
<p>23545.5</p>
<CiCreditCard2 className="text-[#CB8954] "/>

</div>
<h2>Total items</h2>
<p className="text-[#C1C1C1] text-sm">
  + 3.9 % this week
</p>
</div>


<div className="col-span-3 md:col-span-3 border border-gray-200 p-2">

<div className="flex items-center gap-2">
<p>23545.5</p>
<CiCreditCard2 className="text-[#CB8954] "/>

</div>
<h2>Total items</h2>
<p className="text-[#C1C1C1] text-sm">
  + 3.9 % this week
</p>
</div>


     </div>
  </>
}
