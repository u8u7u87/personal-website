---
title: "AI Infra 4层架构知识库"
description: "大模型 AI Infra 四层拓扑架构、硬件算力 Roofline、分布式并行算子、模型注意力演进与 Serving 推理框架汇总"
---

# AI Infra 4层架构知识库

欢迎来到 **AI Infra 4层架构** 专栏。本专栏围绕硬件算力、并行编译器、模型注意力架构与 Serving 推理服务四个核心层级建立全栈技术认知树。

---

## 📌 1. 架构总览 Overview

- 🟢 **[0.1 AI Infra 四层架构全景剖析与 Roofline 瓶颈图谱](/llm/0-infra-overview/0.1-ai-infra-4layers-overview)** <Badge type="tip" text="全新核心" />

---

## 🖥️ 2. Layer 1: 硬件与算力 (Hardware & Compute)

- 🟢 **[1.1 GPU 硬件算力、HBM 显存带宽与 Roofline 瓶颈分析](/llm/1-hardware-compute/1.1-gpu-memory-roofline)** <Badge type="tip" text="已就绪" />

---

## ⚡ 3. Layer 2: 并行与编译器 (Parallelism & Compiler)

- 🟢 **[2.1 3D 分布式并行与 FlashAttention 算子优化](/llm/2-parallel-compiler/2.1-3d-parallelism-flashattn)** <Badge type="tip" text="已就绪" />

---

## 🧠 4. Layer 3: 模型架构与注意力 (Model Architecture & Attention)

- 🟢 **[3.1 注意力机制深挖 (MHA/MQA/GQA/MLA)](/llm/3-architecture-attention/3.1-attention-mha-gqa-mla)** <Badge type="tip" text="已就绪" />
- 🟢 **[3.2 线性注意力与亚二次方架构: Mamba 1/2, SSM, RWKV](/llm/3-architecture-attention/3.2-linear-attention-mamba)** <Badge type="tip" text="全新核心" />
- 🟢 **[3.3 位置编码 (RoPE/ALiBi/YaRN)](/llm/3-architecture-attention/3.3-positional-encoding)** <Badge type="tip" text="已就绪" />
- 🟢 **[3.4 MoE 稀疏混合专家架构](/llm/3-architecture-attention/3.4-moe-architecture)** <Badge type="tip" text="已就绪" />
- 🟢 **[3.5 多模态大模型 VLM 架构](/llm/3-architecture-attention/3.5-multimodal-vlm)** <Badge type="tip" text="已就绪" />
- 🟢 **[3.6 预训练、SFT 与 Tokenizer 详解](/llm/3-architecture-attention/3.6-pretraining-sft)** <Badge type="tip" text="已就绪" />
- 🟢 **[3.7 强化学习 RLHF, DPO 与 GRPO (DeepSeek R1)](/llm/3-architecture-attention/3.7-rlhf-dpo-grpo)** <Badge type="tip" text="已就绪" />

---

## 🚀 5. Layer 4: 推理服务与应用 (Serving & Application)

- 🟢 **[4.1 厂商与推理框架改进: SGLang RadixAttention, TRT-LLM, DeepSeek V3/R1](/llm/4-serving-application/4.1-provider-innovations)** <Badge type="tip" text="全新核心" />
- 🟢 **[4.2 Agent 核心设计模式与架构](/llm/4-serving-application/4.2-agent-architectures)** <Badge type="tip" text="已就绪" />
- 🟢 **[4.3 记忆机制与工具调用 (MemGPT/Function Calling)](/llm/4-serving-application/4.3-memory-tools)** <Badge type="tip" text="已就绪" />
- 🟢 **[4.4 高级 RAG 架构实践 (Hybrid Search/GraphRAG)](/llm/4-serving-application/4.4-advanced-rag)** <Badge type="tip" text="已就绪" />
- 🟢 **[4.5 端侧部署与 GGUF/llama.cpp](/llm/4-serving-application/4.5-on-device-deployment)** <Badge type="tip" text="已就绪" />
- 🟢 **[4.6 AI 系统安全与 Guardrails 护栏](/llm/4-serving-application/4.6-ai-safety-guardrails)** <Badge type="tip" text="已就绪" />

---

## 🔥 6. 面试题集、手撕代码与开源资源 (Interview & Code)

- 🟢 **[5.1 理论算法高频深度题 (LayerNorm/RMSNorm/AdamW)](/llm/5-interview-qa-coding/5.1-theory-deep-qa)** <Badge type="tip" text="已就绪" />
- 🟢 **[5.2 大模型系统设计题 (RAG+Agent平台架构)](/llm/5-interview-qa-coding/5.2-system-design-qa)** <Badge type="tip" text="已就绪" />
- 🟢 **[5.3 手撕代码与算子实现](/llm/5-interview-qa-coding/5.3-coding-handwritten)** <Badge type="tip" text="已就绪" />
- 🟢 **[5.4 GitHub 开源项目盘点](/llm/5-interview-qa-coding/5.4-awesome-github-repos)** <Badge type="tip" text="已就绪" />
- 🟢 **[5.5 视频解析与时间戳](/llm/5-interview-qa-coding/5.5-video-lecture-notes)** <Badge type="tip" text="已就绪" />
