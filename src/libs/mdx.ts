import matter from 'gray-matter';

import fs from 'fs';
import path from 'path';

export interface FrontMatter {
  title: string;
  summary: string;
  publishedAt: string;
  _resourcePath: string;
}

export function getPosts(): FrontMatter[] {
  const postsDirectory = path.join(process.cwd(), 'src/app/mdx');
  const filenames = fs.readdirSync(postsDirectory);

  return filenames
    .filter((filename) => {
      return filename.endsWith('.mdx');
    })
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const source = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(source);
      return {
        ...data,
        _resourcePath: `mdx/${filename}`,
      } as FrontMatter;
    });
}
