import { buildLoaders } from './buildLoaders.js'
import { buildOptimization } from './buildOptimization.js';
import { buildPerformance } from './buildPerformance.js';
import { buildPlugins } from './buildPlugins.js'
import { buildResolvers } from './buildResolvers.js'

export function buildWebpack(options) {
    return {
        mode: options.mode,
        entry: options.paths.entry,
        output: {
            path: options.paths.output,
            publicPath: options.isProd ? options.paths.deploy : '/',
            filename: options.isProd ? 'js/[name].[contenthash:8].js' : 'js/[name].js',
            chunkFilename: options.isProd ? 'js/[name].[contenthash:8].chunk.js' : 'js/[name].chunk.js',
            assetModuleFilename: 'assets/[hash][ext][query]',
            clean: true,
        },
        optimization: buildOptimization(),
        performance: buildPerformance(options),
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolvers(options),
        devtool: options.isDev && 'inline-source-map',
        devServer: {
            open: true,
            port: options.port ?? 3000,
            historyApiFallback: true,
        }
    }
};
