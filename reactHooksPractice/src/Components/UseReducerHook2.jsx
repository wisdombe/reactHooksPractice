import { useReducer } from "react";
import TodoList from "./TodoList";
import useFilteredTodos from "./UseMemo";

const UseReducerHook2 = () => {
  function reducer(state, action) {
    switch (action.type) {
      case "add_todo": {
        return {
          ...state,
          todos: [
            {
              id: state.todos.length + 1,
              text: state.newTodo,
              completed: false,
            },
          ],
          newTodo: "",
        };
      }
      case "add_new_todo": {
        return {
          ...state,
          newTodo: action.payload,
        };
      }
      case "change_theme": {
        return {
          isDark: !state.isDark,
        };
      }
      case "set_tab_All": {
        return {
          tab: "All",
        };
      }
      case "set_tab_Active": {
        return {
          tab: "Active",
        };
      }
      case "set_tab_completed": {
        return {
          tab: "completed",
        };
      }
      case "toggle_todo": {
        return {
          todos: state.todos.map((todo) =>
            todo.id === action.id
              ? { ...todo, completed: !todo.completed }
              : todo
          ),
        };
      }
    }
    throw new Error("unknown error");
  }

  const initialState = { todo: [], newTodo: "", isDark: false, tab: "All" };
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.newTodo.trim()) {
      dispatch({ type: "add_todo" });
    }
  };

  const handleInputChange = (e) => {
    dispatch({
      type: "add_new_todo",
      payLoad: e.target.value,
    });
  };
  const filteredTodos = useFilteredTodos(state.todos, state.tab);
  return (
    <div
      style={{
        background: state.isDark ? "#333" : "#fff",
        color: state.isDark ? "#fff" : "#333",
      }}
    >
      <h1>todo App</h1>
      <button onClick={() => dispatch({ type: "set_tab_All" })}>all</button>
      <button onClick={() => dispatch({ type: "set_tab_Active" })}>
        active
      </button>
      <button onClick={() => dispatch({ type: "set_tab_completed" })}>
        completed
      </button>

      <form>
        <label htmlFor="theme">
          <input
            type="checkbox"
            checked={state.isDark}
            onChange={() => dispatch({ type: "change_theme" })}
          />
          theme
        </label>
        <label htmlFor="addTodo">
          <input
            type="text"
            id="addTodo"
            placeholder="Add todo"
            value={state.newTodo}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit" onClick={handleSubmit}>
          submit
        </button>
      </form>
      <TodoList
        todos={filteredTodos}
        onToggle={(id) => dispatch({ type: "toggle_todo", id })}
      />
    </div>
  );
};

export default UseReducerHook2;
