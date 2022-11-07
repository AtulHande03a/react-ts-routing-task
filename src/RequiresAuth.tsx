import { useAuth } from "./authContext";
import { Navigate, useLocation } from "react-router-dom";

interface InputProviderProps {
  children: JSX.Element;
}

export function RequiresAuth({ children }: InputProviderProps) {
  const { isLoggedIn } = useAuth();
  const location = useLocation();
  // console.log(location);
  return isLoggedIn ? (
    children
  ) : (
    <Navigate state={{ path: location.pathname }} to="/login" replace />
  );
}
