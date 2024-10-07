import { useMemo } from "react";

const useFilteredTodos = (todos, tab) => {
  return useMemo(() => {
    switch (tab) {
      case "Active":
        return todos.filter((todo) => !todo.completed);

      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  }, [todos, tab]);
};

export default useFilteredTodos;
