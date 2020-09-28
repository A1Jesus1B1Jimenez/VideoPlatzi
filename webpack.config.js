const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const loader = require('sass-loader');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|gif|jpg|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[hash].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',

    }),
    new MiniCssExtractPlugin({
      filename: 'asses/[name].css',
    }),
  ],
};

// // primero se llama e instancia a path y al plugn  HtmlWebPackPlugin
// const path = require('path');
// const HtmlWebPackPlugin = require('html-webpack-plugin');

// // crear un modulo que se exportara con las configuraciones necesarias
// module.exports = {
//     // entrada
//     entry: './src/index.js',
//     // salida
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: 'bundle.js'
//     },
// //    resolucion de las extensiones utilizadas
//     resolve : {
//         extensiones: ['.js', '.jsx']
//     },
//     // creacion de un modulo con las reglas necesarias para el proyecto
//     module: {
//         rules: [
//             {
//                 test: /\.(js|jsx)s/,
//                 exclude: /node_modules/,
//                 use: {
//                     loader: "babel-loader"
//                 }
//             },
//             {
//                 test: /\.html$/,
//                 use: [
//                     {
//                         loader: 'html-loader'
//                     }
//                 ]
//             }
//         ]
//     },
//     // agreagr plugins necesarios
//     plugins: [
//         new HtmlWebPackPlugin ({
//             template: './public/index.html',
//             filename: './index.html'
//         }),
//     ]
// }
