import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack, { DefinePlugin } from "webpack";
var BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
export function buildPlugins(options) {
    var mode = options.mode, paths = options.paths, analyzer = options.analyzer, platform = options.platform;
    var isDev = mode === "development";
    var isProd = mode === "production";
    var plugins = [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new DefinePlugin({
            __PLATFORM__: JSON.stringify(platform),
        }),
    ];
    var devPlugins = [
        // off if build slow
        new webpack.ProgressPlugin(),
    ];
    var prodPlugins = [
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css",
        }),
    ];
    if (analyzer === "on") {
        plugins.push(new BundleAnalyzerPlugin());
    }
    if (isDev) {
        plugins.push.apply(plugins, devPlugins);
    }
    if (isProd) {
        plugins.push.apply(plugins, prodPlugins);
    }
    return plugins;
}
