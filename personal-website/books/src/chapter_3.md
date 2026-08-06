# Chapter 3: Documentation & SSG Integrations

Building a personal website that serves multiple purposes (e.g., a landing page, a technical blog, data analysis reports, and structured digital books) often requires different static site generation tools. This chapter studies the integration of Astro, VitePress, and mdBook.

## Astro: The Content Hub & Landing Page

Astro is a modern web framework designed for content-focused websites. It uses an **island architecture** to deliver exceptionally fast loading speeds by sending zero client-side JavaScript by default.

### Role in the Website
- **Landing Page**: Hosts the homepage, resume, and portal links.
- **Blog**: Manages markdown-based and MDX-based posts using Astro Content Collections with strong type safety.
- **Islands of Interactivity**: Integrates components from React, Vue, or Svelte only where dynamic features (e.g., a search bar or contact form) are needed.

---

## VitePress: Fast, Vue-Powered Documentation

VitePress is a Static Site Generator (SSG) built on top of Vite and Vue. It is optimized for technical documentation, product guides, and business analysis reports.

### Role in the Website
- **Analysis Module**: Hosts structured markdown reports (e.g., company research files like `meituan.md`).
- **Interactive Markdown**: Supports embedding Vue components directly inside markdown files, making it easy to create live data visualizations or interactive charts.
- **Fast Builds**: Leverages Vite under the hood for extremely fast hot-module reloading and bundle creation.

---

## mdBook: Rust-Powered Digital Books

mdBook is a command-line tool and Rust crate to create clean, searchable books from markdown files. It is lightweight, opinionated, and highly performant.

### Role in the Website
- **Books Module**: Organizes long-form technical guides, courses, and manuals into structured chapters with built-in search, print capability, and customizable themes.
- **Layout**: Uses a dual-pane layout with a collapsible sidebar table of contents, providing a book-like reading experience.

---

## Monorepo Integration & Routing

In our personal website, these three distinct frameworks are integrated into a single monorepo structured as workspaces. They build into a unified site and are served from a single domain.

### Directory Structure & Build Commands

```
personal-website/
├── landing/          <-- Astro project (served at /)
├── blog/             <-- Astro project (served at /blog/)
├── analysis/         <-- VitePress project (served at /analysis/)
├── books/            <-- mdBook project (served at /books/)
├── package.json      <-- Root script coordinator
```

The root `package.json` coordinates building all three projects under a single command:

```json
"build:all": "npm --prefix landing run build && npm --prefix blog run build && npm --prefix analysis run build && npm run build:books"
```

### Static Resource Routing
By setting the base paths of each module, we ensure that resources are referenced correctly:
- **Astro (landing & blog)**: Routes requests starting with `/blog` to the blog sub-application.
- **VitePress (analysis)**: Configured with `base: "/personal-website/analysis/"` in `.vitepress/config.js` to run in its subdirectory.
- **mdBook (books)**: Configured with `site-url = "/personal-website/books/"` in `book.toml` so internal assets and links resolve correctly.

This hybrid approach allows us to use the best tool for each specific type of content while maintaining a single codebase and continuous integration pipeline.
