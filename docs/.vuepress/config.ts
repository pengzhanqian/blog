import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog/",
  port: 8081,
  dest: 'docs/.vuepress/dist',
  lang: "zh-CN",
  title: "学习笔记",
  description: "记录本人技术学习的笔记和总结",
  theme,
  // 和 PWA 一起启用
  shouldPrefetch: false,
});
