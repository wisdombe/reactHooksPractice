import { useReducer } from "react";

const UseReducerHook2 = () => {
  function reducer(state, action) {
    switch (action.type) {
      case "add_todo": {
        return {
          ...state,
          todo: state.newTodo,
          newTodo: "",
        };
      }
      case "add_new_todo": {
        return {
          ...state,
          newTodo: action.payLoad,
        };
      }
      case "chage_theme": {
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
    }
    throw new Error("unknown error");
  }

  const initialState = { todo: "go to school", isDark: false };
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "add_todo" });
  };

  const AddTodo = (e) => {
    dispatch({
      type: "add_new_todo",
      payLoad: e.target.value,
    });
  };
  return (
    <div>
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
          <input type="checkbox" checked={dispatch({ type: "change_theme" })} />
        </label>
        <label htmlFor="addTodo">
          <input
            type="text"
            id="addTodo"
            placeholder="Add todo"
            onChange={AddTodo}
          />
        </label>
        <button type="submit" onClick={handleSubmit}>
          submit
        </button>
      </form>
      <p>{state.todo}</p>
    </div>
  );
};

export default UseReducerHook2;
