// @ts-check
const path = require("node:path")
const { spawn } = require("node:child_process")
exports.default = async (/** @type {import("electron-builder").ArtifactCreated} */ context) => {
  // ref: https://github.com/electron-userland/electron-builder/issues/4119
  if (context.packager.platform.name === "windows" && context.target?.name === "zip") {
    const zipPath = context.file;
    const markFile = path.join(__dirname, "WindowsZipInfo");
    await new Promise((resolve, reject) => {
      const p = spawn("7z", ["u", "-bd", zipPath, markFile], { shell: true, stdio: "inherit" });
      p.on("close", resolve);
      p.on("error", () => {
        console.error("7z command is error");
        reject();
      });
    });
  }
}
