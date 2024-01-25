// @ts-check
const path = require("node:path");
const process = require("node:process");

const channel = process.env?.TARGET_DEVICE;
if (channel == undefined) throw new Error("TARGET_DEVICE is not set");

/** @type {import("electron-builder").Configuration} */
const builderOptions = {
  appId: "com.github.sabonerune.eb-example",
  publish: [
    {
      provider: "github",
      owner: "sabonerune",
      repo: "eb-example",
      channel,
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
    category: "Development",
    target: [
      {
        target: "AppImage",
      },
      {
        target: "tar.gz",
      }
    ]
  },
  artifactBuildCompleted: path.resolve(__dirname, "build", "artifactBuildCompleted.js"),
}

module.exports = builderOptions;
