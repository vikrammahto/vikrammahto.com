const reasons = [
  {
    title: 'One person. Full ownership.',
    description:
      'No need to hire a separate designer and developer. I handle both.',
  },
  {
    title: 'Built for founders who move fast',
    description:
      'You get fast delivery without messy code, broken UX, or unclear process.',
  },
  {
    title: 'Startup – focused mindset',
    description:
      'I think beyond features – usability, scalability, and real user problems.',
  },
  {
    title: 'Clear communication',
    description:
      'You get a fixed scope and a clear proposal before work starts.',
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
        <p className="text-zinc-500">Why work with me?</p>
        <h2 className="text-3xl font-bold text-zinc-950 sm:text-4xl">
          You've probably been burned <br className="sm:hidden" /> before.
        </h2>
        <p className="text-zinc-600">
          Slow agencies. Developers who can't design.{' '}
          <br className="hidden sm:block" /> Designers who can't ship. Here's
          why working with me is different.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:auto-rows-[220px] md:grid-cols-6">
        {reasons.map((reason, index) => (
          <div
            key={reason.title}
            className={[
              'rounded-2xl border border-dashed border-zinc-200 bg-zinc-50/10 p-5 text-left transition-all duration-200 hover:-translate-y-1',
              cardLayouts[index],
            ].join(' ')}
          >
            <div className="flex h-full flex-col justify-between gap-8">
              <p className="mt-4 text-lg font-semibold sm:text-xl">
                {reason.title}
              </p>

              <p className="max-w-md text-zinc-600">{reason.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
