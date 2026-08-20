export default {
  title: "u8u7u87",
  description: "Personal Space & Insights",
  base: "/personal-website/",
  head: [
    ['script', {}, `
      (function() {
        const savedTheme = localStorage.getItem('global-theme') || 'dark';
        const html = document.documentElement;
        if (savedTheme === 'light') {
          html.classList.add('light-theme');
          html.classList.remove('dark');
        } else {
          html.classList.remove('light-theme');
          html.classList.add('dark');
        }
      })();
    `]
  ],
  themeConfig: {
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'LLM & AI Infra', link: '/llm/' },
      { text: 'Blog', link: '/blog/' },
      { text: 'Analysis', link: '/analysis/' },
      { text: 'Books', link: '/books/' }
    ],
    sidebar: {
      '/llm/': [
        {
          text: '📌 0. AI Infra 全景总览',
          collapsed: false,
          items: [
            { text: '0.1 AI Infra 6层全景拓扑与集群瓶颈图谱', link: '/llm/0-infra-overview/0.1-ai-infra-6layers-overview' }
          ]
        },
        {
          text: '🖥️ Layer 0: 物理硬件与算力',
          collapsed: false,
          items: [
            { text: '1.1 GPU 硬件算力、HBM 显存带宽与 Roofline', link: '/llm/1-physical-infra/1.1-gpu-memory-roofline' },
            { text: '1.2 稀疏 Tensor Core 与高速互联拓扑', link: '/llm/1-physical-infra/1.2-hardware-sparse-and-interconnect' }
          ]
        },
        {
          text: '⚡ Layer 1: 分布式并行与编译器',
          collapsed: false,
          items: [
            { text: '2.1 3D 分布式并行与 FlashAttention 算子优化', link: '/llm/2-parallel-compiler/2.1-3d-parallelism-flashattn' },
            { text: '2.2 AI 编译器 IR 表达与前端 Pass 优化', link: '/llm/2-parallel-compiler/2.2-ir-and-frontend-passes' },
            { text: '2.3 算子融合原理、策略与物理边界', link: '/llm/2-parallel-compiler/2.3-operator-fusion-strategies' },
            { text: '2.4 融合算子数值精度与稳定性控制', link: '/llm/2-parallel-compiler/2.4-operator-precision-and-stability' },
            { text: '2.5 后端循环变换与硬件指令映射', link: '/llm/2-parallel-compiler/2.5-loop-transformations-and-codegen' },
            { text: '2.6 PyTorch Inductor 与 OpenAI Triton 源码实战', link: '/llm/2-parallel-compiler/2.6-triton-and-inductor-internals' },
            { text: '2.7 分布式通信重叠与 ZeRO 显存优化', link: '/llm/2-parallel-compiler/2.7-distributed-communication-overlap' }
          ]
        },
        {
          text: '🧠 Layer 2: 模型架构与 Serving 引擎',
          collapsed: false,
          items: [
            { text: '3.1 注意力机制深挖 (MHA/GQA/MLA)', link: '/llm/3-engines-architecture/3.1-attention-mha-gqa-mla' },
            { text: '3.2 线性注意力与亚二次方架构 (Mamba 1/2, SSM)', link: '/llm/3-engines-architecture/3.2-linear-attention-mamba' },
            { text: '3.3 注意力与位置编码 (RoPE/ALiBi/YaRN)', link: '/llm/3-engines-architecture/3.3-positional-encoding' },
            { text: '3.4 MoE 稀疏混合专家架构', link: '/llm/3-engines-architecture/3.4-moe-architecture' },
            { text: '3.5 多模态大模型 VLM 架构', link: '/llm/3-engines-architecture/3.5-multimodal-vlm' },
            { text: '3.6 预训练、SFT 与 Tokenizer 详解', link: '/llm/3-engines-architecture/3.6-pretraining-sft' },
            { text: '3.7 强化学习 RLHF, DPO 与 GRPO (DeepSeek R1)', link: '/llm/3-engines-architecture/3.7-rlhf-dpo-grpo' },
            { text: '3.8 厂商与推理框架改进 (SGLang/TRT-LLM/DeepSeek)', link: '/llm/3-engines-architecture/3.8-serving-engines-provider-innovations' },
            { text: '3.9 模型剪枝、LoRA 与投机解码', link: '/llm/3-engines-architecture/3.9-model-compression-speculative-decoding' }
          ]
        },
        {
          text: '🚀 Layer 3: 集群调度与虚拟化',
          collapsed: false,
          items: [
            { text: '4.1 GPU 集群资源调度与配额管理 (Slurm/Kueue/Ray)', link: '/llm/4-cluster-scheduling/4.1-gpu-cluster-scheduling' },
            { text: '4.2 训练/推理混部与 GPU 虚拟化隔离 (MIG/vGPU)', link: '/llm/4-cluster-scheduling/4.2-colocation-gpu-virtualization' }
          ]
        },
        {
          text: '🛠️ Layer 4: 运维、可观测性与可靠性',
          collapsed: false,
          items: [
            { text: '5.1 全链路可观测性与 Token 追踪 (OpenTelemetry/DCGM)', link: '/llm/5-ops-observability-reliability/5.1-tracking-observability' },
            { text: '5.2 千卡故障自动恢复与推理熔断降级 (Fault Tolerance)', link: '/llm/5-ops-observability-reliability/5.2-fault-tolerance-degradation' }
          ]
        },
        {
          text: '🤖 Layer 5: 应用与智能体',
          collapsed: false,
          items: [
            { text: '6.1 Agent 核心设计模式 (ReAct/Reflexion/LATS)', link: '/llm/6-application-agent/6.1-agent-architectures' },
            { text: '6.2 记忆机制与工具调用 (MemGPT/Function Calling)', link: '/llm/6-application-agent/6.2-memory-tools' },
            { text: '6.3 高级 RAG 架构实践 (Hybrid Search/GraphRAG)', link: '/llm/6-application-agent/6.3-advanced-rag' },
            { text: '6.4 端侧部署与 GGUF/llama.cpp', link: '/llm/6-application-agent/6.4-on-device-deployment' },
            { text: '6.5 AI 系统安全与 Guardrails 护栏', link: '/llm/6-application-agent/6.5-ai-safety-guardrails' },
            { text: '6.6 语义缓存与状态机约束解码', link: '/llm/6-application-agent/6.6-semantic-cache-constrained-decoding' }
          ]
        },
        {
          text: '🔥 Layer 6: 面试题集、手撕代码与开源资源',
          collapsed: false,
          items: [
            { text: '7.1 理论算法高频深度题 (LayerNorm/RMSNorm/AdamW)', link: '/llm/7-interview-qa-coding/7.1-theory-deep-qa' },
            { text: '7.2 大模型系统设计题 (RAG+Agent平台架构)', link: '/llm/7-interview-qa-coding/7.2-system-design-qa' },
            { text: '7.3 手撕代码与算子实现 (GQA/PagedAttn/ReAct/DPO)', link: '/llm/7-interview-qa-coding/7.3-coding-handwritten' },
            { text: '7.4 开源项目盘点', link: '/llm/7-interview-qa-coding/7.4-awesome-github-repos' },
            { text: '7.5 视频解析与时间戳', link: '/llm/7-interview-qa-coding/7.5-video-lecture-notes' },
            { text: '7.6 分布式排障实战 (NCCL/OOM/Loss Spike)', link: '/llm/7-interview-qa-coding/7.6-training-inference-debugging-qa' },
            { text: '7.7 智能体系统设计题 (Agent 调度与记忆)', link: '/llm/7-interview-qa-coding/7.7-agent-system-design-qa' }
          ]
        }
      ],
      '/analysis/': [
        {
          text: 'Company dossiers',
          items: [
            { text: 'Meituan (美团)', link: '/analysis/company/meituan' },
            { text: 'Moonshot AI (月之暗面)', link: '/analysis/company/moonshot' },
            { text: 'Zhipu AI (智谱 AI)', link: '/analysis/company/zhipu' },
            { text: 'DeepSeek (深度求索)', link: '/analysis/company/deepseek' },
            { text: 'Alibaba (阿里巴巴)', link: '/analysis/company/alibaba' },
            { text: 'Tencent (腾讯)', link: '/analysis/company/tencent' },
            { text: 'Huawei (华为)', link: '/analysis/company/huawei' },
            { text: 'ByteDance (字节跳动)', link: '/analysis/company/bytedance' },
            { text: 'Netease (网易)', link: '/analysis/company/netease' },
            { text: 'Xiaomi (小米)', link: '/analysis/company/xiaomi' }
          ]
        }
      ],
      '/books/': [
        {
          text: 'AI Engineering 学习成长手册',
          items: [
            { text: 'Introduction', link: '/books/' },
            { text: '第一章：大模型基础与API开发', link: '/books/chapter_1' },
            { text: '第二章：提示词工程与系统设计', link: '/books/chapter_2' },
            { text: '第三章：RAG (检索增强生成) 架构与实践', link: '/books/chapter_3' },
            { text: '第四章：Agent (智能体) 系统的构建与评估', link: '/books/chapter_4' },
            { text: '第五章：模型微调与大模型后训练', link: '/books/chapter_5' },
            { text: '第六章：AI 产品部署、监控与成本优化', link: '/books/chapter_6' },
            { text: '第七章：前沿探索与终身学习指南', link: '/books/chapter_7' }
          ]
        }
      ]
    },
    footer: {
      message: 'Built with Antigravity',
      copyright: '© 2026 u8u7u87. All rights reserved.'
    }
  }
}
