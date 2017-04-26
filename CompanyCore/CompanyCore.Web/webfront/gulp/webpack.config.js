var path = require('path');

module.exports = {

  resolve: {
    extensions: ['.ts', '.js', '.json',''],
    modules: [path.join(__dirname, 'src'), 'node_modules','lib']
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [['es2015', { modules: false }]],
          plugins: ['syntax-dynamic-import']
        }
      }]
    },
    {
      test: /\.ts$/,
      use: [
        'awesome-typescript-loader',
        'angular2-template-loader'
      ],
      exclude: [/\.(spec|e2e)\.ts$/]
    }, {
      test: /\.css$/,
      use: ['to-string-loader', 'css-loader']
    }, {
      test: /\.(jpg|png|gif)$/,
      use: 'file-loader'
    }, {
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