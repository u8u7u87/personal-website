---
title: "AI Infra 6层生产级拓扑架构知识库"
description: "大模型 AI Infra 6层拓扑架构、物理算力与网络、分布式并行算子、模型与 Serving 引擎、集群调度与虚拟化、全链路运维可观测性与 Agent 应用汇总"
---

# AI Infra 6层生产级拓扑架构知识库

欢迎来到 **AI Infra 6层生产级拓扑架构** 专栏。本专栏全面覆盖 Layer 0 物理算力到 Layer 5 智能体调度的全栈 AI 基础设施认知树。

---

## 📌 0. 架构总览 Overview

- 🟢 **[0.1 AI Infra 6层全景拓扑与集群瓶颈图谱](/llm/0-infra-overview/0.1-ai-infra-6layers-overview)** <Badge type="tip" text="全新核心" />

---

## 🖥️ 1. Layer 0: 物理硬件与算力 (Physical Infra & Hardware)

- 🟢 **[1.1 GPU 硬件算力、HBM 显存带宽与 Roofline 瓶颈分析](/llm/1-physical-infra/1.1-gpu-memory-roofline)** <Badge type="info" text="IO 削减" />
- 🟢 **[1.2 稀疏 Tensor Core 与高速互联拓扑](/llm/1-physical-infra/1.2-hardware-sparse-and-interconnect)** <Badge type="info" text="计算削减" /> <Badge type="info" text="IO 削减" />

---

## ⚡ 2. Layer 1: 分布式并行与编译器 (Parallelism & Compiler)

- 🟢 **[2.1 3D 分布式并行与 FlashAttention 算子优化](/llm/2-parallel-compiler/2.1-3d-parallelism-flashattn)** <Badge type="info" text="扩展性" /> <Badge type="info" text="IO 削减" />
- 🟢 **[2.2 AI 编译器 IR 表达与前端 Pass 优化](/llm/2-parallel-compiler/2.2-ir-and-frontend-passes)** <Badge type="tip" text="全新核心" />
- 🟢 **[2.3 算子融合原理、策略与物理边界](/llm/2-parallel-compiler/2.3-operator-fusion-strategies)** <Badge type="info" text="IO 削减" />
- 🟢 **[2.4 融合算子数值精度与稳定性控制](/llm/2-parallel-compiler/2.4-operator-precision-and-stability)** <Badge type="info" text="稳定性" />
- 🟢 **[2.5 后端循环变换与硬件指令映射](/llm/2-parallel-compiler/2.5-loop-transformations-and-codegen)** <Badge type="tip" text="全新核心" />
- 🟢 **[2.6 PyTorch Inductor 与 OpenAI Triton 编译器源码级实战](/llm/2-parallel-compiler/2.6-triton-and-inductor-internals)** <Badge type="tip" text="全新核心" />
- 🟢 **[2.7 分布式通信重叠与 ZeRO 显存优化](/llm/2-parallel-compiler/2.7-distributed-communication-overlap)** <Badge type="info" text="IO 削减" /> <Badge type="info" text="扩展性" />

---

## 🧠 3. Layer 2: 模型架构与 Serving 引擎 (Engines & Architecture)

- 🟢 **[3.1 注意力机制深挖 (MHA/MQA/GQA/MLA)](/llm/3-engines-architecture/3.1-attention-mha-gqa-mla)** <Badge type="info" text="计算削减" /> <Badge type="info" text="IO 削减" />
- 🟢 **[3.2 线性注意力与亚二次方架构: Mamba 1/2, SSM, RWKV](/llm/3-engines-architecture/3.2-linear-attention-mamba)** <Badge type="info" text="计算削减" />
- 🟢 **[3.3 位置编码 (RoPE/ALiBi/YaRN)](/llm/3-engines-architecture/3.3-positional-encoding)** <Badge type="tip" text="已就绪" />
- 🟢 **[3.4 MoE 稀疏混合专家架构](/llm/3-engines-architecture/3.4-moe-architecture)** <Badge type="info" text="计算削减" />
- 🟢 **[3.5 多模态大模型 VLM 架构](/llm/3-engines-architecture/3.5-multimodal-vlm)** <Badge type="tip" text="已就绪" />
- 🟢 **[3.6 预训练、SFT 与 Tokenizer 详解](/llm/3-engines-architecture/3.6-pretraining-sft)** <Badge type="tip" text="已就绪" />
- 🟢 **[3.7 强化学习 RLHF, DPO 与 GRPO (DeepSeek R1)](/llm/3-engines-architecture/3.7-rlhf-dpo-grpo)** <Badge type="tip" text="已就绪" />
- 🟢 **[3.8 厂商与推理框架改进: SGLang RadixAttention, TRT-LLM, DeepSeek V3/R1](/llm/3-engines-architecture/3.8-serving-engines-provider-innovations)** <Badge type="info" text="IO 削减" /> <Badge type="info" text="调度路由" />
- 🟢 **[3.9 模型剪枝、LoRA 与投机解码](/llm/3-engines-architecture/3.9-model-compression-speculative-decoding)** <Badge type="info" text="计算削减" />

