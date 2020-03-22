const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
   // Entry points that have the 'babel-polyfill' value do so in order to use
   // async/await
   entry: {
      'qbs': ['idempotent-babel-polyfill', './src/app/index.js'],
      'app': ['idempotent-babel-polyfill', './src/index.js']
   },

   devtool: 'sourcemaps',

   cache: true,

   mode: 'development',

   output: {
      path: path.resolve(__dirname + '/server/build/'),
      filename: '[name].js'
   },

   module: {
      rules: [
         {
            test: /\.css$/,
            use: [
               'style-loader',
               'css-loader'
            ]
         },

         { test: /\.woff$/, use: 'url-loader?prefix=font/&limit=5000&mimetype=application/font-woff' },
         { test: /\.woff2$/, use: 'url-loader?prefix=font/&limit=5000&mimetype=application/font-woff2' },
         { test: /\.ttf$/, use: 'file-loader?prefix=font/' },
         { test: /\.eot$/, use: 'file-loader?prefix=font/' },
         { test: /\.svg$/, use: 'file-loader?prefix=font/' },
         { test: /\.(png|jpe?g|gif)$/i, use: [{loader: 'file-loader'}] },
         {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: [{
               loader: 'babel-loader',
               options: {
                  presets: [
                     '@babel/preset-env', {
                        plugins: [
                           '@babel/plugin-proposal-class-properties'
                        ]
                     },
                     '@babel/preset-react'
                  ],
                  plugins: [
                     [
                        '@babel/plugin-proposal-decorators', { 'legacy': true }
                     ]
                  ]
               }
            }]
         }
      ]
   },

   resolve: {
       alias: {
          'react-dom': '@hot-loader/react-dom'
       }
   },

   plugins: [
      new MiniCssExtractPlugin()
   ]
};
