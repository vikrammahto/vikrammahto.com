'use client';
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
      'A focused 30-minute call to understand your product, your users, and what\'s not working. No fluff – just enough context to hit the ground running.',
    tags: ['Product', 'Users', 'Pain Points'],
    icons: [LightbulbFilamentIcon, UsersThreeIcon, CrosshairIcon],
  },
  {
    number: '02',
    title: 'Audit & Strategy',
    description:
      'I review your current product and identify the highest-impact UX and design issues. You get a prioritized plan before a single pixel is moved.',
    tags: ['UX Audit', 'Priorities', 'Plan'],
    icons: [BlueprintIcon, ClipboardTextIcon, CompassIcon],
  },
  {
    number: '03',
    title: 'Scope & Proposal',
    description:
      'You receive a clear proposal – exact deliverables, timeline, and pricing. No surprises, no scope creep. You approve before work begins.',
    tags: ['Deliverables', 'Timeline', 'Pricing'],
    icons: [MapPinSimpleAreaIcon, ClockUserIcon, PackageIcon],
  },
  {
    number: '04',
    title: 'Design & Build',
    description:
      'I design and implement in focused sprints with check-ins at each milestone. You review, give feedback, and we refine until it ships.',
    tags: ['Design', 'Build', 'Launch'],
    icons: [CodeSimpleIcon, ScanIcon, RocketLaunchIcon],
  },
];

export function WorkProcess() {
  return (
    <section className="px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
      <div className="space-y-3 text-center">
        <p className="text-zinc-500">How I work?</p>
        <h2 className="text-3xl font-bold text-zinc-950 sm:text-4xl">
          A simple, structured path from idea to launch.
        </h2>
        <p className="text-zinc-600">
          Every step is designed to keep the process clear, collaborative, and
          easy to move through.
        </p>
      </div>

      <div className="mt-8 grid gap-3 md:grid-cols-2">
        {processSteps.map((step) => {
          return (
            <div
              key={step.title}
              className="group rounded-3xl border border-dashed border-zinc-200/80 bg-gradient-to-br from-white to-zinc-50/80 p-5 ring-1 ring-black/[0.02] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-200/60 sm:p-6"
            >
              <span className="inline-flex text-6xl font-black tracking-tighter text-zinc-200 transition-colors duration-300 group-hover:text-zinc-300">
                {step.number}
              </span>

              <div className="mt-6">
                <div className="mb-4 flex items-center gap-2">
                  {step.icons.map((Icon, index) => (
                    <span
                      key={index}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-white/90 text-zinc-600 shadow-sm transition-transform duration-300 group-hover:-translate-y-0.5"
                    >
                      <Icon size={20} weight="duotone" />
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-semibold text-zinc-950">
                  {step.title}
                </h3>
                <p className="mt-2 text-zinc-600">{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
