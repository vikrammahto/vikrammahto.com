'use client';

import { motion } from 'motion/react';

const processSteps = [
  {
    number: '01',
    title: 'Discovery Call',
    description:
      'We begin with a quick call to understand your idea, audience, and goals.',
    tags: ['Product', 'Users', 'Pain Points'],
    image: '/discovery-call.svg',
  },
  {
    number: '02',
    title: 'Planning & Strategy',
    description:
      'Next, I turn your idea into a clear roadmap with the right features and direction.',
    tags: ['UX Audit', 'Priorities', 'Plan'],
    image: '/planning-strategy.svg',
  },
  {
    number: '03',
    title: 'Scope & Proposal',
    description:
      'You get a clear project scope, timeline, and deliverables before we begin.',
    tags: ['Deliverables', 'Timeline', 'Pricing'],
    image: '/scope-proposal.svg',
  },
  {
    number: '04',
    title: 'Design & Build',
    description:
      'I design, build and launch the product with regular updates along the way.',
    tags: ['Design', 'Build', 'Launch'],
    image: '/build-launch.svg',
  },
];

export function WorkProcess() {
  return (
    <div className="mx-auto max-w-5xl">
      <section className="px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="space-y-3 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-zinc-600"
          >
            How I work?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl font-bold sm:text-4xl"
          >
            A simple, structured path from idea to launch.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-zinc-600"
          >
            Every step is designed to keep the process clear, collaborative, and
            easy to move through.
          </motion.p>
        </div>

        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {processSteps.map((stepItem) => {
            return (
              <motion.div
                key={stepItem.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="group rounded-3xl border border-dashed border-zinc-200/80 bg-linear-to-br from-white to-zinc-50/80 p-5 ring-1 ring-black/2 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-200/60 sm:p-6"
              >
                <div className="relative mb-4 overflow-hidden rounded-2xl bg-zinc-100">
                  <img
                    src={stepItem.image}
                    alt={stepItem.title}
                    className="h-50 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute -top-4 right-4 z-10 inline-flex text-6xl font-black tracking-tighter text-zinc-200 transition-colors duration-300 group-hover:text-zinc-600">
                    {stepItem.number}
                  </span>
                </div>

                <div className="mt-6">
                  <h3 className="text-2xl font-semibold text-zinc-950">
                    {stepItem.title}
                  </h3>
                  <p className="mt-2 text-zinc-600">{stepItem.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
