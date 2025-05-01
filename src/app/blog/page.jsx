import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="mb-8 text-4xl font-bold">Articles</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug}>
            <div className="mt-2 text-gray-600">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl font-semibold transition-colors hover:text-lime-400">
                {post.title}
              </h2>
            </Link>

            {/* <div className="mt-4 flex gap-2">
              {post.tags?.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div> */}
          </article>
        ))}
      </div>
    </div>
  );
}
