import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CopyWebpackPlugin from 'copy-webpack-plugin';

export function buildPlugins(options) {
    const plugins = [
        new HtmlWebpackPlugin({
            template: options.paths.html,
            favicon: "./public/favicon.ico"
        }),
        new CopyWebpackPlugin({
            patterns: [
                { 
                    from: 'public/404.html', 
                    to: '404.html' 
                }
            ]
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