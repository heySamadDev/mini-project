import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import UserContext from "../context/userContext";

function Navbar() {
  const navigate = useNavigate();
  const { theme, toggleTheme, login, handleLogout } = useContext(UserContext);

  return (
    <nav
      className={`${
        theme === "light"
          ? "bg-white text-black border-zinc-200"
          : "bg-zinc-800 text-white border-zinc-700"
      } flex items-center justify-between px-30 py-6 border-b transition-all duration-300`}
    >
      <div className="flex items-center gap-10">
        <h1 className="text-2xl font-bold">
          <Link
            to="/"
            className="text-green-600 hover:text-green-700 transition-colors"
          >
            StudentsHub
          </Link>
        </h1>

        <ul className="flex items-center gap-6 font-medium">
          <li>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/courses" className="nav-link">
              Courses
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard" className="nav-link">
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink to="/students" className="nav-link">
              Students
            </NavLink>
          </li>

          <li>
            <NavLink to="/profile" className="nav-link">
              Profile
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-4">
        {!login ? (
          <button
            className="px-5 py-2 rounded-lg border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-all duration-200"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        ) : (
          <button
            className="px-5 py-2 rounded-lg border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-all duration-200"
            onClick={handleLogout}
          >
            Logout
          </button>
        )}

        <button
          onClick={toggleTheme}
          className="px-5 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-all duration-200"
        >
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
