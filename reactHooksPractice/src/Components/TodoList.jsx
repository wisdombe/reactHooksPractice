const TodoList = ({ todos, onToggle }) => {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
            <button onClick={() => onToggle(todo.id)}>
              {todo.completed ? "Mark as Active" : "Mark as completed"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
