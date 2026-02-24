import React from 'react';
import { Card } from './Card';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from './Button';

const worksData = [
  {
    id: 1,
    title: 'AI Geek Blog',
    description: 'AI関連ニュースやトピックを記事として扱っています。ニュースの取得から投稿まで完全に自動化しています。',
    image: 'https://picsum.photos/seed/work1/600/400',
    tags: ['HTML', 'Automation'],
    demoUrl: 'https://erk-artifacts.github.io/ai-blog/',
    githubUrl: 'https://github.com/erk-artifacts/ai-blog'
  }
];

export const Works: React.FC = () => {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-shadow-neu">
        Selected Works
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {worksData.map((work) => (
          <Card key={work.id} interactive className="flex flex-col overflow-hidden group">
            {/* Image Container with Inset Shadow */}
            <div className="p-4 pb-0">
              <div className="rounded-[16px] overflow-hidden shadow-neu-pressed aspect-video relative">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2">{work.title}</h3>
              <p className="text-neu-text-sub mb-4 flex-grow">{work.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {work.tags.map(tag => (
                  <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-neu-base shadow-neu-sm text-neu-text-sub">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 mt-auto">
                <a href={work.demoUrl} className="flex-1">
                  <Button className="w-full flex items-center justify-center gap-2 py-3 text-sm">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </Button>
                </a>
                <a href={work.githubUrl} className="flex-1">
                  <Button className="w-full flex items-center justify-center gap-2 py-3 text-sm">
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                </a>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
