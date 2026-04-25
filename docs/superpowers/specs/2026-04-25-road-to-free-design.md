# AI PhD 的 FIRE 之路 — 网站设计文档

## 定位

一个以"大模型时代，AI PhD 最容易 FIRE"为核心叙事的系列文章站，纯文档/大纲风格，中文内容，持续更新。

## 内容大纲

```
1. 前言：大模型时代，AI PhD 为什么离 FIRE 最近
   - AI PhD 的收入天花板正被大模型浪潮重写
   - 高收入 + 低物欲 = 最短 FIRE 路径
   - 这个系列会写什么

2. FIRE 是什么？——财务独立的数学定义
   - FIRE 的核心理念与 4% 法则
   - 你的数字：为什么 100 万美金是可行目标
   - 合理开销的界定：PhD 的低成本生活方式是天然优势

3. 如何积累本金？——AI PhD 的黄金变现期
   - 主业：大模型时代的 PhD offer 到底有多高
   - 副业：咨询、授课、技术写作、开源
   - 天然优势：高薪而无需高消费的生活方式
   - 时间窗口：PhD 到工作的前 5 年是积累关键期

4. 培养投资范式——从零建立投资体系
   - 为什么大多数 PhD 空有收入却没投资体系
   - 我的投资学习路径：阅读-模拟-小资金-迭代
   - 资产配置框架：股/债/现金/另类
   - 风险管理：仓位、止损、安全边际

5. 我的投资实践（具体策略）
   - 可转债轮动策略
   - 美股长期持有与定投
   - 港股打新套利
   - 踩过的坑与教训

6. 投资心理学
   - FOMO 与恐慌
   - 如何在市场波动中保持理性
   - PhD 思维对投资的帮助与陷阱

7. 附录
   - 推荐书单
   - 数据源与工具链
```

## 技术选型

**VitePress** — Vue 团队文档站生成器

- 左侧大纲导航，匹配文档/大纲式阅读
- 内置本地搜索，支持中文分词
- Markdown 即写即用
- 通过 `base: '/road-to-free/'` 原生支持子路径部署
- GitHub Actions 自动构建部署到 GitHub Pages

## 项目结构

```
ai-phd-road-to-fire/
├── docs/                    # VitePress 内容根目录
│   ├── index.md             # 首页 = 前言
│   ├── guide/               # 核心章节
│   │   ├── 01-fire-definition.md
│   │   ├── 02-accumulate-capital.md
│   │   ├── 03-investment-framework.md
│   │   ├── 04-my-strategies.md
│   │   └── 05-psychology.md
│   ├── appendix/            # 附录
│   │   ├── reading-list.md
│   │   └── tools.md
│   └── public/              # 静态资源
├── .vitepress/
│   └── config.mts           # VitePress 配置
├── .github/
│   └── workflows/
│       └── deploy.yml       # 自动部署
└── package.json
```

## 部署

- **地址**: `https://lilei-nlp.github.io/road-to-free/`
- **分支**: `gh-pages` (GitHub Actions 自动推送构建产物)
- **触发**: `main` 分支 push 自动触发构建
- **耗时**: 约 2 分钟完成部署

## 写作流程 (操作手册)

| 操作 | 怎么做 |
|------|--------|
| 新建章节 | 在 `docs/guide/` 下新建 `XX-title.md`，在 `.vitepress/config.mts` 的 sidebar 数组中加一行配置 |
| 追加内容 | 直接在已有 `.md` 文件中尾部追加，建议文末标注 `> 更新于 YYYY-MM-DD` |
| 本地预览 | 运行 `npm run docs:dev`，浏览器打开 `http://localhost:5173/road-to-free/`，修改 Markdown 后页面自动热更新 |
| 发布上线 | `git add . && git commit -m "update: 描述" && git push`，2分钟后线上生效 |

### 新增章节示例

```bash
# 1. 新建 Markdown 文件
vim docs/guide/06-new-topic.md

# 2. 在 .vitepress/config.mts 的 sidebar 中添加:
#   { text: '6. 新主题', link: '/guide/06-new-topic' },

# 3. 本地预览
npm run docs:dev

# 4. 发布
git add . && git commit -m "add: 新主题" && git push
```

## 后续可扩展项

- Giscus 评论区集成
- Google Analytics 统计
- RSS 订阅
- 中英双语版本
