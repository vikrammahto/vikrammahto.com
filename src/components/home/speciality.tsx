const reasons = [
  {
    title: 'One person. Full ownership.',
    description:
      'No handoff delays between designer and developer – I own the full stack from Figma to deployed code. Decisions move faster, and nothing gets lost in translation.',
  },
  {
    title: 'Built for founders who move fast',
    description:
      'I work in tight sprints with clear checkpoints. You always know what\'s done, what\'s next, and what needs your input – no chasing updates.',
  },
  {
    title: 'Design that actually converts',
    description:
      'I don\'t just make things look clean. Every decision is tied to usability, trust signals, and moving users toward action. Good design should pay for itself.',
  },
  {
    title: 'No bloat, no scope creep',
    description:
      'You get a fixed scope and a clear proposal before work starts. No surprise invoices, no endless revision loops.',
  },
];

const cardLayouts = [
  'md:col-span-3',
  'md:col-span-3',
  'md:col-span-4',
  'md:col-span-2',
];

export function Speciality() {
  return (
    <div className="px-6 py-16 text-center sm:px-10 lg:px-16 lg:py-24">
      <div className="space-y-3">
       
        <h2 className="text-3xl font-bold text-zinc-950 sm:text-4xl">
          What could make us <br className="sm:hidden" /> a great fit?
        </h2>
        <p className="text-zinc-600">
          A few reasons founders choose to work with me{' '}
          <br className="hidden sm:block" /> when they need clarity, speed, and
          thoughtful product execution.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:auto-rows-[220px] md:grid-cols-6">
        {reasons.map((reason, index) => (
          <div
            key={reason.title}
            className={[
              'rounded-2xl border border-dashed border-zinc-200 bg-zinc-50 p-5 text-left transition-all duration-200 hover:-translate-y-1',
              cardLayouts[index],
            ].join(' ')}
          >
            <div className="flex h-full flex-col justify-between gap-8">
              <p className="mt-4 text-lg font-semibold text-zinc-950 sm:text-xl">
                {reason.title}
              </p>

              <p className="max-w-md text-zinc-700">{reason.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
