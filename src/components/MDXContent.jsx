'use client';

import { MDXRemote } from 'next-mdx-remote';
import { MDXComponents } from './MDXComponents';

export default function MDXContent({ content }) {
  return (
    <div className="prose prose-lg max-w-none">
      <MDXRemote {...content} components={MDXComponents} />
    </div>
  );
}
