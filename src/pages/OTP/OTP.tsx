
import Button from "../../components/Button";

export default function OTP() {


  return <>


      <div className="grid grid-cols-1 sm:grid-cols-2">
        
      <div className="image h-screen bg-[url('./src/assets/shortcutsPhoto.jpeg')] bg-cover ">
  
</div>



            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md p-5">
        {/* Logo */}
     
            <h1 className="text-[#18234D] text-center text-3xl mb-10">
              SHORT <span className="text-[#F47820]">CUTS</span>
            </h1>

        {/* Description */}
        <p className="text-gray-400 text-center mb-8">
          We Have Send The verification
          <br />
          code to your email address .
        </p>

        {/* OTP Input Label */}
        <label className="block text-black font-semibold mb-6">
          Enter the Otp Number
        </label>

        {/* OTP Input Fields */}
        <div className="flex gap-4 justify-center mb-8">
          <input
            type="text"
            className="w-14 h-14 border border-gray-300 rounded-lg text-center text-2xl focus:outline-none focus:ring-2 focus:ring-[#F47820]"
          />
          <input
            type="text"
            className="w-14 h-14 border border-gray-300 rounded-lg text-center text-2xl focus:outline-none focus:ring-2 focus:ring-[#F47820]"
          />
          <input
            type="text"
            className="w-14 h-14 border border-gray-300 rounded-lg text-center text-2xl focus:outline-none focus:ring-2 focus:ring-[#F47820]"
          />
          <input
            type="text"
            className="w-14 h-14 border border-gray-300 rounded-lg text-center text-2xl focus:outline-none focus:ring-2 focus:ring-[#F47820]"
          />
        </div>

        {/* Resend OTP */}
        <div className="text-right mb-8">
          <a href="#" className="text-[#F47820] hover:text-[#d45c0f] font-semibold">
            Resend Otp ?
          </a>
        </div>

        {/* Confirm Button */}
      <Button>
        Confirm
      </Button>
      </div>
    </div>
         

     
      </div>
  </>


}
