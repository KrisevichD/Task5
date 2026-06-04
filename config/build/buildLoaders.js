import MiniCssExtractPlugin from "mini-css-extract-plugin"

export function buildLoaders({ isDev }) {
    const assetLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'assets/images/[name].[contenthash:8][ext]',
        },
    };

    const fontsLoader = {
        test: /\.woff2$/i,
        type: 'asset/resource',
        generator: {
            filename: 'assets/fonts/[name].[contenthash:8][ext]',
        },
    }

    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    svgo: false,
                    expandProps: 'end',
                    replaceAttrValues: {
                        'fill': '{props.fill || "currentColor"}',
                        'stroke': '{props.stroke || "currentColor"}',
                    },
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
        test: /\.jsx?$/,
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