import { useEffect, useState } from "react";
import UserContext from "./userContext";
import { useNavigate } from "react-router-dom";

const UserContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(()=> {
   const savedLogin = localStorage.getItem("Login")
   return savedLogin === 'true';
  });
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light";
  });

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  useEffect(() => {
    localStorage.setItem("theme", theme);
    localStorage.setItem("Login", login);
  }, [theme, login]);

  function handleLogout() {
    setLogin(false);
    return navigate("/login");
  }

  return (
    <UserContext.Provider
      value={{ theme, toggleTheme, login, setLogin, handleLogout, navigate }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
