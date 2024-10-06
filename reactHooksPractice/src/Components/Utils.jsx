export function createTodos() {
  const Todos = [];

  for (let i = 0; i < 50; i++) {
    Todos.push({
      id: i + 1,
      text: "text" + (i + 1),
      completed: Math.random() > 0.5,
    });
  }
  return Todos;
}

export function filterTodos(Todos, tab) {
  Todos.filter((todo) => {
    if (tab === "All") {
      return true;
    } else if (tab === "Active") {
      return !todo.completed;
    } else if (tab === "completed") {
      return todo.completed;
    }
  });
}
