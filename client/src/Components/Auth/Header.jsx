import { Link } from "react-router-dom";
import Logo from '../../assets/Logo.png'
export default function Header({
  heading,
  paragraph,
  linkName,
  linkUrl = "#",
}) {
  return (
    <div className="mb-4">
      <div className="flex justify-center">
        <Link to="/home">
        <img
          alt=""
          className="h-20 w-20"
          src={Logo}
        />
        </Link>
      </div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        {heading}
      </h2>
      <p className="text-center text-sm text-gray-600 mt-5">
        {paragraph}{" "}
        <Link
          to={linkUrl}
          className="font-medium text-purple-600 hover:text-purple-500"
        >
          {linkName}
        </Link>
      </p>
    </div>
  );
}
