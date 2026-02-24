import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-[80vh] flex flex-col md:flex-row items-center justify-center gap-12 py-20 px-6 max-w-6xl mx-auto">
      {/* Left: Profile Image */}
      <div className="flex-shrink-0 relative group">
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-neu-base shadow-neu-flat p-4 transition-transform duration-500 group-hover:scale-105">
          <div className="w-full h-full rounded-full overflow-hidden shadow-neu-pressed">
            <img
              src="https://picsum.photos/seed/profile/400/400"
              alt="Profile"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      {/* Right: Intro */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 max-w-xl">
        <h2 className="text-neu-accent font-semibold tracking-wider uppercase text-sm">
          AI Adaptability Expert
        </h2>
        <h1 className="text-5xl md:text-7xl font-bold text-neu-text-main text-shadow-neu leading-tight">
          Hi, I'm <br />
          <span className="text-neu-accent">Erika Suzuki</span>
        </h1>
        <p className="text-neu-text-sub text-lg leading-relaxed whitespace-pre-line">
          I leverage the full spectrum of AI to build, automate, and create at the speed of thought.
          From vibe coding to AI-driven video production, I specialize in mastering emerging tools
          to redefine what’s possible in the digital landscape.
          {"\n\n"}
          思考のスピードで開発・自動化・創造を行うため、AIの全領域を駆使します。バイブコーディングからAI動画制作まで、新興ツールをいち早くマスターし、デジタル領域の可能性を再定義することに注力しています。
        </p>

        <div className="flex gap-6 pt-4">
          <Button variant="icon" aria-label="GitHub">
            <Github className="w-6 h-6" />
          </Button>
          <Button variant="icon" aria-label="LinkedIn">
            <Linkedin className="w-6 h-6" />
          </Button>
          <Button variant="icon" aria-label="Email">
            <Mail className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};
