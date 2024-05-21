import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";

import fabric from "./config/fabric";
import algorithm from "./config/algorithm";

export default defineUserConfig({
  base: "/web-page/",
  lang: "zh-CN",
  title: "前端",
  description: "前端资料",
  head: [["link", { rel: "icon", href: "/web-page/images/favicon.png" }]],

  theme: defaultTheme({
    logo: "/images/ya.jpg",

    navbar: [
      { text: "算法", link: "/algorithm/" },
      { text: "fabric", link: "/fabric/" },
    ],
    sidebar: {
      "/algorithm": algorithm,
      "/fabric": fabric,
    },
  }),

  bundler: viteBundler(),
});
