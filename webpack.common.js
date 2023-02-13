const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/scripts/index.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minChunks: 1,
      minSize: 20000,
      maxSize: 70000,
      maxAsyncRequests: 5,
      maxInitialRequests: 5,
      automaticNameDelimiter: '~',
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.css|\.s(c|a)ss$/,
        oneOf: [
          {
            resourceQuery: /directly/,
            use: [
              {
                loader: 'style-loader',
              },
              {
                loader: 'css-loader',
              },
              {
                loader: 'sass-loader',
              },
            ],
          },
          {
            use: [
              {
                loader: 'lit-scss-loader',
                options: {
                  minify: true,
                },
              },
              'extract-loader',
              {
                loader: 'css-loader',
              },
              {
                loader: 'sass-loader',
              },
            ],
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/templates/template.html'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
          globOptions: {
            // CopyWebpackPlugin mengabaikan berkas yang berada di dalam folder images
            ignore: ['**/images/**'],
          },
        },
      ],
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      swDest: './sw.bundle.js',
    }),
    new BundleAnalyzerPlugin(),
  ],
  resolve: {
    alias: {
      '@icons': path.resolve(__dirname, 'src/scripts/components/icons'),
      '@elements': path.resolve(__dirname, 'src/scripts/components/elements'),
      '@modules': path.resolve(__dirname, 'src/scripts/components/modules'),
      '@utils': path.resolve(__dirname, 'src/scripts/components/utils'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@globals': path.resolve(__dirname, 'src/scripts/globals'),
      '@routes': path.resolve(__dirname, 'src/scripts/routes'),
      '@pages': path.resolve(__dirname, 'src/scripts/pages'),
      '@data': path.resolve(__dirname, 'src/scripts/data'),
    },
  },
};
