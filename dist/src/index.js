import { jsx as _jsx } from "react/jsx-runtime";
import { createRoot } from "react-dom/client";
import { App } from "./components/App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About } from "@/pages/About";
import { Blog } from "@/pages/Blog";
import { Suspense } from "react";
var root = document.getElementById("root");
if (!root) {
    throw new Error("root not found");
}
var container = createRoot(root);
var router = createBrowserRouter([
    {
        path: "/",
        element: _jsx(App, {}),
        children: [
            {
                path: "/about",
                element: (_jsx(Suspense, { fallback: "LOADING", children: _jsx(About, {}) })),
            },
            {
                path: "/blog",
                element: (_jsx(Suspense, { fallback: "LOADING", children: _jsx(Blog, {}) })),
            },
        ],
    },
]);
container.render(_jsx(RouterProvider, { router: router }));
