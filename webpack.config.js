const path = require('path');
const HTMLWevpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development'; // defining the mode type: if "true" then dev
const isProd = !isDev;


const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;

const optimization = () => {
  const config = {
      splitChunks: {
          chunks: 'all'
      }
  }

  if (isProd) {
      config.minimizer = [
          new OptimizeCssAssetsWebpackPlugin(),
          new TerserWebpackPlugin(),
      ]
  }

  return config
};

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: './index.js',
    },
    output:  {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist')
    },
    optimization: optimization(),
    devServer: {
        port: 4200,
        contentBase: './dist',
        hot: isDev,
    },
    plugins: [
        new HTMLWevpackPlugin({
            template: './index.html',
            minify: {
                collapseWhitespace: isProd,
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: filename('css')
        })
    ], 
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  hmr: isDev,
                  reloadAll: true
                },
              },
                'css-loader',

                {
                  loader: 'postcss-loader',
                  options: {
                    postcssOptions: {
                      plugins: [
                        require('autoprefixer'),
                      ]
                    },
                  },
                }
            ]
          },
          {
            test: /\.s[ac]ss$/,
            use: 
            [
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    hmr: isDev,
                    reloadAll: true
                  },
                },
                'css-loader',
                {
                  loader: 'postcss-loader',
                  options: {
                    postcssOptions: {
                      plugins: [
                        require('autoprefixer'),
                      ]
                    },
                  },
                },
                'sass-loader',
            ]
          }
          ,
          {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
                },
                {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
          }

        ]
    }
}











        