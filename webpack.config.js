const path = require("path");
const webpack = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

process.env.NODE_ENV = process.env.NODE_ENV || "development";

if (process.env.NODE_ENV === "test") {
  require("dotenv").config({ path: ".env.test" });
} else if (process.env.NODE_ENV === "development") {
  require("dotenv").config({ path: ".env.development" });
}

let mode = "development";
let target = "web";
const plugins = [
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin(),
  new HtmlWebpackPlugin({
    template: "./src/index.html",
  }),
  new webpack.DefinePlugin({
    "process.env.FIREBASE_API_KEY": JSON.stringify(
      process.env.FIREBASE_API_KEY
    ),
    "process.env.FIREBASE_AUTH_DOMAIN": JSON.stringify(
      process.env.FIREBASE_AUTH_DOMAIN
    ),
    "process.env.FIREBASE_DATABASE_URL": JSON.stringify(
      process.env.FIREBASE_DATABASE_URL
    ),
    "process.env.FIREBASE_PROJECT_ID": JSON.stringify(
      process.env.FIREBASE_PROJECT_ID
    ),
    "process.env.FIREBASE_STORAGE_BUCKET": JSON.stringify(
      process.env.FIREBASE_STORAGE_BUCKET
    ),
    "process.env.FIREBASE_MESSAGING_SENDER_ID": JSON.stringify(
      process.env.FIREBASE_MESSAGING_SENDER_ID
    ),
    "process.env.FIREBASE_APP_ID": JSON.stringify(process.env.FIREBASE_APP_ID),
  }),
];

if (process.env.mode === "production") {
  mode = "production";
  target = "browserslist";
} else {
  plugins.push(new ReactRefreshWebpackPlugin());
}

module.exports = {
  mode: mode,
  target: target,

  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[hash][ext][query]",
  },

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset",
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: "" },
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: plugins,
  resolve: {
    extensions: [".js", ".jsx"],
  },

  devtool: "source-map",
  devServer: {
    contentBase: "./dist",
    hot: true,
  },
};
