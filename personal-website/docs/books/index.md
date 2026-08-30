---
title: "AI Engineering 学习成长手册 (Introduction)"
description: "从 0 到 1 掌握大模型应用开发，涵盖大模型基础、提示词工程、RAG、Agent 构建、模型微调与 MLOps 部署的系统化学习路线。"
---

# 📚 AI Engineering 学习成长手册 (Introduction)

欢迎来到 **《AI Engineering 学习成长手册》**。

随着大语言模型（LLM）能力的跃升，软件工程的范式正在发生深刻变革。未来的工程师不仅需要懂得如何编写传统的 CRUD 逻辑，更需要掌握如何“驾驭”大模型，将其作为系统的推理引擎（Reasoning Engine）。这个全新的交叉领域，被称为 **AI Engineering (AI 工程化)**。

本手册旨在为您提供一条从零到一的、系统化的 AI 工程师成长路线图。不同于碎片化的网络教程，本书将以工业级落地的视角，带您逐步跨越从“调包侠”到“系统架构师”的鸿沟。

---

## 🗺️ 核心学习路线图 (Roadmap)

本手册由浅入深，划分为七个核心阶段，完美契合大模型应用从 Demo 走向 Production 的全生命周期：

### 🛠️ 阶段一：打好地基 (Foundations)
* **[第一章：大模型基础与API开发](./chapter_1)**
  * 掌握大模型的基本原理（Transformer, Tokenization, Context Window）。
  * 熟悉主流闭源/开源模型（GPT-4o, Claude 3.5, Llama 3, Qwen, Yi, DeepSeek）。
  * 掌握 API 的调用姿势（流式输出 Streaming, Temperature 控制, JSON Mode）。

### 🧠 阶段二：掌控模型的“大脑” (Control & Alignment)
* **[第二章：提示词工程与系统设计](./chapter_2)**
  * 从基础的 Few-shot 到进阶的 Chain-of-Thought (CoT)、Tree-of-Thought (ToT)。
  * 掌握 Function Calling (工具调用) 与 Structured Output (结构化输出) 约束。
  * Prompt 版本的版本控制与迭代测试。

### 🔍 阶段三：突破知识边界 (Knowledge Augmentation)
* **[第三章：RAG (检索增强生成) 架构与实践](./chapter_3)**
  * 理解 Vector Embeddings 与 向量数据库 (Milvus, Qdrant)。
  * 高阶 RAG 技巧：Query 意图重写、Multi-way 混合检索、Re-ranking 重排序。
  * 知识图谱与大模型的结合 (GraphRAG)。

### 🤖 阶段四：从被动走向主动 (Autonomy)
* **[第四章：Agent (智能体) 系统的构建与评估](./chapter_4)**
  * Agent 的四大核心组件：Planning (规划), Memory (记忆), Tool Use (工具), Action (执行)。
  * 经典架构解析：ReAct, Reflexion, LATS。
  * 多智能体协同框架 (Multi-Agent)：LangGraph, AutoGen 深度实践。

### ⚡ 阶段五：私人定制与极致压缩 (Customization)
* **[第五章：模型微调与大模型后训练](./chapter_5)**
  * 监督微调 (SFT) 与参数高效微调 (PEFT, LoRA/QLoRA)。
  * 强化学习人类对齐 (RLHF, DPO)。
  * 如何准备高质量的微调数据集（数据飞轮）。

### 🏭 阶段六：走向工业级生产环境 (Production & MLOps)
* **[第六章：AI 产品部署、监控与成本优化](./chapter_6)**
  * 高性能推理引擎选型 (vLLM, TensorRT-LLM, SGLang)。
  * 大模型全链路可观测性 (LLMOps, LangSmith, PromptFlow)。
  * 缓存策略 (Semantic Cache) 与极限 Token 降本提效。

### 🔭 阶段七：终身学习 (Continuous Learning)
* **[第七章：前沿探索与终身学习指南](./chapter_7)**
  * 追踪前沿论文（Scaling Law, 亚二次方架构 Mamba）。
  * 必读开源项目与行业顶级研报推荐。

---

> [!TIP] **如何使用本手册？**
> 本手册不是一本只谈理论的教科书。在每个章节的末尾，我们都会附带 **“工业级避坑指南”** 与 **“面试常考点”**。建议您结合左侧导航栏的 [AI Infra 生产级架构库](/llm/) 以及 [企业分析库](/analysis/) 交叉阅读，实现从底层基座到顶层应用的认知大一统。

👉 **[准备好了吗？点击进入 第一章：大模型基础与API开发 开启旅程！](./chapter_1)**
