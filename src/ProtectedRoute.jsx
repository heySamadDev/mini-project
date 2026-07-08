import { useContext } from "react";
import UserContext from "./context/userContext";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { login } = useContext(UserContext);

  if (!login) {
    return <Navigate to="/login" state={{ from: location.pathname }} />;
  }

  return children;
}

export default ProtectedRoute;
