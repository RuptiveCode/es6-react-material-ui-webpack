var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        bundle: './app/App.js',
        vendors: ['react','classnames','match-media']
    },
    output: {
        path: './build',
        filename: 'bundle.js'
    },
    devtool: 'inline-source-map',    
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-0']
            }
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loaders: [
                'file?hash=sha512&digest=hex&name=[hash].[ext]',
                'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
            ]
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js', Infinity)
    ],
    devServer: {
      historyApiFallback: true
    }
};
