import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  //添加集成
  //mdx: https://github.com/mdx-js/mdx
  //sitemap 网站地图 一个 XML 文件，它列出了你的网站上的所有页面、视频和文件等资源。包括 Google 等在内的搜索引擎会读取这个文件以便他们更高效地抓取你的网站
  integrations: [mdx(), sitemap(), 
    //自定义端点
    vue({ appEntrypoint: '/src/pages/vue/_app' })]
});