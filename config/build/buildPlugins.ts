import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack, { Configuration } from "webpack";
import { BuildOptions } from "./types/buildTypes";
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

export function buildPlugins(options: BuildOptions): Configuration["plugins"] {
  const { mode, paths, analyzer } = options;

  const isDev = mode === "development";
  const isProd = mode === "production";

  const plugins: Configuration["plugins"] = [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
  ];

  const devPlugins: Configuration["plugins"] = [
    // off if build slow
    new webpack.ProgressPlugin(),
  ];

  const prodPlugins: Configuration["plugins"] = [
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
  ];

  if (analyzer === "on") {
    plugins.push(new BundleAnalyzerPlugin());
  }

  if (isDev) {
    plugins.push(...devPlugins);
  }

  if (isProd) {
    plugins.push(...prodPlugins);
  }

  return plugins;
}
