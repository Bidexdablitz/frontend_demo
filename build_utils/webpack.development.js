const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (mode) => ({
    devtool: "source-map",
    output: {
        filename: "dev/js/[name].bundle.js",
        chunkFilename: "dev/js/[name].bundle.chunk.js",
    },
    module: {
        rules: [
            {
                test: /\.s?[sac]ss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "resolve-url-loader", "sass-loader"],
            },
            {
                test: /\.(jpe?g|png|svg|ttf)$/,
                exclude: /node_modules/,
                type: "asset/resource",
                generator: {
                    filename: "dev/images/[name][ext][query]",
                },
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "dev/css/[name].css",
            chunkFilename: "dev/css/[name].chunk.css",
            ignoreOrder: false,
        }),
    ],
});
