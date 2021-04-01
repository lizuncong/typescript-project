### 爬虫小项目
- 使用superagent爬取网页
- 当使用 `import superagent from 'superagent';`，TS会提示找不到模块。
  因为superagent是js库，缺少ts类型文件。ts提供了一个解决方案，即用户或者插件开发者提供一个
  .d.ts类型定义文件。superagent目前社区已有@types/superagent类型文件，可以安装使用。
- 使用cheerio进行数据提取
