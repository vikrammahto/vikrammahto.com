'use client';

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

export function ProblemSolution() {
  return (
    <section className="px-6 py-16 text-center sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto space-y-8 text-center text-xl">
        <p className="text-2xl text-zinc-700">
          I work with founders and teams <br className="hidden sm:block" /> who
          are done prototyping – and ready to ship something real.
        </p>

        <div className="grid gap-4 rounded-3xl border-dashed border-zinc-300 sm:border sm:p-6 md:grid-cols-2">
          <div className="rounded-2xl border border-dashed border-zinc-200 bg-zinc-50/50 p-6 text-left">
            <p className="text-2xl font-semibold text-zinc-900">
              Founders often face this:
            </p>
            <ul className="mt-3 list-none space-y-2 text-zinc-700">
              {founderChallenges.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="relative mt-1 inline-flex size-[24px] shrink-0 items-center justify-center">
                    <XCircleIcon
                      className="text-zinc-200"
                      size={24}
                      weight="duotone"
                    />
                    <XIcon
                      className="absolute text-red-500"
                      size={10}
                      weight="bold"
                    />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-dashed border-zinc-200 p-6 text-left">
            <p className="text-2xl font-semibold text-zinc-900">
              What I bring instead:
            </p>
            <ul className="mt-3 list-none space-y-2 text-zinc-700">
              {whatIBring.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircleIcon
                    className="mt-1 shrink-0 text-emerald-700"
                    size={24}
                    weight="fill"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-4 text-2xl text-zinc-700">
          The result is simpler delivery, better momentum, <br /> and a product
          people can start using with confidence.
        </p>
      </div>
    </section>
  );
}
