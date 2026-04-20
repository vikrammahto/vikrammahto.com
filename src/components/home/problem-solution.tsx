'use client';

import { motion } from 'motion/react';
import { CheckCircleIcon, XCircleIcon, XIcon } from '@phosphor-icons/react';

const founderChallenges = [
  'My product looks like it was made by ChatGPT',
  'Users land on my site and immediately lose trust',
  "My app has a 60% drop-off and I don't know why",
  'My designer and developer keep blaming each other',
  "I got an accessibility complaint and don't know where to start",
];

const whatIBring = [
  'A design that looks intentional, not generated',
  'Interfaces users actually understand on first visit',
  "A UX audit that tells you exactly what's broken and why",
  'One person who handles both – no miscommunication',
  'WCAG-compliant fixes delivered fast with documentation',
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const listItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function ProblemSolution() {
  return (
    <div className="bg-amber-50">
      <section className="mx-auto max-w-5xl px-6 py-16 text-center sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto space-y-8 text-center text-xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl text-neutral-900 sm:text-4xl sm:font-semibold"
          >
            I work with founders and teams <br className="hidden sm:block" />{' '}
            who are done prototyping – and ready to ship something real.
          </motion.p>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-4 rounded-3xl border-dashed border-zinc-300 sm:border sm:p-6 md:grid-cols-2"
          >
            <motion.div
              variants={listItem}
              className="rounded-2xl border border-dashed border-zinc-200 bg-red-700/10 p-6 text-left"
            >
              <p className="text-2xl font-semibold">
                Founders often face this:
              </p>
              <motion.ul
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mt-3 list-none space-y-2"
              >
                {founderChallenges.map((listItemText) => (
                  <motion.li
                    key={listItemText}
                    variants={listItem}
                    className="flex items-start gap-2"
                  >
                    <span className="relative mt-1 inline-flex size-6 shrink-0 items-center justify-center">
                      <XCircleIcon className="" size={24} weight="duotone" />
                      <XIcon
                        className="absolute text-red-500"
                        size={10}
                        weight="bold"
                      />
                    </span>
                    <span>{listItemText}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div
              variants={listItem}
              className="rounded-2xl border border-dashed border-zinc-200 p-6 text-left"
            >
              <p className="text-2xl font-semibold">What I bring instead:</p>
              <motion.ul
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mt-3 list-none space-y-2"
              >
                {whatIBring.map((listItemText) => (
                  <motion.li
                    key={listItemText}
                    variants={listItem}
                    className="flex items-start gap-2"
                  >
                    <CheckCircleIcon
                      className="mt-1 shrink-0 text-emerald-700"
                      size={24}
                      weight="fill"
                    />
                    <span>{listItemText}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 text-2xl"
          >
            The result is simpler delivery, better momentum, <br className='hidden sm:block' /> and a
            product people can start using with confidence.
          </motion.p>
        </div>
      </section>
    </div>
  );
}
