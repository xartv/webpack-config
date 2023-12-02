import { buildWebpack } from "./config/build/buildWebpack";
import path from "path";
import "dotenv/config";
export default (function () {
    var _a, _b, _c, _d;
    var paths = {
        entry: path.resolve(__dirname, "src", "index.tsx"),
        output: path.resolve(__dirname, "build"),
        html: path.resolve(__dirname, "public", "index.html"),
        src: path.resolve(__dirname, "src"),
    };
    var config = buildWebpack({
        port: (_a = Number(process.env.PORT)) !== null && _a !== void 0 ? _a : 3000,
        mode: (_b = process.env.MODE) !== null && _b !== void 0 ? _b : "development",
        paths: paths,
        analyzer: (_c = process.env.analyzer) !== null && _c !== void 0 ? _c : "off",
        platform: (_d = process.env.platform) !== null && _d !== void 0 ? _d : "desktop",
    });
    return config;
});
