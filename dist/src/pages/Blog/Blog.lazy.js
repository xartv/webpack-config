import { lazy } from "react";
export var LazyBlog = lazy(function () { return import("./Blog"); });
