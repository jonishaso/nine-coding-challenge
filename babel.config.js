module.exports = {
  presets: [["@babel/preset-env", { targets: { node: "current" } }]],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "#root": "./src"
        }
      }
    ],
    "@babel/plugin-proposal-optional-chaining"
  ]
};
