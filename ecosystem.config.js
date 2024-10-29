module.exports = {
  apps: [
    {
      name: "my-app",
      script: "./dist/dist-sync-code-o-dh-012.js",
      watch: ["./dist/dist-sync-code-o-dh-012.js"], // Chỉ giám sát file này
      ignore_watch: ["*"], // Bỏ qua mọi thứ khác
      //   max_restarts: 5,
      autorestart: true,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
