import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // ✅ التحقق من صحة البريد الإلكتروني
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // يتحقق من MongoDB عبر API
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // التحقق من صحة البريد قبل إرسال الطلب
    if (!validateEmail(email)) {
      setErrorMessage("الرجاء إدخال بريد إلكتروني صحيح.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.status === 404) {
        setErrorMessage(data.message || "لم يتم العثور على الحساب.");
        return;
      }

      if (response.status === 200) {
        navigate("/otp"); // ✅ نجاح تسجيل الدخول
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("حدث خطأ أثناء الاتصال بالخادم.");
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 min-h-screen">
      {/* الصورة الجانبية */}
      <div className="h-screen bg-[url('/assets/shortcutsPhoto.jpeg')] bg-cover bg-center" />

      {/* نموذج تسجيل الدخول */}
      <div className="flex justify-center items-center h-full bg-white p-6 sm:p-12">
        <div className="w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2">
          <h1 className="text-3xl font-bold text-center text-[#1e2952] mb-2">
            SHORT<span className="text-orange-400">CUTS</span>
          </h1>

          <h2 className="text-xl font-semibold mb-6 text-gray-800 text-center sm:text-left">
            Login
          </h2>

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full border rounded-md p-2.5 focus:outline-none focus:ring-2 ${
                  validateEmail(email) || email === ""
                    ? "border-gray-300 focus:ring-[#1e2952]"
                    : "border-red-500 focus:ring-red-400"
                }`}
              />
              {/* رسالة الخطأ الخاصة بالإيميل */}
              {!validateEmail(email) && email !== "" && (
                <p className="text-red-500 text-sm mt-1">
                  الرجاء إدخال بريد إلكتروني صالح.
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2.5 focus:outline-none focus:ring-2 focus:ring-[#1e2952]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible className="w-5 h-5" />
                  ) : (
                    <AiOutlineEye className="w-5 h-5" />
                  )}
                </button>
              </div>
              <p className="text-right text-sm text-[#1e2952] mt-1 cursor-pointer hover:underline">
                Forgot Password ?
              </p>
            </div>

            {/* عرض رسالة الخطأ العامة */}
            {errorMessage && (
              <p className="text-center text-red-500 font-medium">
                {errorMessage}
              </p>
            )}

            {/* زر Login */}
            <button
              type="submit"
              className="w-full bg-[#1e2952] text-white py-2.5 rounded-md font-medium hover:bg-[#253267] transition"
            >
              Login
            </button>
          </form>

          <p className="text-center text-gray-500 my-4">Or Login with</p>

          <div className="flex justify-center gap-4">
            <button className="border border-gray-300 rounded-md p-2 hover:bg-gray-100">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                alt="Google"
                className="w-5 h-5"
              />
            </button>
            <button className="border border-gray-300 rounded-md p-2 hover:bg-gray-100">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg"
                alt="Apple"
                className="w-5 h-5"
              />
            </button>
          </div>

          <p className="text-center text-gray-500 mt-6">
            If you don’t have an account{" "}
            <Link
              to="/signup"
              className="text-orange-400 font-medium cursor-pointer hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}