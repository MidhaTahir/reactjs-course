import React from "react";
import { useTodoContext } from "../context/TodoContext";

const TodoItem = ({ todo }) => {
  const { dispatch } = useTodoContext();

  const handleToggleTodo = () => {
    dispatch({ type: "TOGGLE_TODO", payload: todo.id });
  };

  const handleRemoveTodo = () => {
    dispatch({ type: "REMOVE_TODO", payload: todo.id });
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggleTodo}
      />
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.text}
      </span>
      <button onClick={handleRemoveTodo}>Remove</button>
    </li>
  );
};

export default TodoItem;
