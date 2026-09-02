'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import rehypeHighlight from 'rehype-highlight';

type Props = { content: string };

export default function MarkdownView({ content }: Props) {
  return (
    <article className="markdown-body">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSlug, rehypeHighlight]}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
