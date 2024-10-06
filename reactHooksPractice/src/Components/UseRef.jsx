import { useRef } from "react";

const UseRef = () => {
  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert(`you clicked ` + ref.current + ` times`);
  }
  return (
    <div>
      <button onClick={handleClick}>onclick</button>
    </div>
  );
};

export default UseRef;
