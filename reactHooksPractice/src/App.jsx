import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import UseMemo from "./Components/UseMemo";
import UseReducerHook from "./Components/UseReducerHook";
import UseRef from "./Components/UseRef";
import UseReducerHook2 from "./Components/UseReducerHook2";
import { TodoProvider } from "./Components/todosContext";

function App() {
  return (
    <BrowserRouter>
      <TodoProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/UseMemo" element={<UseMemo />} />
          <Route path="/UseRef" element={<UseRef />} />
          <Route path="/UseReducer" element={<UseReducerHook />} />
          <Route path="/UseReducer2" element={<UseReducerHook2 />} />
        </Routes>
      </TodoProvider>
    </BrowserRouter>
  );
}

export default App;
