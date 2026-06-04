export function buildOptimization() {
    return {
        splitChunks: {
            chunks: 'all', 
            minSize: 20000, 
            maxSize: 240000,
            cacheGroups: {
                vendors: {
                  test: /[\\/]node_modules[\\/]/,
                  name(module) {
                    const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/);
                    return `npm.${packageName[1].replace('@', '')}`;
                  },
                  priority: -10,
                  reuseExistingChunk: true,
                },
                default: {
                  minChunks: 2,
                  priority: -20,
                  reuseExistingChunk: true,
                },
              },
        },
    }
}