export const SignupButton = () => {
  return (
    <p className="mt-6 text-center text-xs text-gray-400">
      {"Don't Have An Account? "}
      <a
        href="/sign-up"
        className="text-blue-400 hover:text-blue-300 underline underline-offset-4"
      >
        Sign Up
      </a>
    </p>
  );
};
