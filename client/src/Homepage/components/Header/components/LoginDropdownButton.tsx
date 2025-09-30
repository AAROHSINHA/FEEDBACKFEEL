import { Link } from "react-router-dom";
interface LoginDropdownInterface {
  title: string;
  route: string;
}
export const LoginDropdownButton = ({
  title,
  route,
}: LoginDropdownInterface) => {
  return (
    <Link to={route}>
      <button className="block w-full px-6 py-3 text-sm text-gray-300 hover:text-white hover:cursor-pointer text-left">
        {title}
      </button>
    </Link>
  );
};
