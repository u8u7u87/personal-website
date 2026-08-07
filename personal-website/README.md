# Personal Website

A unified personal website built with [VitePress](https://vitepress.dev/), featuring a landing page, blog, analysis reports, and learning resources.

## Architecture Overview

The project uses a single VitePress instance under `docs/` with multiple content sections:

- **`docs/index.md`**: Homepage with hero section and site statistics
- **`docs/blog/`**: Blog articles with tag-based filtering
- **`docs/analysis/`**: Company dossiers and research reports
- **`docs/books/`**: AI Engineering learning curriculum and book chapters
- **`docs/.vitepress/theme/`**: Custom VitePress theme with glassmorphic components, Giscus comments, and global theme sync
- **`shared/`**: Shared CSS variables and theme tokens

---

## Getting Started

### Prerequisites
- **Node.js** v18+
- **npm** v9+

### Install Dependencies
```bash
cd personal-website
npm install
```

### Local Development
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

---

## Giscus Comments Configuration

This website uses [Giscus](https://giscus.app/) for comments powered by GitHub Discussions.

### Setup
1. Enable **Discussions** in your GitHub repository settings
2. Install the **[giscus](https://github.com/apps/giscus)** GitHub App
3. Visit [giscus.app](https://giscus.app/) and configure with your repo
4. Update the comment attributes in:
   - **File**: `docs/.vitepress/theme/Comments.vue`
   - **Attributes**: `data-repo`, `data-repo-id`, `data-category`, `data-category-id`
