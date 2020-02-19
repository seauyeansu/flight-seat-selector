const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'index_bundle.js'
  },
    module: {
      rules: [
        { test: /\.(js)$/, use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env',
                      '@babel/react',{
                          'plugins': ['@babel/plugin-proposal-class-properties']}]
          }}},
        { test: /\.css$/, use: ['style-loader', 'css-loader']}
  ]},
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
}
