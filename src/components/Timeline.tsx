import React from 'react';
import { Card } from './Card';
import { Briefcase, GraduationCap } from 'lucide-react';

const timelineData = [
  {
    id: 1,
    year: '2025 - Present',
    title: 'Vibe coding',
    company: 'Hobby',
    description: 'I am exploring the world of AI and machine learning. I am a beginner, but I am learning every day.',
    icon: <Briefcase className="w-5 h-5" />
  },
  {
    id: 2,
    year: '2025 - Present',
    title: 'Video generation',
    company: 'Hobby',
    description: 'Start to learn and try video generation',
    icon: <Briefcase className="w-5 h-5" />
  },
  {
    id: 3,
    year: '2024 - Present',
    title: 'Beggining of my journey',
    company: 'Hobby',
    description: 'Learning AI',
    icon: <GraduationCap className="w-5 h-5" />
  }
];

export const Timeline: React.FC = () => {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-shadow-neu">
        Career & Education
      </h2>

      <div className="relative">
        {/* The central timeline groove (inset shadow) */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-2 -ml-1 bg-neu-base shadow-neu-pressed rounded-full"></div>

        <div className="space-y-12">
          {timelineData.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={item.id} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>

                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-10 h-10 -ml-5 rounded-full bg-neu-base shadow-neu-flat flex items-center justify-center text-neu-accent z-10">
                  {item.icon}
                </div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${isEven ? 'md:pl-12' : 'md:pr-12'} w-full`}>
                  <Card className="p-8">
                    <span className="text-neu-accent font-semibold text-sm mb-2 block">{item.year}</span>
                    <h3 className="text-xl font-bold text-neu-text-main mb-1">{item.title}</h3>
                    <h4 className="text-neu-text-sub font-medium mb-4">{item.company}</h4>
                    <p className="text-neu-text-sub leading-relaxed">
                      {item.description}
                    </p>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
