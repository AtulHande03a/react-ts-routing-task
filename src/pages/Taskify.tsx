import React from "react";
import InputField from "./InputField";
import TodoList from "./TodoList";
import { Todo } from "../model";

interface Props {
  todo: string;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const Taskify: React.FC<Props> = ({
  todo,
  setTodo,
  handleAdd,
  todos,
  setTodos,
}) => {
  return (
    <div className="todo">
      {/* <span className="heading">Taskify</span> */}
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Taskify;
