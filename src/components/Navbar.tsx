import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../authContext";

export function Navbar() {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  return (
    <nav className="navbar_container">
      <Link to="/">Home</Link>
      <Link to="/watchLater">Watch later</Link>
      <Link to="/liked">Liked</Link>
      <Link to="/todolist">TodoList</Link>
      {isLoggedIn ? (
        <button className="btn_auth" onClick={() => setIsLoggedIn(false)}>
          Logout
        </button>
      ) : (
        <button className="btn_auth" onClick={() => navigate("/login")}>
          Login
        </button>
      )}
    </nav>
  );
}
