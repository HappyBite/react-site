import path from 'path';

import AssetsPlugin from 'assets-webpack-plugin';
import webpack from 'webpack';

const isProduction = process.env.NODE_ENV === 'production';

export default {
  target: 'web',
  node: {
    fs: 'empty',
    child_process: 'empty'
    // './node_modules/sdk/node_modules/nconf/node_modules/yargs/node_modules/os-locale/index.js': false
  },
  entry: {
    main: isProduction ? [
      './client',
    ] : [
      'webpack-hot-middleware/client',
      './client',
    ],
    vendor: [
      'react',
      'react-dom',
      'react-router/BrowserRouter',
      'react-router/Link',
      'react-router/Match',
      'react-router/Miss'
    ],
  },
  output: {
    filename: `static/js/[name]${isProduction ? '.[chunkhash:8]' : ''}.js`,
    path: path.resolve(__dirname, '.build'),
    publicPath: '/'
  },
  module: {
    exprContextCritical: false,
    rules: [
      {
        test: /\.json/,
        use: [
          {
            loader: 'json-loader'
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: [
                ['es2015', { modules: false }],
                'react',
              ],
              plugins: isProduction ? [
                'transform-react-remove-prop-types',
              ] : [],
              cacheDirectory: !isProduction,
            },
          },
        ],
      },
      {
        test: /\.(eot|gif|jpe?g|otf|png|svg|webp|woff|woff2?|ttf)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url',
            options: {
              limit: 10000,
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new AssetsPlugin({
      filename: 'assets.json',
      path: '.build/static',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor'),
    ...isProduction ? [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
        },
        output: {
          comments: false,
        },
      }),
    ] : [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
    ],
  ],
  bail: isProduction,
  stats: {
    children: false,
  },
};
