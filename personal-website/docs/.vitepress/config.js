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
      { text: 'LLM', link: '/llm/' },
      { text: 'Blog', link: '/blog/' },
      { text: 'Analysis', link: '/analysis/' },
      { text: 'Books', link: '/books/' }
    ],
    sidebar: {
      '/llm/': [
        {
          text: '💡 1. 基础理论深挖',
          collapsed: false,
          items: [
            { text: '1.1 注意力机制深挖 (MHA/GQA/MLA)', link: '/llm/1-fundamentals/1.1-attention-deep-dive' },
            { text: '1.2 注意力与位置编码 (RoPE/ALiBi/YaRN)', link: '/llm/1-fundamentals/1.2-positional-encoding' },
            { text: '1.3 预训练、SFT 与 Tokenizer', link: '/llm/1-fundamentals/1.3-pretraining-sft' },
            { text: '1.4 强化学习 RLHF, DPO 与 GRPO (DeepSeek R1)', link: '/llm/1-fundamentals/1.4-rlhf-dpo-grpo' },
            { text: '1.5 模型量化与推理加速', link: '/llm/1-fundamentals/1.5-quantization-infer' },
            { text: '1.6 MoE 稀疏混合专家架构', link: '/llm/1-fundamentals/1.6-moe-architecture' },
            { text: '1.7 多模态大模型 VLM 架构', link: '/llm/1-fundamentals/1.7-multimodal-vlm' }
          ]
        },
        {
          text: '🤖 2. Agent 架构与框架',
          collapsed: false,
          items: [
            { text: '2.1 Agent 核心设计模式 (ReAct/Reflexion/LATS)', link: '/llm/2-agent-framework/2.1-agent-architectures' },
            { text: '2.2 记忆机制与工具调用 (MemGPT/Function Calling)', link: '/llm/2-agent-framework/2.2-memory-tools' }
          ]
        },
        {
          text: '⚙️ 3. 工程落地与系统',
          collapsed: false,
          items: [
            { text: '3.1 高级 RAG 架构实践 (Hybrid Search/GraphRAG)', link: '/llm/3-engineering/3.1-advanced-rag' },
            { text: '3.2 vLLM 与分布式推理加速', link: '/llm/3-engineering/3.2-vllm-deepspeed' },
            { text: '3.3 端侧部署与 GGUF/llama.cpp', link: '/llm/3-engineering/3.3-on-device-deployment' },
            { text: '3.4 AI 系统安全与 Guardrails 护栏', link: '/llm/3-engineering/3.4-ai-safety-guardrails' }
          ]
        },
        {
          text: '🔥 4. LLM & Agent 面试题集',
          collapsed: false,
          items: [
            { text: '4.1 理论算法高频深度题 (LayerNorm/RMSNorm/AdamW)', link: '/llm/4-interview-qa/4.1-theory-deep-qa' },
            { text: '4.2 大模型系统设计题 (RAG+Agent平台架构)', link: '/llm/4-interview-qa/4.2-system-design-qa' },
            { text: '4.3 手撕代码与算子实现 (GQA/PagedAttn/ReAct/DPO)', link: '/llm/4-interview-qa/4.3-coding-handwritten' }
          ]
        },
        {
          text: '📦 5. 开源项目与资源',
          collapsed: false,
          items: [
            { text: '5.1 开源项目盘点', link: '/llm/5-open-source/5.1-awesome-github-repos' },
            { text: '5.2 视频解析与时间戳', link: '/llm/5-open-source/5.2-video-lecture-notes' }
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
