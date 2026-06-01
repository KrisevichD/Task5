import MiniCssExtractPlugin from "mini-css-extract-plugin"

export function buildLoaders({ isDev }) {
    const assetLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    };

    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    icon: true,
                    svgoConfig: {
                        plugins: [
                            {
                                name: 'convertColors',
                                params: {
                                    currentColor: true,
                                }
                            }
                        ]
                    }
                }
            }
        ],
    };

    const cssLoader = {
        test: /\.css$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        localIdentName: isDev ? '[path][name]__[local]__[hash:base64:8]' : '[hash:base64:8]',
                    }
                }
            }
        ],
    };

    const jsxLoader = {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: [
                    '@babel/preset-env',
                    [
                        '@babel/preset-react',
                        {
                            runtime: 'automatic'
                        }
                    ]
                ]
            }
        }
    };

    return [
        assetLoader,
        svgLoader,
        cssLoader,
        jsxLoader
    ]
}