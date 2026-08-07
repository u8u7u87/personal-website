# Chapter 7: 边缘运行时 SSR 渲染优化

随着 CDN 技术演进，将全栈逻辑下沉到边缘节点 (Edge Computing) 已成为优化首屏加载和降低服务器压力的首选方案。

## 1. 边缘运行时 (Edge Runtime) 特性
* **基于 V8 Sandbox**: 不同于笨重的 Node.js 完整容器，边缘计算节点（如 Cloudflare Workers、Vercel Edge）使用轻量级 V8 隔离实例，启动时间接近 0ms (Zero Cold Start)。
* **有限 API 支持**: 不支持完整的文件系统读写或 Node 原生 C++ 插件，需依赖标准的 Web Platform APIs (如 `fetch`、`Streams`)。

## 2. 渐进式水合与流式 SSR
* **HTML Streaming**: 边缘服务器生成部分关键 HTML 并立即流式传输给用户，浏览器在接收流的同时开始渲染骨架屏。
* **渐进式水合 (Progressive Hydration)**: 客户端按需激活交互组件，极大地减少了首屏的 JavaScript 阻塞执行时间。
