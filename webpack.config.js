const path = require("path");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const modeConfiguration = (mode) => require(`./build_utils/webpack.${mode}.js`)(mode);

module.exports = ({ mode } = { mode: "production" }) => {
    console.log(`current mode is: ${mode}`);

    return merge(
        {
            mode,
            watch: mode === "development",
            entry: "./src/index.tsx",
            output: {
                publicPath: "/static/main/",
                path: path.resolve(__dirname, "../main/static/main"),
                filename: "js/[name].bundle.js",
                chunkFilename: "js/[name].bundle.js",
            },
            module: {
                rules: [
                    {
                        test: /\.(js|jsx)$/,
                        exclude: /node_modules/,
                        loader: "babel-loader",
                    },
                    {
                        test: /\.(ts|tsx)$/,
                        use: "ts-loader",
                        exclude: /node_modules/,
                    },
                ],
            },
            resolve: {
                alias: {
                    assets: path.resolve(__dirname, "src/assets"),
                },
                extensions: [".tsx", ".ts", ".js", "..."],
                plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })],
            },
            plugins: [
                new HtmlWebpackPlugin({
                    template: "./public/index.html",
                    filename: "../../templates/main/index.html",
                }),
                new FaviconsWebpackPlugin({
                    logo: "./src/assets/images/company-logo2.png",
                    mode: "webapp",
                    devMode: "webapp",
                    favicons: {
                        icons: {
                            yandex: false,
                            coast: false,
                        },
                    },
                }),
            ],
        },
        modeConfiguration(mode)
    );
};
