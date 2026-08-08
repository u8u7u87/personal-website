# LLM & Agent 知识库与面试宝典 (深度升级版设计规范)

## 1. 核心升级理念
针对“覆盖全、追问深、关联紧、资源丰富”的要求，本次设计进行以下三大核心升级：
1. **“剥洋葱”式面试追问链**：从基础概念 -> 源码/数学原理 -> 工程瓶颈/极值场景 -> 替代方案对比。
2. **跨知识点关联网格 (Knowledge Interconnection Matrix)**：建立模型原理、Agent 机制与工程落地之间的显式链接（例如：Context Window 扩展如何影响 RAG 选型，Attention 机制如何影响 Agent Memory 机制）。
3. **多媒体与开源资源深度整合**：整合 B站/YouTube 经典讲解视频 timestamp 标记、论文原图、GitHub 核心算法实现及测试用例。

---

## 2. 扩展后的全景知识树目录 (`docs/llm/`)

```text
docs/llm/
├── index.md                        # LLM 全景知识图谱与学习路线
├── 1-fundamentals/                 # 1. 基础理论与模型底层
│   ├── 1.1-attention-deep-dive.md  # MHA/MQA/GQA/MLA (DeepSeek V3) 机制与对比
│   ├── 1.2-positional-encoding.md  # RoPE, ALiBi, YaRN 长文本外推原理
│   ├── 1.3-pretraining-sft.md      # 预训练架构、Tokenizer(BPE/WordPiece)、SFT 数据清洗
│   ├── 1.4-rlhf-dpo-grpo.md        # RLHF (PPO), DPO, GRPO (DeepSeek Math/R1) 强化学习
│   └── 1.5-quantization-infer.md   # INT8/INT4 (AWQ, GPTQ), SmoothQuant, FP8 量化
├── 2-agent-framework/              # 2. Agent 架构与设计模式
│   ├── 2.1-agent-architectures.md  # ReAct, Plan-and-Solve, Reflexion, LATS
│   ├── 2.2-memory-systems.md       # 短期/长期记忆、向量存储、MemGPT 架构解析
│   ├── 2.3-function-calling.md     # Tool Use, Schema 校验, Structured Output 触发机制
│   └── 2.4-multi-agent-systems.md  # AutoGen, CrewAI, LangGraph 状态机与分布式 Actor 模式
├── 3-engineering/                  # 3. 工程落地与系统实现
│   ├── 3.1-advanced-rag.md         # Parent-Child Chunking, GraphRAG, Hybrid Search, Rerank
│   ├── 3.2-llm-inference-vllm.md   # PagedAttention, Continuous Batching, Speculative Decoding
│   └── 3.3-distributed-training.md # 3D 并行 (DP/TP/PP), ZeRO-1/2/3, FlashAttention 1/2/3
├── 4-interview-qa/                 # 4. 深度面试题库 (层层深入追问)
│   ├── 4.1-theory-deep-qa.md       # 理论底层追问链 (如: 为什么Transformer用LayerNorm而不是BatchNorm?)
│   ├── 4.2-system-design-qa.md     # 大模型系统设计 (如: 从零设计一个支持千万用户级的 RAG + Agent 平台)
│   └── 4.3-coding-handwritten.md   # 手撕代码题 (手写 GQA, 手写 PagedAttention 简化版, 手写 ReAct 循环)
└── 5-resources/                    # 5. 多媒体与开源项目指南
    ├── 5.1-awesome-github-repos.md # 优质 GitHub 项目解析与代码走读指南
    └── 5.2-video-lecture-notes.md  # B站/YouTube 优质视频课程笔记与关键节点标注 (如李沐, 3Blue1Brown, Andrej Karpathy)
```

---

## 3. “层层深入”面试题模版规范 (Deep Q&A Spec)

每个面试题均按照 **Level 1 (基础概念) -> Level 2 (底层原理与源码) -> Level 3 (工程边界与追问) -> Level 4 (跨模块关联)** 4层结构编写：

### 示例模版：
```markdown
# 题目：深度剖析注意力机制 (MHA vs MQA vs GQA vs MLA)

## 📌 Level 1：基础定义与直观理解
- **核心区别**：KV Cache 共享粒度的差异...

## 🧠 Level 2：推导与内存消耗计算
- **KV Cache 显存占用公式**：
  $$ \text{Memory}_{\text{KV}} = 2 \times b \times s \times l \times h \times d $$
- **MQA/GQA 显存节省推导**：...

## 💣 Level 3：高频面试追问 (Deep Dive)
- **追问 1：为什么 GQA 在大语言模型（如 LLaMA-3）中逐渐取代了 MHA？**
  - *回答要点*：带上显存带宽瓶颈（Memory Bandwidth Bound）分析...
- **追问 2：DeepSeek-V3 的 MLA (Multi-Head Latent Attention) 是如何进一步压缩 KV Cache 的？**
  - *回答要点*：低秩向量投影 (Low-rank Compression) + 结合 RoPE 的特殊解耦处理...

## 🔗 Level 4：跨模块关联 (Interconnection)
- **关联工程实现**：[vLLM 中的 PagedAttention 实现机制](/llm/3-engineering/3.2-llm-inference-vllm)
- **关联 Agent 场景**：[长对话 Agent 场景下 KV Cache 溢出与 Memory 裁减策略](/llm/2-agent-framework/2.2-memory-systems)

## 🎥 推荐视频解析与开源代码
- 📺 [B站/YouTube] Karpathy: Let's build GPT (Timestamp: 42:15)
- 🐙 [GitHub 代码走读] `vllm/attention/ops/paged_attn.py`
```

---

## 4. 实施阶段与确认

1. **更新 Spec & Implementation Plan**：将新增加的 MLA、GRPO (DeepSeek R1)、PagedAttention、GraphRAG 等前沿内容与视频索引结构同步至实施计划中。
2. **构建 Markdown 内容模版**：在 VitePress 中集成数学公式 (KaTeX/MathJax) 与 Mermaid 图表渲染。
