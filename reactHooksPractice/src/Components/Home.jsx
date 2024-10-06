import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>this is the homepage</h1>
      <Link to="/UseReducer">UseReducerHOok</Link>
      <Link to="/UseMemo">UseReducerHOok</Link>
      <Link to="/UseRef">UseRef</Link>
    </div>
  );
};

export default Home;
