# Modular Personal Static Website

Welcome to your modular personal static website! This project uses a monorepo structure to combine different static site generators (Astro, VitePress, and mdBook) into a unified personal site experience.

## Architecture Overview

The project is structured into independent, highly focused modules:
- **`landing/` (Astro)**: The primary entry point/landing page.
- **`blog/` (Astro)**: A personal blog module hosting articles and posts.
- **`analysis/` (VitePress)**: An analytical documents and wiki module.
- **`books/` (mdBook)**: A books/long-form guide publishing module written in Markdown and rendered via mdBook.
- **`shared/`**: Contains shared styles and configurations (e.g. global navigation bar).

---

## Getting Started

### 1. Prerequisites
Ensure you have the following installed on your machine:
- **Node.js** (v18 or higher recommended)
- **npm** (v9 or higher recommended)
- **mdBook** (Required to compile the `books` module. Install via Cargo `cargo install mdbook` or Homebrew `brew install mdbook`).

### 2. Installing Dependencies
Install all package dependencies for the monorepo and its workspaces using:
```bash
npm ci
```

### 3. Local Development
You can run development servers for each module individually from the root directory:
* **Landing Page**: `npm run dev:landing`
* **Blog**: `npm run dev:blog`
* **Analysis**: `npm run dev:analysis`

To preview changes in mdBook, navigate to the `books` directory and run:
```bash
cd books
mdbook serve --open
```

### 4. Build for Production
To build all modules and generate the static site output:
```bash
npm run build:all
```
This builds each sub-module into its static files, preparing the layout for hosting.

---

## Giscus Comments Configuration Guide

This website has integrated comments powered by [Giscus](https://giscus.app/), a comments system utilizing GitHub Discussions. To enable comments on your production website, you must replace the placeholder repository and category IDs with your own.

### Step 1: Set Up Your GitHub Repository
1. Create a public repository on GitHub (or use the one where you host this site).
2. Enable **Discussions** in the repository settings:
   - Go to your repository settings on GitHub.
   - Under the **Features** section, check **Discussions**.
3. Install and authorize the **[giscus](https://github.com/apps/giscus)** GitHub App on your repository.

### Step 2: Get Your Giscus Details
1. Go to the [Giscus website](https://giscus.app/).
2. In the **Repository** section, enter your repository name (e.g., `your-username/your-repo-name`).
3. Scroll down to **Discussion Category** and select a category. We recommend using **Announcements** to ensure only authorized users or commenters can spawn new discussions if desired, or general categories.
4. Giscus will automatically generate a script tag. Look at the generated code block and locate the values for the following attributes:
   - `data-repo` (e.g. `"your-username/your-repo-name"`)
   - `data-repo-id` (e.g. `"R_kgD..."`)
   - `data-category` (e.g. `"Announcements"`)
   - `data-category-id` (e.g. `"DIC_kwD..."`)

### Step 3: Replace the Placeholders
Replace the placeholders `repo-id-placeholder` and `category-id-placeholder` with your real IDs in the following three files:

#### 1. Blog Module
* **File**: `blog/src/components/Comments.astro`
* **Action**: Update the script attributes:
  ```html
  data-repo="your-username/your-repo-name"
  data-repo-id="YOUR_ACTUAL_REPO_ID"
  data-category="Announcements"
  data-category-id="YOUR_ACTUAL_CATEGORY_ID"
  ```

#### 2. Analysis Module
* **File**: `analysis/docs/.vitepress/theme/Comments.vue`
* **Action**: Update the values in the Vue component:
  ```javascript
  script.setAttribute('data-repo', 'your-username/your-repo-name')
  script.setAttribute('data-repo-id', 'YOUR_ACTUAL_REPO_ID')
  script.setAttribute('data-category', 'Announcements')
  script.setAttribute('data-category-id', 'YOUR_ACTUAL_CATEGORY_ID')
  ```

#### 3. Books Module
* **File**: `books/theme/index.hbs`
* **Action**: Update the properties in the inline script block (around line 276):
  ```javascript
  script.setAttribute('data-repo', 'your-username/your-repo-name');
  script.setAttribute('data-repo-id', 'YOUR_ACTUAL_REPO_ID');
  script.setAttribute('data-category', 'Announcements');
  script.setAttribute('data-category-id', 'YOUR_ACTUAL_CATEGORY_ID');
  ```
