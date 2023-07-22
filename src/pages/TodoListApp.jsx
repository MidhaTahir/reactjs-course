import React, { useState, useRef } from "react";
import { useTodoContext } from "../context/TodoContext";
import TodoItem from "../components/TodoItem";

const TodoListApp = () => {
  const { todos, dispatch } = useTodoContext();
  const [inputText, setInputText] = useState("");
  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputText.trim() !== "") {
      dispatch({ type: "ADD_TODO", payload: inputText });
      setInputText("");
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        ref={inputRef}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoListApp;
