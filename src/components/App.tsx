import { useState } from "react";
import classes from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";

export const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount((prev) => prev + 1);

  return (
    <div>
      <Link to="about">About</Link>
      <br />
      <Link to="blog">Blog</Link>

      <div className={classes.count}>{count}</div>
      <button onClick={handleClick}>Click</button>

      <Outlet />
    </div>
  );
};
