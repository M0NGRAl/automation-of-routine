const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = (env) =>{
    const isDev = env === 'development';
    return {
        mode: isDev ? 'development' : 'production',
        devtool: isDev ? 'inline-source-map' : false,
        devServer: {
            static: './dist',
            hot: isDev,
            port: 3000,
        },
        entry: './index.js',
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Development',
            }),
        ],
        output: {
            filename: 'main.js'
        }
    }

}