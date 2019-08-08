/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  entry: './index.ts',
  mode: 'development',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      elements: path.resolve(__dirname, './app/elements'),
      compounds: path.resolve(__dirname, './app/compounds'),
      hooks: path.resolve(__dirname, './app/hooks'),
      modules: path.resolve(__dirname, './app/modules'),
      layouts: path.resolve(__dirname, './app/layouts'),
      'page-modules': path.resolve(__dirname, './app/page-modules'),
      config: path.resolve(__dirname, './app/config'),
      types: path.resolve(__dirname, './app/types'),
      utils: path.resolve(__dirname, './app/utils'),
      static: path.resolve(__dirname, './static'),
      pages: path.resolve(__dirname, './pages'),
    },
    extensions: ['.tsx', '.ts', '.js', 'jsx'],
  },
};
