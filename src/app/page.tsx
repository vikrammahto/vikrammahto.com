import { BeforeFooterCta } from '@/components/home/before-footer-cta';
import { Faq } from '@/components/home/faq';
import { Hero } from '@/components/home/hero';
import { ProblemSolution } from '@/components/home/problem-solution';
import { Services } from '@/components/home/services';
import { Speciality } from '@/components/home/speciality';
import { TechStack } from '@/components/home/tech-stack';
import { WorkProcess } from '@/components/home/work-process';

export default function Page() {
  return (
    <div className="mx-auto max-w-5xl text-xl">
      <Hero />
      <ProblemSolution />
      <Services />
      <TechStack />
      <Speciality />
      <WorkProcess />
      <Faq />
      <BeforeFooterCta />
    </div>
  );
}
