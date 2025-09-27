export const SignupButton = () => {
  return (
    <p className="mt-6 text-center text-xs text-gray-400">
      {"Already have an account? "}
      <a
        href="/login"
        className="text-blue-400 hover:text-blue-300 underline underline-offset-4"
      >
        Login
      </a>
    </p>
  );
};
