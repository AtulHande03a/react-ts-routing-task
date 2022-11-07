import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import {
  Navbar,
  Home,
  WatchLater,
  Liked,
  Login,
  Footer,
} from "./components/index";
import { RequiresAuth } from "./RequiresAuth";
import "./App.css";
import { Todo } from "./model";
import Taskify from "./pages/Taskify";

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };

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
        <Route
          path="/todolist"
          element={
            <RequiresAuth>
              <Taskify
                todo={todo}
                setTodo={setTodo}
                handleAdd={handleAdd}
                todos={todos}
                setTodos={setTodos}
              />
            </RequiresAuth>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
