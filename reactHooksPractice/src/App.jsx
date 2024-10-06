import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import UseMemo from "./Components/UseMemo";
import UseReducerHook from "./Components/UseReducerHook";
import UseRef from "./Components/UseRef";
import TodoContext from "./Components/todosContext";
import Todos from "./Components/Todos";


function App() {


  return (
    <BrowserRouter>
    <TodoContext value={Todos}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/UseMemo" element={<UseMemo />} />
        <Route path="/UseRef" element={<UseRef />} />
        <Route path="/UseReducer" element={<UseReducerHook />} />
      </Routes>
      </TodoContext>
    </BrowserRouter>
  );
}

export default App;
