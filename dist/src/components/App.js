import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import classes from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import kittyPng from "@/assets/kitty.png";
import kittyJpg from "@/assets/kitty.jpg";
import TelegramSvg from "@/assets/telegram.svg";
export var App = function () {
    var _a = useState(0), count = _a[0], setCount = _a[1];
    var handleClick = function () { return setCount(function (prev) { return prev + 1; }); };
    var a = '2';
    return (_jsxs("div", { children: [_jsx(Link, { to: "about", children: "About" }), _jsx("br", {}), _jsx(Link, { to: "blog", children: "Blog" }), _jsxs("div", { children: ["Platform - ", __PLATFORM__] }), _jsx("img", { src: kittyPng }), _jsx("img", { src: kittyJpg }), _jsx(TelegramSvg, { color: "blue", width: 50, height: 50 }), _jsx("div", { className: classes.count, children: count }), _jsx("button", { onClick: handleClick, children: "Click" }), _jsx(Outlet, {})] }));
};
