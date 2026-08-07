# Chapter 6: 解耦式 Monorepo 构建流水线

现代前端和全栈工程越来越倾向于将多个子模块维护在同一个大仓库中。

## 1. Workspaces 与依赖提升 (Dependency Hoisting)
* **Workspaces (npm/yarn/pnpm)**: 允许在同一个工程根目录下定义多个独立的 package 子项目，并自动建立本地软连接。
* **依赖提升**: 共享第三方依赖包将被自动安装在根目录的 `node_modules` 下，减少磁盘占用并统一版本管理。

## 2. 跨子项目资源共享
* **Shared Styles / Assets**: 在多子模块间共享核心 CSS 主题变量 (如 `theme.css`) 或全局导航栏。
* **编译期共享**: 在打包时利用前端构建工具 (Vite / Astro) 读取相邻工作区目录的资产。
