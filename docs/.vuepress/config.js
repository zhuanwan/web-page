import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";

import fabric from "./sidebar/fabric";
import algorithm from "./sidebar/algorithm";
import designPatterns from "./sidebar/design-patterns";

export default defineUserConfig({
  base: "/web-page/",
  lang: "zh-CN",
  title: "前端",
  description: "前端资料",
  head: [["link", { rel: "icon", href: "/web-page/images/favicon.png" }]],

  theme: defaultTheme({
    logo: "/images/ya.jpg",

    navbar: [
      { text: "设计模式", link: "/design-patterns/" },
      { text: "算法", link: "/algorithm/" },
      { text: "fabric", link: "/fabric/" },
    ],
    sidebar: {
      "/design-patterns": designPatterns,
      "/algorithm": algorithm,
      "/fabric": fabric,
    },
  }),

  bundler: viteBundler(),
});
