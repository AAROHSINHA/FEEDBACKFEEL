export const Divider = () => {
  return (
    <div className="relative my-6">
      <div className="absolute inset-0 flex items-center">
        <span className="w-full border-t border-gray-700" />
      </div>
      <div className="relative flex justify-center text-xs uppercase">
        <span className="bg-[#19191a] px-2 text-gray-400">Or</span>
      </div>
    </div>
  );
};
