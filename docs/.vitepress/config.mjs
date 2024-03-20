import { defineConfig } from 'vitepress'
const head = require("./head");
const nav = require("./nav");
const socialLinks = require("./socialLinks");
//const sidebar = require("./sidebar");
//const footer = require("./footer");
//const carbonAds = require("./carbonAds")
export default defineConfig({
  lang: 'zh-CN',
  title: "艺创文档",
  description: "艺创文档 - 艺创数字 · 创意文档网站",
  outDir: './.vitepress/docs',//构建目录
  assetsDir: 'static', //资源目录
  head: head,//头部文件
  //base: '/',
  titleTemplate: ':title - 艺创数字 · 创意文档网站',//允许自定义每个页面的标题后缀或整个标题。

  markdown: {
    lineNumbers: true,//代码块行号
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    },//提示标语
  },
  sitemap: {
    hostname: 'https://docs.aueal.com',
    lastmodDateOnly: false
  },//站点地图
  themeConfig: {
    logo: {
      light: '/images/logo.svg', //明亮logo
      dark: '/images/logo.svg' //黑暗logo
    },
    siteTitle: false,//禁用文字logo
    //algolia: algolia, algolia搜索
    socialLinks: socialLinks,// 社交链接
    nav: nav, // 导航
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    outline: {
      label: '页面导航',//大纲
      level: 'deep' //深度
    },
    editLink: {
      pattern: 'https://github.com/vaeals/audoc/edit/main/docs/:path',
      text: '在GitHub上编辑此页面'
    },
    footer: {
      message: '备案号：<a href="//beian.miit.gov.cn/">沪ICP备2023012559号</a>',
      copyright: `Copyright © 2022-${new Date().getFullYear()} <a href="//www.aueal.com/">艺创</a> All right reserved`
    },
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },//最后更新时间
    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    search: {
      provider: 'local'
    },//开启搜索

    sidebar: {
      // 当用户位于 `tools` 目录时，会显示此侧边栏
      '/tools/': [
        {
          text: '小工具',
          items: [
            { text: 'Steam Card', link: '/tools/steam-card' },
            { text: 'Email Helper', link: '/tools/email-helper' },
            { text: 'Two', link: '/tools/two' }
          ]
        },
        { text: '团队', link: '/team' }, 
      ],

      // 当用户位于 `chatgpt` 目录时，会显示此侧边栏
      '/chatgpt/': [
        {
          text: 'ChatGPT',
          items: [
            { text: 'Index', link: '/chatgpt/' },
            { text: 'Three', link: '/chatgpt/three' },
            { text: 'Four', link: '/chatgpt/four' }
          ]
        },
        { text: '团队', link: '/team' }, 
      ],
      '/art/': [
        {
          text: '简介',
          collapsed: true,
          items: [
            { text: '什么是Stable Diffusion', link: '/art/' },
            { text: '快速开始', link: '/art/getting-started' },
          ],
        },
        {
          text: '教程',
          collapsed: true,
          items: [
            { text: '下载', link: '/art/tutorial/' },
          ],
        },
        {
          text: '模型',
          collapsed: true,
          items: [
            { text: '下载', link: '/art/models/' },
          ],
        },
        {
          text: 'LORA',
          collapsed: true,
          items: [
            { text: '下载', link: '/art/lora/' },
          ],
        },
        {
          text: '作品展示',
          items: [
            { text: '堆艺社区', link: 'https://forum.vaeal.com/' },
            { text: '吐司Art', link: 'https://tusiart.com/' },
            { text: 'Civitai', link: 'https://civitai.com/' },
            { text: 'Civitai镜像', link: 'https://civitai.work/' },
          ],
        },
        {
          text: '相关网站',
          items: [
            { text: '标签超市', link: 'https://tags.novelai.dev/' },
            { text: 'Koishi插件', link: 'https://bot.novelai.dev/' },
            { text: 'Nonebot2插件', link: 'https://nb.novelai.dev/' },
            { text: '图片解析', link: 'https://bot.novelai.dev/' },
            { text: '开源社区', link: 'https://www.aigodlike.com/' },
          ],
        },
      ],
      '/emoji/': [
        {
          text: 'Emoji表情',
          items: [
            { text: '微笑与情感', link: '/emoji/smileys-emotion' },
            { text: '旅行与地点', link: '/emoji/travel-places' },
            { text: '动物与自然', link: '/emoji/animals-ature' },
            { text: '人与身体', link: '/emoji/people-body' },
            { text: '标志', link: '/emoji/symbols' },
            { text: '目标', link: '/emoji/objects' },
            { text: '习俗', link: '/emoji/custom' },
            { text: '活动', link: '/emoji/activities' }, 
          ]
        },
        { text: 'Emoji 来源', link: 'https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.mjs' }, 
        { text: '团队', link: '/team' }, 
      ],
    },
  }
})

