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
      { text: 'Blog', link: '/blog/' },
      { text: 'Analysis', link: '/analysis/' },
      { text: 'Books', link: '/books/' }
    ],
    sidebar: {
      '/analysis/': [
        {
          text: 'Company dossiers',
          items: [
            { text: 'Meituan (美团)', link: '/analysis/company/meituan' },
            { text: 'Moonshot AI (月之暗面)', link: '/analysis/company/moonshot' }
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
