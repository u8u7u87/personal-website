import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const docsDir = __dirname
const rootDir = path.resolve(__dirname, '../')

function getWordCount(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const cleanContent = content.trim().replace(/^---[\s\S]*?---/, '');
    const words = cleanContent.match(/[\u4e00-\u9fa5]|[a-zA-Z0-9]+(?:'[a-zA-Z0-9]+)?/g) || [];
    return words.length;
  } catch (e) {
    return 0;
  }
}

function getFiles(dir, extPattern) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      results = results.concat(getFiles(fullPath, extPattern));
    } else if (extPattern.test(file)) {
      results.push(fullPath);
    }
  }
  return results;
}

export default {
  load() {
    // Robust directory resolution
    let blogDir = path.join(docsDir, 'blog');
    if (!fs.existsSync(blogDir) || getFiles(blogDir, /\.md$/).filter(f => !f.endsWith('index.md')).length === 0) {
      const oldBlogDir = path.join(rootDir, 'blog/src/content/blog');
      if (fs.existsSync(oldBlogDir)) {
        blogDir = oldBlogDir;
      }
    }

    let analysisDir = path.join(docsDir, 'analysis');
    if (!fs.existsSync(analysisDir) || getFiles(analysisDir, /\.md$/).filter(f => !f.endsWith('index.md')).length === 0) {
      const oldAnalysisDir = path.join(rootDir, 'analysis/docs');
      if (fs.existsSync(oldAnalysisDir)) {
        analysisDir = oldAnalysisDir;
      }
    }

    let booksDir = path.join(docsDir, 'books');
    if (!fs.existsSync(booksDir) || getFiles(booksDir, /\.md$/).filter(f => path.basename(f).startsWith('chapter_')).length === 0) {
      const oldBooksDir = path.join(rootDir, 'books/src');
      if (fs.existsSync(oldBooksDir)) {
        booksDir = oldBooksDir;
      }
    }

    const blogFiles = getFiles(blogDir, /\.md$/).filter(f => !f.endsWith('index.md'));
    const blogCount = blogFiles.length;
    const blogWords = blogFiles.reduce((acc, file) => acc + getWordCount(file), 0);

    const analysisFiles = getFiles(analysisDir, /\.md$/).filter(f => !f.endsWith('index.md'));
    const analysisCount = analysisFiles.length;
    const analysisWords = analysisFiles.reduce((acc, file) => acc + getWordCount(file), 0);

    const booksFiles = getFiles(booksDir, /\.md$/).filter(f => {
      const name = path.basename(f);
      return name.startsWith('chapter_') && name.endsWith('.md');
    });
    const booksCount = booksFiles.length;
    const booksWords = booksFiles.reduce((acc, file) => acc + getWordCount(file), 0);

    const totalWords = blogWords + analysisWords + booksWords;

    return {
      blogCount,
      analysisCount,
      booksCount,
      totalWords
    }
  }
}
