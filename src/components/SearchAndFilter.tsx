"use client";

import { useState, useEffect } from 'react';
import { HiSearch, HiFilter } from 'react-icons/hi';

interface SearchAndFilterProps {
  onSearch: (query: string) => void;
  onCategoryChange: (category: string) => void;
  onTagSelect: (tag: string) => void;
  onSortChange: (sort: string) => void;
}

export default function SearchAndFilter({
  onSearch,
  onCategoryChange,
  onTagSelect,
  onSortChange,
}: SearchAndFilterProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSort, setSelectedSort] = useState('latest');

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(searchQuery);
    }, 400);

    return () => clearTimeout(timer);
  }, [searchQuery, onSearch]);

  const categories = ['All', 'Design', 'Development', 'Technology', 'AI'];
  const tags = ['UX Design', 'Development', 'Career', 'Technology', 'Web', 'AI'];
  const sortOptions = [
    { value: 'latest', label: 'Latest' },
    { value: 'oldest', label: 'Oldest' },
    { value: 'popular', label: 'Most Popular' },
    { value: 'relevant', label: 'Most Relevant' },
  ];

  return (
    <div className="mb-8">
      <div className="flex gap-4 mb-4">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 pl-10 bg-white rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
          />
          <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="px-4 py-2 bg-white border border-gray-300 rounded-lg flex items-center gap-2 hover:border-blue-500 transition-all"
        >
          <HiFilter className="w-5 h-5" />
          Filters
        </button>
      </div>

      {isFilterOpen && (
        <div className="bg-white p-4 rounded-lg border border-gray-300 space-y-4">
          <div>
            <h3 className="font-medium mb-2">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    onCategoryChange(category);
                  }}
                  className={`px-3 py-1 rounded-full text-sm ${selectedCategory === category ? 'bg-blue-200' : 'bg-gray-200'} hover:bg-blue-300 transition-colors`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-2">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => onTagSelect(tag)}
                  className="px-3 py-1 rounded-full text-sm bg-gray-200 hover:bg-blue-200 transition-colors"
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-2">Sort By</h3>
            <select
              value={selectedSort}
              onChange={(e) => {
                setSelectedSort(e.target.value);
                onSortChange(e.target.value);
              }}
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  );
}
