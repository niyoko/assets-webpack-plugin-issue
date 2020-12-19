const path = require('path');
const AssetsPlugin = require('assets-webpack-plugin');
const SriPlugin = require('webpack-subresource-integrity');

module.exports = {
  mode: 'production',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]-bundle-[contenthash].js',
    publicPath: '/js/',
    crossOriginLoading: 'anonymous',
  },
  plugins: [
    new AssetsPlugin({
      path: path.join(__dirname, 'dist'),
      prettyPrint: true,
      integrity: true,
    }),
    new SriPlugin({
      hashFuncNames: ['sha256', 'sha384'],
      enabled: true,
    }),
  ],
};
