import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/userContext";

function Footer() {
  const { theme } = useContext(UserContext);

  return (
    <footer
      className={`border-t ${
        theme === "light"
          ? "bg-white border-zinc-200 text-zinc-600"
          : "bg-zinc-800 border-zinc-700 text-zinc-400"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        <div>
          <Link
            to="/"
            className="text-xl font-bold text-green-600 hover:text-green-700 transition-colors"
          >
            StudentsHub
          </Link>

          <p className="mt-1 text-sm">
            Learn. Practice. Grow.
          </p>
        </div>

        <p className="text-sm">
          © {new Date().getFullYear()} StudentsHub. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;