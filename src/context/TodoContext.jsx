import { createContext, useContext, useReducer, useEffect } from "react";
import todoReducer from "./TodoReducer";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
  const [todos, dispatch] = useReducer(todoReducer, storedTodos);

  useEffect(() => {
    // Update localStorage whenever todos change
    localStorage.setItem("todos", JSON.stringify(todos));
    console.log({ todos });
  }, [todos]);

  // Add other necessary functions here...

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

// Custom Hook
const useTodoContext = () => {
  return useContext(TodoContext);
};

export { TodoProvider, useTodoContext };
