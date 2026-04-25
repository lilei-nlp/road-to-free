import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/road-to-free/',
  title: 'AI PhD 的 FIRE 之路',
  description: '大模型时代，AI PhD 如何实现财务自由',
  lang: 'zh-CN',

  themeConfig: {
    nav: [
      { text: '主页', link: 'https://lilei-nlp.github.io' },
      { text: 'GitHub', link: 'https://github.com/lilei-nlp' },
    ],

    sidebar: [
      {
        text: '前言',
        link: '/',
      },
      {
        text: '1. FIRE 的数学定义',
        link: '/guide/01-fire-definition',
      },
      {
        text: '2. 积累本金',
        link: '/guide/02-accumulate-capital',
      },
      {
        text: '3. 构建自己的投资框架',
        link: '/guide/03-investment-framework',
      },
      {
        text: '4. 我的投资实践',
        link: '/guide/04-my-strategies',
      },
      {
        text: '5. 理解周期',
        link: '/guide/05-cycles',
      },
      {
        text: '6. 投资心理学',
        link: '/guide/06-psychology',
      },
      {
        text: '附录',
        collapsed: false,
        items: [
          { text: '推荐书单', link: '/appendix/reading-list' },
          { text: '数据源与工具链', link: '/appendix/tools' },
        ],
      },
    ],

    search: {
      provider: 'local',
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    outline: {
      level: [2, 3],
      label: '本页大纲',
    },

    lastUpdated: {
      text: '最后更新',
    },
  },

  markdown: {
    lineNumbers: true,
  },
})
