'use client';

import { motion } from 'motion/react';
import {
  BlueprintIcon,
  ClipboardTextIcon,
  ClockUserIcon,
  CodeSimpleIcon,
  CompassIcon,
  CrosshairIcon,
  LightbulbFilamentIcon,
  MapPinSimpleAreaIcon,
  PackageIcon,
  RocketLaunchIcon,
  ScanIcon,
  UsersThreeIcon,
} from '@phosphor-icons/react';

const processSteps = [
  {
    number: '01',
    title: 'Discovery Call',
    description:
      'We begin with a quick call to understand your idea, audience, and goals.',
    tags: ['Product', 'Users', 'Pain Points'],
    icons: [LightbulbFilamentIcon, UsersThreeIcon, CrosshairIcon],
  },
  {
    number: '02',
    title: 'Planning & Strategy',
    description:
      'Next, I turn your idea into a clear roadmap with the right features and direction.',
    tags: ['UX Audit', 'Priorities', 'Plan'],
    icons: [BlueprintIcon, ClipboardTextIcon, CompassIcon],
  },
  {
    number: '03',
    title: 'Scope & Proposal',
    description:
      'You get a clear project scope, timeline, and deliverables before we begin.',
    tags: ['Deliverables', 'Timeline', 'Pricing'],
    icons: [MapPinSimpleAreaIcon, ClockUserIcon, PackageIcon],
  },
  {
    number: '04',
    title: 'Design & Build',
    description:
      'I design, build and launch the product with regular updates along the way.',
    tags: ['Design', 'Build', 'Launch'],
    icons: [CodeSimpleIcon, ScanIcon, RocketLaunchIcon],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const step = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

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

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-8 grid gap-3 md:grid-cols-2"
        >
          {processSteps.map((stepItem) => {
            return (
              <motion.div
                key={stepItem.title}
                variants={step}
                className="group rounded-3xl border border-dashed border-zinc-200/80 bg-linear-to-br from-white to-zinc-50/80 p-5 ring-1 ring-black/2 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-200/60 sm:p-6"
              >
                <span className="inline-flex text-6xl font-black tracking-tighter text-zinc-200 transition-colors duration-300 group-hover:text-zinc-600">
                  {stepItem.number}
                </span>

                <div className="mt-6">
                  <div className="mb-4 flex items-center gap-2">
                    {stepItem.icons.map((Icon, idx) => (
                      <span
                        key={idx}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-white/90 text-zinc-600 shadow-sm transition-transform duration-300 group-hover:-translate-y-0.5"
                      >
                        <Icon size={20} weight="duotone" />
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-semibold text-zinc-950">
                    {stepItem.title}
                  </h3>
                  <p className="mt-2 text-zinc-600">{stepItem.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>
    </div>
  );
}
