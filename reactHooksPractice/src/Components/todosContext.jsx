import { createContext, useState } from "react";
import { createTodos, filterTodos } from "./utils";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(createTodos);

  const filter = (tab) => {
    return filterTodos(todos, tab);
  };
  return (
    <TodoContext.Provider value={{ todos, filter }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
