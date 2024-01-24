// @ts-check
const path = require("node:path")
/** @type {import("electron-builder").Configuration} */
const builderOptions = {
  appId: "com.github.sabonerune.eb-example",
  publish: [
    {
      provider: "github",
      owner: "sabonerune",
      repo: "eb-example",
    }
  ],
  win: {
    target: [
      {
        target: "nsis-web",
      },
      {
        target: "zip",
      }
    ]
  },
  nsisWeb: {
    oneClick: false,
    artifactName: "${productName}-Setup-${version}.${ext}",
  },
  linux: {
    target: [
      {
        target: "AppImage",
      },
      {
        target: "tar.gz",
      }
    ]
  },
  artifactBuildCompleted:path.resolve(__dirname, "build", "artifactBuildCompleted.js"),
}

module.exports = builderOptions;
