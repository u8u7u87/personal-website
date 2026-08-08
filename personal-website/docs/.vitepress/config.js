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
            { text: '1.5 模型量化与推理加速', link: '/llm/1-fundamentals/1.5-quantization-infer' }
          ]
        },
        {
          text: '🤖 2. Agent 架构与框架',
          collapsed: false,
          items: [
            { text: '2.1 Agent 核心设计模式 (ReAct/Reflexion/LATS)', link: '/llm/2-agent-framework/2.1-agent-architectures' },
            { text: '2.2 记忆机制与工具调用 (MemGPT/Function Calling)', link: '/llm/2-agent-framework/2.2-memory-tools' }
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
