import { buildLoaders } from './buildLoaders.js'
import { buildPlugins } from './buildPlugins.js'
import { buildResolvers } from './buildResolvers.js'

export function buildWebpack(options) {
    return {
        mode: options.mode,
        entry: options.paths.entry,
        output: {
            path: options.paths.output,
            filename: '[name].[contenthash].js',
            assetModuleFilename: 'assets/[hash][ext][query]',
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolvers(options),
        devtool: options.isDev && 'inline-source-map',
        devServer: options.isDev ? {
            open: true,
            port: options.port ?? 3000,
            historyApiFallback: true,
        } : undefined
    }
};
