import { Header } from "./components/Header";
import { Text } from "./components/Text";
// import { Divider } from "./components/Divider";
// import { GoogleButton } from "./components/GoogleButton";
import { SignupButton } from "./components/SigninButton";
import { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import { api } from "../../api";

interface ErrorResponsesInterface {
  "Email already exists": string;
  "Validation Error Occurred!": string;
  "Unknown Error Occurred!": string;
}
const error_responses: ErrorResponsesInterface = {
  "Email already exists": "ACCOUNT WITH THIS EMAIL ALREADY EXISTS!",
  "Validation Error Occurred!": "INVALID NAME OR EMAIL",
  "Unknown Error Occurred!": "SOME ERROR OCCURRED! PLEASE TRY AGAIN...",
};

export default function SignUp() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async () => {
    if (!userName || !email || !password) {
      alert("Please Fill All Fields!!!");
      return;
    }
    const data = {
      name: userName,
      email: email,
      password: password,
    };
    try {
      await api.post("/auth/local-sign-up", data);
      setErrorMessage("");
      setSuccessMessage("ACCOUNT CREATED SUCCESFULLY!");
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error: any) {
      setSuccessMessage("");
      const error_text = error?.response?.data;

      if (error_text && error_text.detail) {
        const message =
          error_responses[error_text.detail as keyof ErrorResponsesInterface];
        setErrorMessage(message ?? "SOME ERROR OCCURRED! PLEASE TRY AGAIN...");
      } else {
        setErrorMessage("SOME ERROR OCCURRED! PLEASE TRY AGAIN...");
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

          {/* Local Sign In */}
          <div className="space-y-4">
            {/* Username */}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-200"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-md border border-gray-700 bg-transparent px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 outline-none"
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>

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
            <p className="text-green-400 text-sm text-center">
              {successMessage}
            </p>
            <button
              className="w-full rounded-md bg-white text-black py-2 font-medium hover:bg-gray-100 transition hover:cursor-pointer"
              onClick={handleSignIn}
            >
              Sign In with Email
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
