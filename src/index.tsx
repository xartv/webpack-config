import { createRoot } from "react-dom/client";
import { App } from "./components/App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About } from "./pages/About";
import { Blog } from "./pages/Blog";
import { Suspense } from "react";

const root = document.getElementById("root");

if (!root) {
  throw new Error("root not found");
}

const container = createRoot(root);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: (
          <Suspense fallback={"LOADING"}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/blog",
        element: (
          <Suspense fallback={"LOADING"}>
            <Blog />
          </Suspense>
        ),
      },
    ],
  },
]);

container.render(<RouterProvider router={router} />);
