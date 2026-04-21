'use client';

import { motion } from 'motion/react';

const reasons = [
  {
    title: 'One person. Full ownership.',
    description:
      'No need to hire a separate designer and developer. I handle both.',
    image: '/ownership.svg',
  },
  {
    title: 'Built for founders who move fast',
    description:
      'You get fast delivery without messy code, broken UX, or unclear process.',
    image: '/built-for-founders.svg',
  },
  {
    title: 'Startup – focused mindset',
    description:
      'I think beyond features – usability, scalability, and real user problems.',
    image: '/starttup-mindset.svg',
  },
  {
    title: 'Clear communication',
    description:
      'Everything stays documented, transparent, and easy to follow-up from start to finish.',
    image: '/clear-communication.svg',
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

export function Speciality() {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="px-6 py-16 text-center sm:px-10 lg:px-16 lg:py-24">
        <div className="space-y-3">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-zinc-500"
          >
            Why work with me?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl font-bold text-zinc-950 sm:text-4xl"
          >
            You've probably been burned before.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-zinc-600"
          >
            Slow agencies. Developers who can't design.{' '}
            <br className="hidden sm:block" /> Designers who can't ship. Here's
            why working with me is different.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-8 grid gap-4 md:grid-cols-6"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              variants={card}
              className="rounded-2xl border border-dashed border-zinc-200 bg-zinc-50/10 text-left transition-all duration-200 hover:-translate-y-1 md:col-span-3"
            >
              <div className="flex h-full flex-col justify-between gap-2">
                <div>
                  <p className="px-5 pt-5 text-lg font-semibold sm:text-2xl">
                    {reason.title}
                  </p>
                  <img
                    src={reason.image}
                    alt={reason.title}
                    className="my-auto object-contain"
                  />
                </div>

                <p className="max-w-md p-5 text-zinc-600">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
