"use client";

import Image from "next/image";

type BlogPost = {
  title: string;
  excerpt: string;
  img: string;
  link: string;
};

export default function BlogPage() {
  const posts: BlogPost[] = [
    {
      title: "Why Lithium Batteries are the Future of Energy",
      excerpt:
        "Explore how lithium technology is replacing lead-acid batteries with better performance, longer life, and eco-friendly benefits.",
      img: "/blog/lithium-future.jpg",
      link: "/blog/lithium-future",
    },
    {
      title: "How to Maximize Your Battery Life",
      excerpt:
        "Simple charging and usage practices that extend your battery’s lifespan and deliver peak performance.",
      img: "/blog/battery-tips.jpg",
      link: "/blog/battery-tips",
    },
    {
      title: "Solar + Lithium: A Perfect Match",
      excerpt:
        "Discover why lithium batteries are the best choice for solar storage — efficiency, reliability, and sustainability.",
      img: "/blog/solar-lithium.jpg",
      link: "/blog/solar-lithium",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* BLOG SECTION */}
      <section className="pt-24 pb-20 max-w-6xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1f8f3e] mb-12 text-center">
          📖 Our Blog
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white shadow-lg hover:shadow-2xl transition overflow-hidden"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={post.img}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-700 text-sm mb-4">{post.excerpt}</p>
                <a
                  href={post.link}
                  className="text-[#28a745] font-semibold hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
