import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import {
  Navbar,
  Home,
  WatchLater,
  Table,
  Login,
  Footer,
} from "./components/index";
import { RequiresAuth } from "./RequiresAuth";
import "./App.css";
import { Todo, DataTable, Column } from "./model";
import Taskify from "./pages/Taskify";
import axios from "axios";

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [dataTable, setDataTable] = useState<DataTable[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };

  const column: Column = [
    { heading: "Name", value: "name" },
    { heading: "Email", value: "email" },
    { heading: "Phone", value: "phone" },
    { heading: "City", value: "address.city" },
  ];

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => setDataTable(res.data))
      .catch((err) => console.log(err));
  }, []);

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
          path="/table"
          element={
            <RequiresAuth>
              <Table data={dataTable} column={column} />
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
