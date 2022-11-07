import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../authContext";

export function Navbar() {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/watchLater">Watch later</Link>
      <Link to="/liked">Liked</Link>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => navigate("/login")}>Login</button>
      )}
    </nav>
  );
}
