/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
    ignoredRouteFiles: [".*"],
    appDirectory: "src",
    assetsBuildDirectory: "public/build",
    serverBuildPath: "build/index.js",
    publicPath: "/build/",
    serverBuildTarget: "node-cjs",
    devServerPort: 8002,
    devServerBroadcastDelay: 3000
};
