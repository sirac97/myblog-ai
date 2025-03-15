import { getAllPosts } from '@/utils/posts';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import HomeContent from '@/components/HomeContent';

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <main className="min-h-screen bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute inset-0">
        <div className="absolute -left-[20%] top-[10%] w-[40%] h-[40%] rounded-full bg-purple-200 blur-[150px] opacity-60"></div>
        <div className="absolute -right-[20%] top-[20%] w-[40%] h-[40%] rounded-full bg-blue-200 blur-[150px] opacity-60"></div>
        <div className="absolute left-[30%] bottom-[10%] w-[30%] h-[40%] rounded-full bg-pink-100 blur-[150px] opacity-40"></div>
      </div>
      <div className="relative container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-navy-900">
            Sırac Boran
          </h1>
          <p className="text-xl text-navy-900 mb-6">
            Just thoughts about design and software
          </p>
          <div className="flex justify-center gap-6">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-navy-900 hover:text-blue-600 transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-navy-900 hover:text-blue-600 transition-colors">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-navy-900 hover:text-blue-600 transition-colors">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
        
        <HomeContent initialPosts={posts} />
      </div>
    </main>
  );
}
