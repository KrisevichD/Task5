import path from "node:path"
import { fileURLToPath } from "node:url";
import { resolve } from "node:dns";
import { buildWebpack } from "./config/build/buildWebpack.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default (env) => {
    const options = {
        mode: env.mode ?? "development",
        isDev: env.mode === "development",
        isProd: env.mode === "production",
        port: env.port,
        paths: {
            entry: path.resolve(__dirname, "src", "index.jsx"),
            output: path.resolve(__dirname, "dist"),
            html: path.resolve(__dirname, "public", "index.html"),
            public: path.resolve(__dirname, "public"),
            src: path.resolve(__dirname, "src"),
        }
    }

    const config = buildWebpack(options);

    return config;
};