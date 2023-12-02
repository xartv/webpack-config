export function buildDevServer(options) {
    var port = options.port;
    var isDev = options.mode === "development";
    return {
        port: port !== null && port !== void 0 ? port : 3001,
        open: isDev,
        // work only for devServer, if use nginx need to proxy requests to index.html
        historyApiFallback: true,
    };
}
