import webpack from "webpack";
import { buildWebpack } from "./config/build/buildWebpack";
import { BuildMode, BuildPaths } from "./config/build/types/buildTypes";
import path from "path";
import "dotenv/config";

export default () => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
  };

  const config: webpack.Configuration = buildWebpack({
    port: Number(process.env.PORT) ?? 3000,
    mode: (process.env.MODE as BuildMode) ?? "development",
    paths,
    analyzer: process.env.analyzer,
  });

  return config;
};
