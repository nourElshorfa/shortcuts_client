
import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaApple, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [loading , setLoading] = useState(false)
    const [error , setError] = useState("")
  
    let navigate = useNavigate();
    
    async function handleLogin(values: any) {
        setLoading(true);
        try {
          let res = await axios.post("http://localhost:4000/api/v1/auth/signin", values);
      
          if (res.data.message === "success") {
            console.log(res.data.token);
            
            localStorage.setItem("token" , res.data.token)
            navigate("/dashboard");
          } else {
            console.log({ error : "error mn el else" })
            setError(res.data.message);
          }
        } catch (err: any) {
         
          console.log({ error : "error mn el catch" })
          setError(err.response?.data?.message || "Wrong email or password");
        } finally {
         
          setLoading(false);
        }
      }


    let validationSchema = Yup.object({
        email: Yup.string().email("Invalid email").required("Email is required") ,
        password: Yup.string().min(6 , "Password must be at least 6 characters").max(30 , "Password must be at most 30 characters").required("Password is required") ,
      })
      
      
      let formik = useFormik({
        initialValues : {
   
          email : "",
          password : "",
  
        },validationSchema , onSubmit : handleLogin
      })
      
      

    return (
        <>
         
    {loading && <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
    </div>}


    
      <div className="grid grid-cols-1 sm:grid-cols-2">
        
      <div className="image h-screen bg-[url('/assets/shortcutsPhoto.jpeg')] bg-cover"></div>
      
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
          <div className="w-full max-w-md">
            <h1 className="text-[#18234D] text-center text-3xl mb-10">
              SHORT <span className="text-[#F47820]">CUTS</span>
              {error && <p className="text-red-500 text-2xl font-bold mt-1">{error}</p>}
            </h1>
            <h1 className="text-2xl mb-8">Sign In</h1>

            <form className="space-y-6" onSubmit={formik.handleSubmit}>

     
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
                <input
                 value={formik.values.email}
                 onChange={formik.handleChange}
                 onBlur={formik.handleBlur}
                  type="email" name="email" id="email"
                  placeholder="Enter Your Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                />
                              {formik.touched.email && formik.errors.email && (
  <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
)}
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-semibold mb-2">Password</label>
                <div className="relative">
                  <input
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                   onChange={formik.handleChange}
                  name="password" id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <AiOutlineEyeInvisible className="w-5 h-5" />
                    ) : (
                      <AiOutlineEye className="w-5 h-5" />
                    )}
                  </button>
                {formik.touched.password && formik.errors.password && (
  <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
)}
                </div>
              </div>


              {/* Sign Up Button */}
              <button   disabled={!formik.isValid} type="submit" className="w-full bg-[#18234D]  cursor-pointer text-white font-semibold py-3 rounded-lg transition duration-200">
                Sign in
              </button>
         

            </form>

            {/* Divider */}
            <div className="my-8 flex items-center">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="px-3 text-gray-600 text-sm">Or Sign up with</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            {/* Social Buttons */}
            <div className="flex justify-center gap-6 mb-6">
              <button className="cursor-pointer w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
                <FaGoogle className="text-xl font-bold text-gray-800" />
              </button>
              <button className="cursor-pointer w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
                <FaApple className="text-xl font-bold text-gray-800" />
              </button>
            </div>

            {/* Login Link */}
            <div className="text-center text-gray-600 text-sm">
              If you don't have account{" "}
              <Link to="/signup" className="text-orange-500 hover:text-orange-600 font-semibold">
                Register
              </Link>
            </div>





          </div>

        </div>

      </div>
        </>
    )
}