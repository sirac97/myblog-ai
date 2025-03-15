"use client";

import { useState } from 'react';
import { HiHeart, HiChat, HiShare, HiReply } from 'react-icons/hi';

interface Comment {
  id: string;
  author: string;
  content: string;
  date: string;
  likes: number;
  replies: Comment[];
}

interface CommentsProps {
  postId: string;
}

export default function Comments({ postId }: CommentsProps) {
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState<Comment[]>([
    {
      id: '1',
      author: 'John Doe',
      content: 'Great article! Really enjoyed reading about your journey.',
      date: '2024-02-20',
      likes: 5,
      replies: [
        {
          id: '2',
          author: 'Jane Smith',
          content: 'Totally agree! The balance between development and design is crucial.',
          date: '2024-02-21',
          likes: 3,
          replies: [],
        },
      ],
    },
  ]);

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: Date.now().toString(),
      author: 'Current User',
      content: newComment,
      date: new Date().toISOString().split('T')[0],
      likes: 0,
      replies: [],
    };

    setComments([comment, ...comments]);
    setNewComment('');
  };

  const CommentComponent = ({ comment }: { comment: Comment }) => (
    <div className="border-b border-gray-100 last:border-0 py-4">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h4 className="font-medium text-navy-900">{comment.author}</h4>
          <time className="text-sm text-gray-600">{comment.date}</time>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1 text-gray-600 hover:text-red-500 transition-colors">
            <HiHeart className="w-5 h-5" />
            <span className="text-sm">{comment.likes}</span>
          </button>
          <button className="text-gray-600 hover:text-blue-500 transition-colors">
            <HiReply className="w-5 h-5" />
          </button>
        </div>
      </div>
      <p className="text-navy-800 mb-4">{comment.content}</p>
      
      {comment.replies.length > 0 && (
        <div className="ml-8 border-l-2 border-gray-100 pl-4 space-y-4">
          {comment.replies.map((reply) => (
            <CommentComponent key={reply.id} comment={reply} />
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-navy-900">Comments</h3>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-gray-600 hover:text-blue-500 transition-colors">
            <HiShare className="w-5 h-5" />
            Share
          </button>
          <button className="flex items-center gap-2 text-gray-600 hover:text-blue-500 transition-colors">
            <HiChat className="w-5 h-5" />
            {comments.length} Comments
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmitComment} className="mb-8">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all resize-none h-32"
        />
        <div className="flex justify-end mt-2">
          <button
            type="submit"
            className="px-4 py-2 bg-gradient-to-r from-gray-900 to-black text-white rounded-lg hover:opacity-90 transition-all duration-300"
          >
            Post Comment
          </button>
        </div>
      </form>

      <div className="space-y-2">
        {comments.map((comment) => (
          <CommentComponent key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
} 