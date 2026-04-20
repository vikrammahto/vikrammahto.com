'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

import {
  aiSdkLogo,
  figmaLogo,
  nextJsLogo,
  nodeJsLogo,
  photoshopLogo,
  reactLogo,
  reactNativeLogo,
  shadcnUiLogo,
  supabaseLogo,
  tailwindCssLogo,
  typeScriptLogo,
} from '@/components/logos';

const techStack = [
  { name: 'React', logo: reactLogo },
  { name: 'Next.js', logo: nextJsLogo },
  { name: 'TypeScript', logo: typeScriptLogo },
  { name: 'Tailwind CSS', logo: tailwindCssLogo },
  { name: 'shadcn/ui', logo: shadcnUiLogo },
  { name: 'React Native', logo: reactNativeLogo },
  { name: 'Node.js', logo: nodeJsLogo },
  { name: 'Supabase', logo: supabaseLogo },
  { name: 'Figma', logo: figmaLogo },
  { name: 'Adobe Photoshop', logo: photoshopLogo },
  { name: 'AI SDK', logo: aiSdkLogo },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const tag = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

export function TechStack() {
  return (
    <div className="mx-auto max-w-5xl">
      <section className="px-6 py-16 text-center sm:px-10 lg:px-16 lg:py-24">
        <div className="space-y-3 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-zinc-600"
          >
            Designed in Figma. Built with React, Next.js, and Tailwind.
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl font-bold sm:text-4xl"
          >
            What you see in the mockup is exactly what ships.
          </motion.h2>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-6 flex flex-wrap items-center justify-center gap-3"
        >
          {techStack.map(({ name, logo }) => (
            <motion.span
              key={name}
              variants={tag}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 text-sm"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                className="h-4 w-4 object-contain"
              />
              {name}
            </motion.span>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
