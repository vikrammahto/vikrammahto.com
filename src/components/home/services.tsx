'use client';

import { motion } from 'motion/react';

const services = [
  {
    title: 'UI/UX Design',
    description:
      'For new products that need to look and feel right from day one.',
    points: [
      'User flows, wireframes, and high-fidelity Figma designs',
      'Conversion-focused layouts for web and mobile',
      'Design system and component library included',
    ],
  },
  {
    title: 'Frontend Development',
    description: 'Pixel-perfect implementation of designs – web and mobile.',
    points: [
      'React, Next.js, TypeScript, Tailwind CSS',
      'React Native for cross-platform mobile',
      'Clean, maintainable code with fast load times',
    ],
  },
  {
    title: 'UI/UX Audit & Accessibility Fix',
    description:
      'For products that exist but feel broken, confusing, or outdated.',
    points: [
      'Full interface audit with a written report of issues',
      'WCAG accessibility testing and fixes',
      'Prioritized list of changes with before/after mockups',
    ],
  },
  {
    title: 'AI Slop Redesign',
    description:
      "Your product was built with AI-generated UI and it shows. Let's fix it.",
    points: [
      'Replace generic, mismatched, low-trust interfaces',
      'Real design thinking applied to your existing product',
      'Delivered as Figma files or implemented directly in code',
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export function Services() {
  return (
    <div className="">
      <section
        id="services"
        className="mx-auto max-w-5xl px-6 py-16 sm:px-10 lg:px-16 lg:py-24"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-bold sm:text-4xl"
        >
          Here's how I can help.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto max-w-xl text-center text-zinc-600"
        >
          Whether you need a full design and build, a quick audit, or just want
          to fix that AI-generated mess – I've got you covered.
        </motion.p>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-8 grid gap-4 md:grid-cols-2"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={card}
              className="rounded-2xl border border-dashed border-zinc-200 p-5"
            >
              <h3 className="text-2xl font-semibold">{service.title}</h3>
              <p className="mt-2">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
