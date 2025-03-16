"use client";

import { BlogPost } from '@/types/blog';
import Link from 'next/link';
import { HiOutlineClock, HiOutlineEye, HiOutlineHeart, HiArrowRight } from 'react-icons/hi';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const getGradientForPost = (id: string) => {
    switch (id) {
      case '1':
        return 'bg-gradient-to-br from-purple-400 via-blue-400 to-indigo-400';
      case '2':
        return 'bg-gradient-to-br from-blue-400 via-teal-400 to-emerald-400';
      case '3':
        return 'bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-400';
      default:
        return 'bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600';
    }
  };

  const getCategoryColor = (category: string | undefined) => {
    if (!category) return 'bg-gray-100 text-gray-800 border border-gray-300';
    
    switch (category.toLowerCase()) {
      case 'design':
        return 'bg-pink-100 text-pink-800 border border-pink-300';
      case 'development':
        return 'bg-blue-100 text-blue-800 border border-blue-300';
      case 'technology':
        return 'bg-purple-100 text-purple-800 border border-purple-300';
      default:
        return 'bg-gray-100 text-gray-800 border border-gray-300';
    }
  };

  return (
    <Link href={`/post/${post.id}`}>
      <article className="bg-white rounded-xl shadow-md hover:shadow-lg border border-gray-100 hover:border-blue-500 transition-all cursor-pointer overflow-hidden group duration-300">
        <div className={`relative w-full aspect-[4/3] ${getGradientForPost(post.id)} group-hover:scale-105 transition-transform duration-300`}>
          <div className="absolute inset-0 opacity-20 mix-blend-overlay">
            <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.8),transparent_70%)]"></div>
          </div>
          {post.category && (
            <div className="absolute top-4 left-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(post.category)}`}>
                {post.category}
              </span>
            </div>
          )}
        </div>
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-navy-900 group-hover:text-blue-600 transition-colors tracking-wide">
              {post.title}
            </h2>
            <button className="flex items-center gap-1 text-navy-900 hover:text-blue-600 transition-colors">
              <HiArrowRight className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex gap-2 text-sm text-gray-600 mb-4">
            <time>{post.date}</time>
            <span>•</span>
            <span>{post.author}</span>
          </div>
          
          <p className="text-navy-800 mb-4 leading-relaxed">{post.excerpt}</p>
          
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <HiOutlineClock className="w-4 h-4" />
              <span>{post.readingTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <HiOutlineEye className="w-4 h-4" />
              <span>{post.views}</span>
            </div>
            <div className="flex items-center gap-1">
              <HiOutlineHeart className="w-4 h-4 text-red-500 hover:scale-110 transition-transform duration-200" />
              <span>{post.likes}</span>
            </div>
          </div>

          <button className="w-full mt-6 mb-4 px-6 py-3 bg-gradient-to-r from-gray-900 to-black text-white rounded-full hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 group shadow-md hover:shadow-lg">
            Read More
            <HiArrowRight className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map((tag) => (
                <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-sm hover:bg-gray-200 transition-all">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}  
