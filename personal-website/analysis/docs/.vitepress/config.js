export default {
  title: "Analysis",
  description: "Data Analysis and Research Reports",
  base: "/personal-website/analysis/",
  head: [
    ['script', {}, `
      (function() {
        const savedTheme = localStorage.getItem('global-theme') || 'dark';
        const html = document.documentElement;
        if (savedTheme === 'light') {
          html.classList.add('light-theme');
          html.classList.add('light');
        } else {
          html.classList.remove('light-theme');
          html.classList.remove('light');
        }
      })();
    `]
  ],
  themeConfig: {
    nav: [],
    sidebar: [],
    footer: {
      message: 'Built with Antigravity',
      copyright: '© 2026 u8u7u87. All rights reserved.'
    }
  }
}
