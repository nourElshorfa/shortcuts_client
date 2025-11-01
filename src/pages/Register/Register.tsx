import { useState } from "react";
import { FaApple } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";


export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  let validationSchema = Yup.object({
    name: Yup.string().min(3 , "Name must be at least 3 characters").max(30 , "Name must be at most 30 characters").required("Name is required") ,
    email: Yup.string().email("Invalid email").required("Email is required") ,
    password: Yup.string().min(6 , "Password must be at least 8 characters").max(30 , "Password must be at most 30 characters").required("Password is required") ,
    confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required")
  })


  let formik = useFormik({
    initialValues : {
      name : "",
      email : "",
      password : "",
      confirmPassword : ""
    },validationSchema , onSubmit : () => {
      console.log(formik)
    }
  })

  

  return (
    <>
  

      <div className="grid grid-cols-1 sm:grid-cols-2">
        
      <div className="image h-screen bg-[url('/assets/shortcutsPhoto.jpeg')] bg-cover">
</div>

        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
          <div className="w-full max-w-md">
            <h1 className="text-[#18234D] text-center text-3xl mb-10">
              SHORT <span className="text-[#F47820]">CUTS</span>
            </h1>
            <h1 className="text-2xl mb-8">Sign up</h1>

            <form className="space-y-6" onSubmit={formik.handleSubmit}>

              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
                <input
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                  type="name" name="name"
                  placeholder="Enter Your Name"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                />
                {formik.touched.name && formik.errors.name && (
  <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
)}
              </div>

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

              {/* Confirm Password */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-semibold mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                  value={formik.values.confirmPassword}
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                  id="confirmPassword"
                  name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? (
                      <AiOutlineEyeInvisible className="w-5 h-5" />
                    ) : (
                      <AiOutlineEye className="w-5 h-5" />
                    )}
                  </button>
                  {formik.touched.confirmPassword && formik.errors.confirmPassword && (
  <p className="text-red-500 text-sm mt-1">{formik.errors.confirmPassword}</p>
)}
                </div>
                
              </div>

              {/* Sign Up Button */}
              <button disabled={!formik.isValid} type="submit" className="w-full bg-[#18234D]  cursor-pointer text-white font-semibold py-3 rounded-lg transition duration-200">
                Sign Up
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
              If you have account{" "}
              <Link to="/signin" className="text-orange-500 hover:text-orange-600 font-semibold">
                Login
              </Link>
            </div>



          </div>

        </div>

      </div>
    </>
  );
}