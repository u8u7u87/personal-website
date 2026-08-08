# 完整多 Agent 协作体系与知识状态树管理规范 (Master Coordinator & Multi-Agent Spec)

## 1. 架构总览：主协调 Agent (Coordinator) 与 6 大执行 Agent

在本体系中，新增 **主协调 Agent (Master Coordinator / Master Director)** 作为“大脑指挥官”，负责制定全景知识点大纲、拆解任务依赖、监控处理状态，并指挥后续 6 个执行 Subagent 协同工作。

```mermaid
graph TD
    User([用户]) --> Master[0. 主协调 Agent (Master Coordinator)]
    
    subgraph "全局控制中心 (State & Roadmap Management)"
        StateTree[("全局知识状态树\n.agent_state/knowledge_tree.json")]
        StatusPage["博客首页 LLM 专栏大纲与进度看板\n(docs/llm/index.md)"]
    end
    
    Master <---> StateTree
    Master <---> StatusPage
    
    subgraph "6 大执行 Subagent 流水线 (Pipeline Execution)"
        Agent1[1. 素材搜集与多媒体解析 Agent (Collector)]
        Agent2[2. 资深 LLM 专家面试官 Agent (Interviewer)]
        Agent3[3. LLM/Agent 技术解答 Agent (Solver)]
        Agent4[4. 权威内容与代码审核 Agent (Auditor/QA)]
        Agent5[5. UI/UX 视觉美化 Agent (UI/UX Designer)]
        Agent6[6. Markdown 编排与构建 Agent (Writer/Builder)]
    end
    
    Master -->|派发当前待处理主题 Task| Agent1
    Agent1 --> Agent2
    Agent2 --> Agent3
    Agent3 --> Agent4
    Agent4 -->|审核Pass| Agent5
    Agent4 -->|审核Fail (打回重写)| Agent3
    Agent5 --> Agent6
    Agent6 -->|完成通知 & Build校验通过| Master
```

---

## 2. 主协调 Agent (Coordinator) 核心职责

1. **制定全景知识大纲与依赖依赖图 (Dependency Tree)**：
   - 梳理 LLM 理论、Agent 架构、工程落地、面试题库的全量知识点。
   - 设定优先级与学习/撰写顺序（如：先 `Transformer 基础` -> `MHA/GQA/MLA` -> `vLLM PagedAttention` -> `RAG` -> `Agent`）。
2. **实时任务状态管理 (`knowledge_tree.json`)**：
   - 维护每个知识点的状态：`PENDING`（未开始）、`IN_PROGRESS`（处理中）、`QA_REVIEW`（审核中）、`COMPLETED`（已完成）。
3. **驱动博客首页动态进度面板 (`docs/llm/index.md`)**：
   - 自动生成带有状态 Badge 的知识大纲地图，读者可清晰看到哪些章节已更新，哪些正在撰写中。
4. **异常恢复与上下文控制**：
   - 当任务运行时间过长或中断时，主协调 Agent 读取状态树，准确识别“下一步应该派发哪个主题”，确保绝不出错、不偏离方向。

---

## 3. 博客页面“知识补充”展示规范 (Supplementary Resources Section)

在每个最终生成的 Markdown 文章末尾，UI/UX Agent 与 Writer Agent 强制插入标准的 **`🔗 扩展学习与优质资源`** 规范模块，将 Collector 搜集到的博客、视频（含 Timestamp）、开源 Repo 等优雅呈现：

```markdown
---
## 🔗 扩展学习与多维资源补充

> [!TIP]
> 针对本知识点，以下是经过筛选的优质视频讲解、深度博客与 GitHub 核心源码位置，建议配合学习：

### 📺 优质视频解析 (Video Deep-Dives)
- 🎬 **[YouTube] Karpathy: Let's build GPT from scratch**
  - ⏱️ *关键节点*: `[42:15]` 详细推导 Self-Attention 中的 Scaling Factor
- 🎬 **[B站] 3Blue1Brown: 轻松理解 Transformer 注意力机制**
  - ⏱️ *关键节点*: `[08:30]` 矩阵乘法几何意义解释

### 📝 经典深度博客与论文 (Blogs & Papers)
- 📄 [DeepSeek-V3 Technical Report (Section 3.2: MLA Architecture)](https://arxiv.org/...)
- 📝 [Lilian Weng: LLM Powered Autonomous Agents](https://lilianweng.github.io/...)

### 🐙 GitHub 开源项目与源码走读 (Open Source & Source Code)
- 📦 **[vllm-project/vllm]** 核心算子位置: [`vllm/attention/ops/paged_attn.py`](https://github.com/vllm-project/vllm/tree/main/vllm/attention/ops/paged_attn.py)
- 📦 **[Awesome-LLM-Interview]** 对应面试真题集: [Attention 专题考点](https://github.com/.../interview)
```

---

## 4. 全局知识状态树数据结构 (`.agent_state/knowledge_tree.json`)

```json
{
  "project_name": "LLM & Agent Knowledge Base",
  "last_updated": "2026-08-08T23:36:00Z",
  "total_modules": 15,
  "completed_count": 0,
  "modules": [
    {
      "id": "1.1-attention-deep-dive",
      "title": "注意力机制深挖 (MHA/MQA/GQA/MLA)",
      "category": "1-fundamentals",
      "status": "PENDING",
      "dependencies": [],
      "assigned_agents_history": []
    },
    {
      "id": "3.2-llm-inference-vllm",
      "title": "vLLM 与 PagedAttention 工程落地",
      "category": "3-engineering",
      "status": "PENDING",
      "dependencies": ["1.1-attention-deep-dive"],
      "assigned_agents_history": []
    }
  ]
}
```

---

## 5. 建议的 Slash 命令
- **`/goal`**：启动基于主协调 Agent 驱动的全自动化长任务流水线。主协调 Agent 将自动读取 `knowledge_tree.json`，按顺序向 6 个 Subagent 派发任务，直到所有模块全部变为 `COMPLETED`。
