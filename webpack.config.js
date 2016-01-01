module.exports = {
    entry: "./src/index.es6",
    output: {
        path: __dirname,
        filename: "dist/bundle.js"
    },
    eslint: {
        configFile: './.eslintrc'
    },
    module: {
        preLoaders: [
            {test: /\.js$/, loader: "eslint", exclude: /node_modules/, },
            {test: /\.es6$/, loader: "eslint", exclude: /node_modules/, }
        ],
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: "babel"},
            {test: /\.es6$/, exclude: /node_modules/, loader: "babel"},
            {test: /\.scss$/, loaders: ["style", "css", "sass"]},
            {test: /\.handlebars$/, loader: "handlebars"},
            {test: /\.json$/, loader: "json"}
        ]
    }
};