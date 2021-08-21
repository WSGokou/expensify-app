const plugins = [];

if (process.env.NODE_ENV === "development") {
<<<<<<< HEAD
  // plugins.push("react-refresh/babel");
=======
//   plugins.push("react-refresh/babel");
>>>>>>> 607d7ed0fbf6fc364d7817c985b7b1229eb0f915
}

module.exports = {
  presets: [
    "@babel/preset-env",
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
  plugins: plugins,
};
