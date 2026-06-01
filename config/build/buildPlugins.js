import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins(options) {
    const plugins = [
        new HtmlWebpackPlugin({
            template: options.paths.html,
        })
    ]

    if (options.isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: 'styles/[name].[contenthash:8].css',
            chunkFilename: 'styles/[name].[contenthash:8].css'
        }))
    }

    return plugins;
}