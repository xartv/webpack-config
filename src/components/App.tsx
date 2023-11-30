import { useState } from "react";
import "./App.scss";

export const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount((prev) => prev + 1);

  return (
    <div>
      <div className="count">{count}</div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};
