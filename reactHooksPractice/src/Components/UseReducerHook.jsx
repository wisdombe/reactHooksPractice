import { useReducer } from "react";

const UseReducerHook = () => {
  function reducer(state, action) {
    switch (action.type) {
      case "incremented_age": {
        return {
          name: state.name,
          age: state.age + 1,
        };
      }
      case "change_name": {
        return {
          name: action.nextName,
          age: state.age,
        };
      }
    }
    throw Error("unknown error");
  }

  const initialState = { name: "taylor", age: 27 };
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleButtonClick() {
    dispatch({ type: "incremented_age" });
  }

  function handleInputChange(e) {
    dispatch({
      type: "change_name",
      nextName: e.target.value,
    });
  }
  return (
    <div>
      <input type="text" value={state.name} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>increase</button>
      <p>
        {state.name} is {state.age} years old
      </p>
    </div>
  );
};

export default UseReducerHook;
