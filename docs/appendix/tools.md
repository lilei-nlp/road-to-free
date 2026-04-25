# 数据源与工具链

## 数据源

### 美股

| 服务 | 用途 | 费用 |
|------|------|:--:|
| [Yahoo Finance](https://finance.yahoo.com) | 行情、基本面数据、历史数据 | 免费 |
| [SEC EDGAR](https://www.sec.gov/edgar) | 公司财报原始数据 | 免费 |
| [Finviz](https://finviz.com) | 可视化筛选器 | 免费/付费 |
| [Koyfin](https://koyfin.com) | 高级分析工具 | 免费/付费 |

### A 股 / 可转债

| 服务 | 用途 | 费用 |
|------|------|:--:|
| [集思录](https://www.jisilu.cn) | 可转债数据，FIRE 社区 | 免费/付费 |
| [雪球](https://xueqiu.com) | 中文投资社区 | 免费 |
| [东方财富](https://www.eastmoney.com) | A 股行情与数据 | 免费 |

### 宏观经济

| 服务 | 用途 |
|------|------|
| [FRED](https://fred.stlouisfed.org) | 美联储经济数据，利率、通胀、就业等 |
| [Trading Economics](https://tradingeconomics.com) | 全球宏观经济指标 |

## 工具

### 记账与预算

- **MoneyWiz / Money Pro**：适合 Apple 生态的记账 App
- **Google Sheets**：自己搭记账模板，灵活且免费
- **YNAB (You Need A Budget)**：主动预算管理工具

### 投资跟踪

- **Google Sheets**：我个人用的最多。几个公式就能跟踪持仓和收益
- **Portfolio Performance**：开源的投资组合追踪工具
- **Personal Capital / Empower**：自动聚合所有账户，免费

### 回测与分析

- **Python (pandas + numpy + matplotlib)**：对于 AI PhD 来说，自己写回测脚本比任何工具都好用
  - 数据源：`yfinance` (美股), `akshare` (A 股)
  - 回测框架：`backtrader` 或自己写
- **QuantConnect**：在线量化回测平台

## 我的日常流程

```
每月 1 号：
  ├── 更新资产负债表（Google Sheets）
  ├── 定投执行（美股指数）
  └── 可转债调仓检查

每季度：
  ├── 回顾投资记录与笔记
  ├── 调整资产配置比例
  └── 记录新的思考

每年：
  ├── 计算年度收益率
  ├── 对比基准（S&P 500）
  └── 更新 FIRE 进度
```

---

> 更新于 2026-04
