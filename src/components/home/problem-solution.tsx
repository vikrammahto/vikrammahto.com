'use client';

import {
  CheckCircleIcon,
  CheckIcon,
  XCircleIcon,
  XIcon,
} from '@phosphor-icons/react';

const founderChallenges = [
  'building takes too long',
  'design and development feel disconnected',
  'early versions look unfinished',
  'shipping gets delayed by unclear execution',
];

const whatIBring = [
  'a smoother path from idea to launch',
  'one partner across product, design, and development',
  'clean interfaces ready for real users',
  'faster progress with less back-and-forth',
];

export function ProblemSolution() {
  return (
    <section className="px-6 py-16 text-center sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto space-y-8 text-center text-xl">
        <p className="text-2xl text-zinc-700">
          I work with founders and organizations who want to{' '}
          <br className="hidden sm:block" /> turn ideas into real, usable
          products — not just prototypes.
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
