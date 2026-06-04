export function buildPerformance(options) {
    return {
        hints: options.isProd ? 'warning' : false,
        maxAssetSize: 512000,
        maxEntrypointSize: 512000,
        assetFilter: function (assetFilename) {
            return !assetFilename.match(/\.(woff2|woff|eot|ttf|otf|png|jpg|jpeg|gif|svg)$/);
        },
    }
}