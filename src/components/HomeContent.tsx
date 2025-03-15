"use client";

import { useState, useEffect } from 'react';
import { BlogPost } from '@/types/blog';
import BlogCard from '@/components/BlogCard';
import SearchAndFilter from '@/components/SearchAndFilter';

interface HomeContentProps {
  initialPosts: BlogPost[];
}

export default function HomeContent({ initialPosts }: HomeContentProps) {
  const [isClient, setIsClient] = useState(false);
  const [posts] = useState<BlogPost[]>(initialPosts);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(initialPosts);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setFilteredPosts(posts);
      return;
    }
    const filtered = posts.filter(post =>
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
      post.content.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

  const handleCategoryChange = (category: string) => {
    if (category === 'All') {
      setFilteredPosts(posts);
      return;
    }
    const filtered = posts.filter(post =>
      post.category?.toLowerCase() === category.toLowerCase()
    );
    setFilteredPosts(filtered);
  };

  const handleTagSelect = (tag: string) => {
    const filtered = posts.filter(post =>
      post.tags?.some(t => t.toLowerCase() === tag.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

  const handleSortChange = (sort: string) => {
    const sorted = [...filteredPosts];
    switch (sort) {
      case 'latest':
        sorted.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        break;
      case 'oldest':
        sorted.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        break;
      case 'popular':
        sorted.sort((a, b) => (b.views || 0) - (a.views || 0));
        break;
    }
    setFilteredPosts(sorted);
  };

  if (!isClient) {
    return (
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initialPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">
      <SearchAndFilter
        onSearch={handleSearch}
        onCategoryChange={handleCategoryChange}
        onTagSelect={handleTagSelect}
        onSortChange={handleSortChange}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
} 