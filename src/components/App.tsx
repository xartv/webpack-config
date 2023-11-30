import { useState } from "react";
import classes from "./App.module.scss";

export const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount((prev) => prev + 1);

  return (
    <div>
      <div className={classes.count}>{count}</div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};
