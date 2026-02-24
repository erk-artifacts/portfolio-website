import { Hero } from './components/Hero';
import { Timeline } from './components/Timeline';
import { Works } from './components/Works';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-neu-base text-neu-text-main font-sans selection:bg-neu-accent/30 selection:text-neu-accent">
      <main className="overflow-hidden">
        <Hero />
        <Timeline />
        <Works />
        <Contact />
      </main>

      <footer className="py-8 text-center text-neu-text-sub text-sm">
        <p>&copy; {new Date().getFullYear()} Erika Suzuki. All rights reserved.</p>
      </footer>
    </div>
  );
}
