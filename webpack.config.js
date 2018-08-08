module.exports = {
    mode: "development",
    entry: "src/index.js",
    output: {
        path: __dirname+'/static',
        filename: "[name].[chunkhash:8].js"
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "eslint-loader"
            },
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                use: "vue-loader"
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    "plugins": [new MiniCssExtractPlugin({filename: "[name]-[contenthash:8].css"})]
  }