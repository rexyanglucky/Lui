var path = require('path');
var fs = require('fs');
var config = {};
var scanDir=function (root) {
    var that = this;
    console.log(root);
    if (fs.statSync(root).isFile()) {
        var n = root.slice(root.lastIndexOf('\\js\\') + 4, root.length - 3);
        config[n]=path.join(__dirname,root);
        return;
    }
    try {

        fs.readdirSync(root).forEach(function (dir) {
            console.log(dir);
            console.log(path.join(root,dir));
            scanDir.call(that,path.join(root,dir));
        })
    } catch (e) {
        console.log(e);
    }
};
var getEntry = function () {
    var root = './src/js/';
    scanDir(root);
    console.log(config);
    return config;
};


module.exports = {
    entry: getEntry(),
    output: {
        path:path.join(__dirname,'bundle','js/'),
        publicPath: '',
        filename: '[name].js',
        // chunkFilename: '[name].chunk.js'
    },
    resolve: {
        extensions: ['.ts', '.js', '.json'],
        modules: [path.join(__dirname, 'src'), 'node_modules', 'lib']
    },
    devtool: "#cheap-module-eval-source-map",//dev 时使用
    module: {
        rules: [
            {
                test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"
            },
            {
                test: /\.ts$/,
                use: [
                    'awesome-typescript-loader',
                    'angular2-template-loader'
                ],
                exclude: [/\.(spec|e2e)\.ts$/]
            },
            {
                test: /\.css$/,
                use: ['to-string-loader', 'css-loader']
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: 'file-loader'
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000
                    }
                }
            }],
    },
    externals: {
        'jquery': 'jQuery'
    }


};