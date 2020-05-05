const path = require("path");
const outputPath = path.resolve(__dirname, "Public");

module.exports = {
  entry: "./entrypoint/index.js",
  mode: "development",
  output: {
    filename: "index.js",
    path: outputPath,
  },
};
