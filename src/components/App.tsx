import { useState } from "react";
import classes from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import kittyPng from "@/assets/kitty.png";
import kittyJpg from "@/assets/kitty.jpg";
import TelegramSvg from "@/assets/telegram.svg";

export const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount((prev) => prev + 1);

  if (__PLATFORM__ === "desktop") return "THIS_IS_DESKTOP";
  if (__PLATFORM__ === "mobile") return "THIS_IS_MOBILE";

  return (
    <div>
      <Link to="about">About</Link>
      <br />
      <Link to="blog">Blog</Link>

      <div>Platform - {__PLATFORM__}</div>
      <img src={kittyPng} />
      <img src={kittyJpg} />
      <TelegramSvg color="blue" width={50} height={50} />

      <div className={classes.count}>{count}</div>
      <button onClick={handleClick}>Click</button>

      <Outlet />
    </div>
  );
};
