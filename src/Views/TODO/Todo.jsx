import { useState } from "react";
import TodoForm from "../../components/Todo/TodoForm";
import TodoList from "../../components/Todo/TodoList";
import { addTodoAction } from "../../Redux/todo";
import "./Todo.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
function Todo() {
  const todostate = useSelector((state) => state.todos);
  console.log(todostate);
  const dispatch = useDispatch();
  const addTodo = (task) => {
    dispatch(addTodoAction(task));
  };

  const deleteTodo = (index) => {};
  console.log(todostate);
  return (
    <div className="text-center py-2 todo-wrapper container">
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todostate} deleteTodo={deleteTodo} />
    </div>
  );
}

export default Todo;
