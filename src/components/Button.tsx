



export default function Button( props: any) {
  return <>
   <button className="w-full bg-[#18234D] hover:bg-blue-950 cursor-pointer text-white font-semibold py-3 rounded-lg transition duration-200">
               {props.children}
              </button>
  
  </>
}
