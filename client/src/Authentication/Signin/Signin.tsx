import { ArrowLeft } from "lucide-react";

export default function SignIn() {
  return (
    <div className="min-h-screen bg-[#19191a] text-white">
      {/* Grid background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between p-6">
        <a
          href="/"
          className="flex items-center gap-2 text-sm font-medium hover:text-blue-400 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </a>

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
            FF
          </div>
          <span className="font-semibold text-lg">FeedbackFeel</span>
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
          <div className="text-center space-y-2 mb-6">
            <h1 className="text-2xl font-bold">Sign In</h1>
            <p className="text-gray-400 text-sm">
              Choose your preferred sign-in method
            </p>
          </div>

          {/* Local Sign In */}
          <div className="space-y-4">
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
              />
            </div>

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
              />
            </div>

            <button className="w-full rounded-md bg-white text-black py-2 font-medium hover:bg-gray-100 transition">
              Sign In with Email
            </button>
          </div>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-700" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-[#19191a] px-2 text-gray-400">Or</span>
            </div>
          </div>

          {/* Google Sign In */}
          <button className="w-full flex items-center justify-center rounded-md border border-gray-700 bg-transparent py-2 font-medium hover:bg-gray-800 transition">
            <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </button>

          {/* Footer text */}
          <p className="mt-6 text-center text-xs text-gray-400">
            {"Don't have an account? "}
            <a
              href="/signup"
              className="text-blue-400 hover:text-blue-300 underline underline-offset-4"
            >
              Sign up
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
