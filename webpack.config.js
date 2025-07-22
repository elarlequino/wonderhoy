const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Point d'entrée pour le JS
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader", // Pour la compatibilité JS
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource", // Gestion des images
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html", // Utiliser le HTML existant
    }),
    new ImageMinimizerPlugin({
      test: /\.(png|jpe?g|gif)$/i,
      minimizer: {
        implementation: ImageMinimizerPlugin.imageminGenerate,
        options: {
          plugins: [
            ["imagemin-mozjpeg", { quality: 70 }],
            ["imagemin-pngquant", { quality: [0.5, 0.8] }],
          ],
        },
      },
    }),
  ],
  mode: "production", // Mode de production pour minifier le JS
};
