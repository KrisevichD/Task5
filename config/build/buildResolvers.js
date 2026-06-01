export function buildResolvers(options) {
    return {
        extensions: ['.jsx', '.js'],
        alias: {
            '@': options.paths.src,
        }
    }
}