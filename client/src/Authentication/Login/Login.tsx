import { Header } from "./components/Header";
import { Text } from "./components/Text";
// import { Divider } from "./components/Divider";
// import { GoogleButton } from "./components/GoogleButton";
import { SignupButton } from "./components/SignupButton";
import { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import { api } from "../../api";
import toast from "react-hot-toast";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please Fill Both Fields!");
      return;
    }
    try {
      await api.post("/auth/local-login", {
        email: email,
        password: password,
      });
      navigate("/");
      toast.success("Succesfully Logged In!");
    } catch (error: any) {
      const error_text = error?.response?.data?.detail;
      if (error_text) {
        if (error_text == "invalid_password")
          setErrorMessage("Invalid Password");
        else if (error_text == "no_email_exists")
          setErrorMessage("No Such Email Exists! Sign Up First...");
        else if (error_text == "validation_error")
          setErrorMessage("Enter Correct Email / Password.");
        else setErrorMessage("Server Error! Please Try Again Later...");
      } else {
        setErrorMessage("Server Error! Please Try Again In Some Time...");
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#19191a] text-white">
      {/* Grid background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="relative z-10 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
          <Text />

          {/* Local Login */}
          <div className="space-y-4">
            {/* Username */}

            {/* Email */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-200"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-md border border-gray-700 bg-transparent px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 outline-none"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-200"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full rounded-md border border-gray-700 bg-transparent px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 outline-none"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <p className="text-red-400 text-sm text-center">{errorMessage}</p>
            <button
              className="w-full rounded-md bg-white text-black py-2 font-medium hover:bg-gray-100 transition hover:cursor-pointer"
              onClick={handleLogin}
            >
              Login With Email
            </button>
          </div>

          {/* Divider */}
          {/* <Divider /> */}

          {/* Google Sign In */}
          {/* <GoogleButton /> */}

          {/* Footer text */}
          <SignupButton />
        </div>
      </main>
    </div>
  );
}
