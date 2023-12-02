import MiniCssExtractPlugin from "mini-css-extract-plugin";
export function buildLoaders(options) {
    var mode = options.mode;
    var isDev = mode === "development";
    var cssLoaderWithModules = {
        loader: "css-loader",
        options: {
            modules: {
                localIdentName: isDev ? "[folder]__[local]" : "[hash:base64:8]",
            },
        },
    };
    var cssLoader = {
        test: /\.css$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            cssLoaderWithModules,
        ],
    };
    var scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            cssLoaderWithModules,
            "sass-loader",
        ],
    };
    var tsxLoader = {
        // ts-loader work with JSX
        // if use js, need to install babel-loader
        test: /\.tsx?$/,
        use: [
            {
                loader: "ts-loader",
                options: {
                    transpileOnly: isDev,
                },
            },
        ],
        exclude: /node_modules/,
    };
    var assetLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
    };
    var svgrLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [
            {
                loader: "@svgr/webpack",
                options: {
                    icon: true,
                    svgoConfig: {
                        plugins: [
                            {
                                name: "convertColors",
                                params: {
                                    currentColor: true,
                                },
                            },
                        ],
                    },
                },
            },
        ],
    };
    return [svgrLoader, assetLoader, cssLoader, scssLoader, tsxLoader];
}