---

## 🚀 4. Layer 3: 集群调度与虚拟化 (Cluster Scheduling & Virtualization)

- 🟢 **[4.1 GPU 集群资源调度与配额管理 (Slurm, Kueue, Ray, Gang Scheduling)](/llm/4-cluster-scheduling/4.1-gpu-cluster-scheduling)** <Badge type="info" text="调度路由" />
- 🟢 **[4.2 训练/推理混部与 GPU 虚拟化隔离 (Co-location, MIG, vGPU, CUDA IPC)](/llm/4-cluster-scheduling/4.2-colocation-gpu-virtualization)** <Badge type="info" text="调度路由" />

---

## 🛠️ 5. Layer 4: 运维、可观测性与可靠性 (Ops, Observability & Reliability)

- 🟢 **[5.1 全链路可观测性与 Token 追踪 (OpenTelemetry, DCGM, NCCL Profiling)](/llm/5-ops-observability-reliability/5.1-tracking-observability)** <Badge type="info" text="可观测" />
- 🟢 **[5.2 千卡故障自动恢复与推理熔断降级 (Fault Tolerance, Circuit Breaking, Fallback)](/llm/5-ops-observability-reliability/5.2-fault-tolerance-degradation)** <Badge type="info" text="高可用" />

---

## 🤖 6. Layer 5: 应用与智能体 (Application & Agent)

- 🟢 **[6.1 Agent 核心设计模式与架构 (ReAct/Reflexion/LATS)](/llm/6-application-agent/6.1-agent-architectures)** <Badge type="info" text="调度路由" />
- 🟢 **[6.2 记忆机制与工具调用 (MemGPT/Function Calling)](/llm/6-application-agent/6.2-memory-tools)** <Badge type="tip" text="已就绪" />
- 🟢 **[6.3 高级 RAG 架构实践 (Hybrid Search/GraphRAG)](/llm/6-application-agent/6.3-advanced-rag)** <Badge type="tip" text="已就绪" />
- 🟢 **[6.4 端侧部署与 GGUF/llama.cpp](/llm/6-application-agent/6.4-on-device-deployment)** <Badge type="tip" text="已就绪" />
- 🟢 **[6.5 AI 系统安全与 Guardrails 护栏](/llm/6-application-agent/6.5-ai-safety-guardrails)** <Badge type="info" text="稳定性" />
- 🟢 **[6.6 语义缓存与状态机约束解码](/llm/6-application-agent/6.6-semantic-cache-constrained-decoding)** <Badge type="info" text="计算削减" /> <Badge type="info" text="调度路由" />

---

## 🔥 7. 面试题集、手撕代码与开源资源 (Interview & Code)

- 🟢 **[7.1 理论算法高频深度题 (LayerNorm/RMSNorm/AdamW)](/llm/7-interview-qa-coding/7.1-theory-deep-qa)** <Badge type="tip" text="已就绪" />
- 🟢 **[7.2 大模型系统设计题 (RAG+Agent平台架构)](/llm/7-interview-qa-coding/7.2-system-design-qa)** <Badge type="tip" text="已就绪" />
- 🟢 **[7.3 手撕代码与算子实现](/llm/7-interview-qa-coding/7.3-coding-handwritten)** <Badge type="tip" text="已就绪" />
- 🟢 **[7.4 GitHub 开源项目盘点](/llm/7-interview-qa-coding/7.4-awesome-github-repos)** <Badge type="tip" text="已就绪" />
- 🟢 **[7.5 视频解析与时间戳](/llm/7-interview-qa-coding/7.5-video-lecture-notes)** <Badge type="tip" text="已就绪" />
- 🟢 **[7.6 分布式排障实战 (NCCL Hang/OOM/Loss Spike/Straggler)](/llm/7-interview-qa-coding/7.6-training-inference-debugging-qa)** <Badge type="warning" text="高级/专家题" />
- 🟢 **[7.7 智能体系统设计题 (Agent 调度、记忆与护栏)](/llm/7-interview-qa-coding/7.7-agent-system-design-qa)** <Badge type="warning" text="高级应用题" />


