import { getPostById } from '@/utils/posts';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { HiChevronLeft } from 'react-icons/hi';
import Comments from '@/components/Comments';

interface PostPageProps {
  params: {
    id: string;
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostById(params.id);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute inset-0">
        <div className="absolute -left-[20%] top-[10%] w-[50%] h-[50%] rounded-full bg-purple-200 blur-[150px] opacity-60"></div>
        <div className="absolute -right-[20%] top-[20%] w-[50%] h-[50%] rounded-full bg-blue-200 blur-[150px] opacity-60"></div>
        <div className="absolute left-[30%] bottom-[10%] w-[40%] h-[40%] rounded-full bg-pink-100 blur-[150px] opacity-40"></div>
      </div>
      <div className="relative container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-900 to-black text-white rounded-lg hover:opacity-90 transition-all duration-300 group"
          >
            <HiChevronLeft className="w-6 h-6 transform transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Home
          </Link>

          <article className="bg-white rounded-xl shadow-md p-8 mt-8">
            <h1 className="text-4xl font-bold mb-6 text-navy-900">{post.title}</h1>
            <div className="flex gap-2 text-sm text-gray-600 mb-8">
              <time>{post.date}</time>
              <span>•</span>
              <span>{post.author}</span>
            </div>
            
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              className="prose max-w-none prose-headings:text-navy-900 prose-p:text-navy-800 prose-a:text-blue-600 prose-pre:bg-gray-50 prose-pre:border prose-pre:border-gray-200"
            >
              {post.content.replace(/^#[^#].*$/m, '')}
            </ReactMarkdown>

            <div className="mt-8 pt-8 border-t border-gray-100">
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </article>

          <Comments postId={post.id} />
        </div>
      </div>
    </main>
  );
} 