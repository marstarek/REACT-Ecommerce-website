// import { useState } from "react";
import TodoForm from "../../components/Todo/TodoForm";
import TodoList from "../../components/Todo/TodoList";
import "./Todo.css";
function Todo() {
  return (
    <div className="text-center py-2 todo-wrapper container">
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default Todo;
