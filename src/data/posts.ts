import { BlogPost } from '@/types/blog';

export const posts: BlogPost[] = [
  {
    id: '1',
    title: 'Next.js ile Modern Web Geliştirme',
    excerpt: 'Modern web uygulamaları geliştirmek için Next.js framework\'ünün sunduğu avantajları keşfedin.',
    content: `
# Next.js ile Modern Web Geliştirme

Next.js, React tabanlı web uygulamaları geliştirmek için mükemmel bir framework'tür. 
Server-side rendering, statik site generation, API routes ve daha birçok özellik sunar.

## Önemli Noktalar

Next.js ile geliştirme yaparken dikkat edilmesi gereken önemli noktalar:

1. **Sayfa yapısı ve routing**
   - App Router vs Pages Router
   - Dynamic Routes
   - Nested Routes

2. **Data fetching yöntemleri**
   - Server Components
   - Client Components
   - Static Site Generation (SSG)
   - Server-side Rendering (SSR)

3. **Optimizasyon teknikleri**
   - Image Optimization
   - Font Optimization
   - Script Optimization

4. **Deployment stratejileri**
   - Vercel
   - Self-hosting
   - Docker

## Sonuç

Next.js, modern web uygulamaları geliştirmek için güçlü araçlar sunar. Bu yazıda bahsettiğimiz konuları projelerinizde kullanarak daha iyi performans ve kullanıcı deneyimi elde edebilirsiniz.
    `,
    date: '2024-02-16',
    author: 'Sıraç Boran'
  },
  {
    id: '2',
    title: 'TypeScript ile Güvenli Kod Yazımı',
    excerpt: 'TypeScript kullanarak nasıl daha güvenli ve sürdürülebilir kod yazabileceğinizi öğrenin.',
    content: `
# TypeScript ile Güvenli Kod Yazımı

TypeScript, JavaScript'e tip güvenliği ekleyerek daha güvenli ve ölçeklenebilir uygulamalar geliştirmenize olanak sağlar.

## TypeScript'in Temel Özellikleri

### 1. Statik Tip Kontrolü

\`\`\`typescript
// Örnek tip tanımlaması
interface User {
  id: number;
  name: string;
  email: string;
}

// Tip kontrolü ile fonksiyon
function getUser(id: number): User {
  // ...
}
\`\`\`

### 2. Interface ve Type Tanımlamaları

TypeScript'te veri yapılarını tanımlamanın iki yolu vardır:

\`\`\`typescript
// Interface kullanımı
interface Animal {
  name: string;
  age: number;
}

// Type kullanımı
type Point = {
  x: number;
  y: number;
};
\`\`\`

### 3. Generics

\`\`\`typescript
function identity<T>(arg: T): T {
  return arg;
}
\`\`\`

## Best Practices

1. Her zaman tip tanımlamalarını kullanın
2. \`any\` tipinden kaçının
3. Null checks için Optional Chaining kullanın
4. Tip güvenliği için strict mode kullanın

TypeScript, modern web geliştirmede vazgeçilmez bir araç haline gelmiştir.
    `,
    date: '2024-02-15',
    author: 'Sıraç Boran'
  },
  {
    id: '3',
    title: 'Tailwind CSS ile Modern UI Tasarımı',
    excerpt: 'Tailwind CSS kullanarak hızlı ve modern kullanıcı arayüzleri nasıl tasarlanır?',
    content: `
# Tailwind CSS ile Modern UI Tasarımı

Tailwind CSS, utility-first bir CSS framework'üdür ve modern web uygulamaları geliştirmek için popüler bir seçimdir.

## Tailwind CSS'in Avantajları

### 1. Hızlı Geliştirme Süreci
- Hazır utility sınıfları
- Kolay özelleştirme
- Responsive tasarım kolaylığı

### 2. Özelleştirilebilir Tasarım Sistemi

\`\`\`html
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Button
</button>
\`\`\`

### 3. Performans
- Düşük bundle size
- PurgeCSS entegrasyonu
- JIT compiler

## Örnek Komponentler

### Card Komponenti

\`\`\`jsx
<div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="image.jpg" alt="Card image">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Card Title</div>
    <p class="text-gray-700 text-base">
      Card description goes here...
    </p>
  </div>
</div>
\`\`\`

Tailwind CSS ile modern ve responsive tasarımlar oluşturmak artık çok daha kolay!
    `,
    date: '2024-02-14',
    author: 'Sıraç Boran'
  }
]; 