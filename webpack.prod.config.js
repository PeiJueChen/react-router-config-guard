const path = require('path');
const fs = require('fs');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
module.exports = {
    mode: 'production',
    entry: './src/index.jsx',
    context: resolveApp('./'),
    output: {
        path: resolveApp('./dist'),
        filename: 'bundle.js',
        // AMD/CommonJS/浏览器
        // CommnJoS: 社区规范的CommonJS, 这个里面是没有module对象
        // commonjs2: Node实现的CommonJS, 这个里面是有module对象, module.exports
        // umd both
        // libraryTarget: 'umd',
        libraryTarget: 'umd',
        // library: "reactRouterConfigGuard",
        globalObject: "this"
    },
    resolve: {
        extensions: ['.jsx', '.wasm', '.mjs', '.js', '.json', ],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    externals: [nodeExternals()],
    plugins: [
        new CleanWebpackPlugin()
    ]
}