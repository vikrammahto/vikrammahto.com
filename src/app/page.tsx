import { Hero } from '@/components/hero';
import { Projects } from '@/components/projects';
import { Skills } from '@/components/skills';

export default function Page() {
  return (
    <div className="space-y-20">
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
}
