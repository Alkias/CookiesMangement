const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "cookieconsent.js",
        path: path.resolve(__dirname, "dist")
    },
    optimization: {
        minimize: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
};