# 📚 学习路线图与资源库 (Overview)

欢迎来到我的技术路线与学习资源库。这里收录了我在不同技术领域沉淀的系统化学习路线图、核心知识架构以及 GitHub 开源资源推荐。

---

## 🤖 1. AI Engineering 学习手册
从大模型基础、上下文工程到 Agentic 闭环系统与本地微调部署的完整成长路线。
* **[第 1 章：Generative AI & RAG 架构](./chapter_1.md)** —— 深入提示词工程、结构化输出以及向量数据库的检索机制。
* **[第 2 章：Agentic 智能体系统](./chapter_2.md)** —— 探讨 ReAct 规划模型、函数调用工具路由及多智能体框架协作。
* **[第 3 章：MLOps、微调与量化部署](./chapter_3.md)** —— LoRA/QLoRA 高效微调，GGUF/AWQ/FP8 压缩，以及 vLLM 在线推理。

---

## 🦀 2. Rust 高性能系统开发路线
高并发、零拷贝与异步运行时设计底层原理，适合对底层系统开发感兴趣的工程师。
* **[第 4 章：异步运行时与 Epoll 循环](./chapter_4.md)** —— 探索 Rust 异步 Future 调度以及底层 Epoll/Kqueue 边缘触发。
* **[第 5 章：内存模型与零拷贝解析](./chapter_5.md)** —— 理解所有权模型、Pin 与 Unpin、以及高性能无拷贝数据包解析。

---

## 🌐 3. 现代 Web 架构与工程化路线
解耦部署、Monorepos 与 Edge Runtimes 最佳实践，帮助构建现代化、易维护的 Web 系统。
* **[第 6 章：解耦式 Monorepo 构建流水线](./chapter_6.md)** —— 探索 npm Workspaces、打包工具依赖提升与静态资源的发布部署。
* **[第 7 章：边缘运行时 SSR 渲染优化](./chapter_7.md)** —— 探索 Edge/Cloudflare Workers 无服务器部署与 SSR 渐进式水合。
