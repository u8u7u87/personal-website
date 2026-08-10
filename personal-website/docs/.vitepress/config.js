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
            { text: '0.1 AI Infra 四层架构与 Roofline 瓶颈图谱', link: '/llm/0-infra-overview/0.1-ai-infra-4layers-overview' }
          ]
        },
        {
          text: '🖥️ Layer 1: 硬件与算力',
          collapsed: false,
          items: [
            { text: '1.1 GPU 硬件算力、HBM 带宽与 Roofline', link: '/llm/1-hardware-compute/1.1-gpu-memory-roofline' }
          ]
        },
        {
          text: '⚡ Layer 2: 并行与编译器',
          collapsed: false,
          items: [
            { text: '2.1 3D 分布式并行与 FlashAttention', link: '/llm/2-parallel-compiler/2.1-3d-parallelism-flashattn' }
          ]
        },
        {
          text: '🧠 Layer 3: 模型架构与注意力',
          collapsed: false,
          items: [
            { text: '3.1 注意力机制深挖 (MHA/GQA/MLA)', link: '/llm/3-architecture-attention/3.1-attention-mha-gqa-mla' },
            { text: '3.2 线性注意力与亚二次方架构 (Mamba 1/2, SSM)', link: '/llm/3-architecture-attention/3.2-linear-attention-mamba' },
            { text: '3.3 注意力与位置编码 (RoPE/ALiBi/YaRN)', link: '/llm/3-architecture-attention/3.3-positional-encoding' },
            { text: '3.4 MoE 稀疏混合专家架构', link: '/llm/3-architecture-attention/3.4-moe-architecture' },
            { text: '3.5 多模态大模型 VLM 架构', link: '/llm/3-architecture-attention/3.5-multimodal-vlm' },
            { text: '3.6 预训练、SFT 与 Tokenizer 详解', link: '/llm/3-architecture-attention/3.6-pretraining-sft' },
            { text: '3.7 强化学习 RLHF, DPO 与 GRPO (DeepSeek R1)', link: '/llm/3-architecture-attention/3.7-rlhf-dpo-grpo' }
          ]
        },
        {
          text: '🚀 Layer 4: 推理服务与应用',
          collapsed: false,
          items: [
            { text: '4.1 厂商与推理框架改进 (SGLang/TRT-LLM/DeepSeek)', link: '/llm/4-serving-application/4.1-provider-innovations' },
            { text: '4.2 Agent 核心设计模式 (ReAct/Reflexion/LATS)', link: '/llm/4-serving-application/4.2-agent-architectures' },
            { text: '4.3 记忆机制与工具调用 (MemGPT/Function Calling)', link: '/llm/4-serving-application/4.3-memory-tools' },
            { text: '4.4 高级 RAG 架构实践 (Hybrid Search/GraphRAG)', link: '/llm/4-serving-application/4.4-advanced-rag' },
            { text: '4.5 端侧部署与 GGUF/llama.cpp', link: '/llm/4-serving-application/4.5-on-device-deployment' },
            { text: '4.6 AI 系统安全与 Guardrails 护栏', link: '/llm/4-serving-application/4.6-ai-safety-guardrails' }
          ]
        },
        {
          text: '🔥 5. 面试题集、手撕代码与开源资源',
          collapsed: false,
          items: [
            { text: '5.1 理论算法高频深度题 (LayerNorm/RMSNorm/AdamW)', link: '/llm/5-interview-qa-coding/5.1-theory-deep-qa' },
            { text: '5.2 大模型系统设计题 (RAG+Agent平台架构)', link: '/llm/5-interview-qa-coding/5.2-system-design-qa' },
            { text: '5.3 手撕代码与算子实现 (GQA/PagedAttn/ReAct/DPO)', link: '/llm/5-interview-qa-coding/5.3-coding-handwritten' },
            { text: '5.4 开源项目盘点', link: '/llm/5-interview-qa-coding/5.4-awesome-github-repos' },
            { text: '5.5 视频解析与时间戳', link: '/llm/5-interview-qa-coding/5.5-video-lecture-notes' }
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
