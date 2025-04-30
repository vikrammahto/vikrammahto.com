import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import React from 'react';

const page = () => {
  return (
    <div>
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
};

export default page;
