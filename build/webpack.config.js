const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
    entry: './src/RegExpPlugin.ts',
    mode: 'production',
    output: {
        path: path.resolve(__dirname + '/../dist/'),
        filename: 'change-checker-regexp-plugin.js',
        library: 'change-checker-regexp-plugin',
        libraryTarget: 'umd',
        devtoolModuleFilenameTemplate: info => {
            var $filename = 'sources://change-checker-regexp-plugin/' + info.resourcePath;
            return $filename;
        }
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    devtool: 'source-map',
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.ts/,
                exclude: /node_modules/,
                loader: "ts-loader",
                options: { configFile: "../tsconfig.json" }
            }
        ]
    }
};
