import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/how-to-fire/',
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
        collapsed: true,
        items: [
          { text: '什么是 FIRE？', link: '/guide/01-fire-definition#什么是-fire' },
          { text: '为什么 AI PhD 要尽早 FIRE？', link: '/guide/01-fire-definition#为什么-ai-phd-要尽早-fire' },
          { text: '4% 法则', link: '/guide/01-fire-definition#_4-法则' },
          { text: '你的数字：1000 万人民币', link: '/guide/01-fire-definition#你的数字-为什么是-1000-万人民币' },
          { text: 'PhD 的天然优势', link: '/guide/01-fire-definition#phd-的天然优势' },
          { text: '路线图', link: '/guide/01-fire-definition#路线图' },
        ],
      },
      {
        text: '2. 积累本金',
        link: '/guide/02-accumulate-capital',
        collapsed: true,
        items: [
          { text: '大模型时代的 AI PhD 收入', link: '/guide/02-accumulate-capital#大模型时代的-ai-phd-收入' },
          { text: '副业探索：构建流量杠杆', link: '/guide/02-accumulate-capital#副业探索-构建你的流量杠杆' },
          { text: '节流不等于苦行', link: '/guide/02-accumulate-capital#节流不等于苦行' },
          { text: '时间窗口', link: '/guide/02-accumulate-capital#时间窗口' },
        ],
      },
      {
        text: '3. 构建自己的投资框架',
        link: '/guide/03-investment-framework',
        collapsed: true,
        items: [
          { text: '我的投资启蒙', link: '/guide/03-investment-framework#我的投资启蒙-从余额宝到-p2p-暴雷' },
          { text: '公募基金与 A 股的浮浮沉沉', link: '/guide/03-investment-framework#公募基金与-a-股的浮浮沉沉' },
          { text: '找到自己的能力圈', link: '/guide/03-investment-framework#找到自己的能力圈' },
          { text: '推荐一条学习路径', link: '/guide/03-investment-framework#如果让我给刚上大学的自己推荐一条学习路径' },
          { text: '资产配置：投稳/投增/投变', link: '/guide/03-investment-framework#资产配置-把不同钱放进不同的账户' },
          { text: '风险管理', link: '/guide/03-investment-framework#风险管理' },
          { text: '复利的力量', link: '/guide/03-investment-framework#复利的力量' },
        ],
      },
      {
        text: '4. 我的投资实践',
        link: '/guide/04-my-strategies',
        collapsed: true,
        items: [
          { text: '资产配置总体思路', link: '/guide/04-my-strategies#一-资产配置总体思路' },
          { text: '可转债轮动实践', link: '/guide/04-my-strategies#二-可转债轮动实践' },
          { text: '美股 + Covered Call 实践', link: '/guide/04-my-strategies#三-美股优质股票-covered-call-实践' },
          { text: '港股打新', link: '/guide/04-my-strategies#四-港股打新' },
          { text: '踩过的坑', link: '/guide/04-my-strategies#踩过的坑' },
        ],
      },
      {
        text: '附录',
        collapsed: true,
        items: [
          {
            text: '全局书单',
            link: '/appendix/reading-list',
            collapsed: true,
            items: [
              { text: '入门启蒙', link: '/appendix/reading-list#入门启蒙' },
              { text: '投资理念', link: '/appendix/reading-list#投资理念' },
              { text: '市场与周期', link: '/appendix/reading-list#市场与周期' },
              { text: '风险与不确定性', link: '/appendix/reading-list#风险与不确定性' },
              { text: '心理学与行为金融', link: '/appendix/reading-list#心理学与行为金融' },
              { text: 'FIRE 与财富自由', link: '/appendix/reading-list#fire-与财富自由' },
              { text: '具体策略与工具', link: '/appendix/reading-list#具体策略与工具' },
              { text: '中国市场', link: '/appendix/reading-list#中国市场' },
              { text: '在线资源', link: '/appendix/reading-list#在线资源' },
            ],
          },
          {
            text: 'FAQ',
            link: '/appendix/faq',
          },
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
