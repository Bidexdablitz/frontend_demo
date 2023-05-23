const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = (mode) => ({
    devtool: "source-map",
    output: {
        filename: "js/[name].[contenthash:8].bundle.js",
        chunkFilename: "js/[name].[contenthash:8].bundle.chunk.js",
    },
    module: {
        rules: [
            {
                test: /\.s?[sac]ss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "resolve-url-loader", "sass-loader"],
            },
            {
                test: /\.(jpe?g|png|gif|svg|ttf)$/,
                exclude: /node_modules/,
                type: "asset/resource",
                generator: {
                    filename: "images/[name].[contenthash:8][ext][query]",
                },
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].chunk.css",
            ignoreOrder: false,
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
        runtimeChunk: "single",
    },
});
