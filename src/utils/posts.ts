import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost } from '@/types/blog';

const postsDirectory = path.join(process.cwd(), 'src/content/posts');

export async function getAllPosts(): Promise<BlogPost[]> {
  const fileNames = await fs.readdir(postsDirectory);
  const allPosts = await Promise.all(
    fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(async fileName => {
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = await fs.readFile(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
          id: data.id || '',
          title: data.title || '',
          excerpt: data.excerpt || '',
          content: content || '',
          date: data.date || '',
          author: data.author || '',
          category: data.category || 'Uncategorized',
          tags: data.tags || [],
          readingTime: data.readingTime || '5 min',
          views: data.views || 0,
          likes: data.likes || 0
        };
      })
  );

  return allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostById(id: string): Promise<BlogPost | undefined> {
  const posts = await getAllPosts();
  return posts.find(post => post.id === id);
} 