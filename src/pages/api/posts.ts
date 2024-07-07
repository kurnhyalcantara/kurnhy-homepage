import matter from 'gray-matter';
import { NextApiRequest, NextApiResponse } from 'next';

import fs from 'fs';
import path from 'path';

export interface FrontMatter {
  title: string;
  date: string;
  excerpt: string;
  _resourcePath: string;
}

const postsDirectory = path.join(process.cwd(), 'src/app/mdx');

export function getPosts(): FrontMatter[] {
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

export default (req: NextApiRequest, res: NextApiResponse) => {
  const posts = getPosts();
  res.status(200).json(posts);
};
