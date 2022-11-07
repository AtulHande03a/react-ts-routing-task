import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Navbar, Home, WatchLater, Liked, Login } from "./components/index";
import { RequiresAuth } from "./RequiresAuth";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/watchLater"
          element={
            <RequiresAuth>
              <WatchLater />
            </RequiresAuth>
          }
        />
        <Route
          path="/liked"
          element={
            <RequiresAuth>
              <Liked />
            </RequiresAuth>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
