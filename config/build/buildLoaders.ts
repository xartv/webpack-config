import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/buildTypes";

export function buildLoaders(options: BuildOptions): ModuleOptions["rules"] {
  const { mode } = options;

  const isDev = mode === "development";

  const cssLoader = {
    test: /\.css$/i,
    use: [isDev ? "style-loader" : MiniCssExtractPlugin.loader, "css-loader"],
  };
  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      "css-loader",
      "sass-loader",
    ],
  };
  const tsxLoader = {
    // ts-loader work with JSX
    // if use js, need to install babel-loader
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [cssLoader, scssLoader, tsxLoader];
}
