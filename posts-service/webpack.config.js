"use strict";
const NodemonPlugin = require("nodemon-webpack-plugin");

module.exports = (env = {}) => {
  const config = {
    entry: ["./index.ts"],
    mode: env.development ? "development" : "production",
    target: "node",
    devtool: env.development ? "eval-cheap-source-map" : false,
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: ["ts-loader"],
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".js"],
      modules: ["node_modules", "package.json"],
    },
    watch: true,
    plugins: [],
  };

  if (env.nodemon) {
    config.watch = true;
    config.plugins.push(new NodemonPlugin());
  }

  return config;
};
