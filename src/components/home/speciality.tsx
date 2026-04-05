const reasons = [
  {
    title: 'One person. Full product.',
    description:
      'No need to hire a separate designer and developer. I handle both.',
  },
  {
    title: 'Speed without chaos',
    description:
      'You get fast delivery without messy code, broken UX, or unclear process.',
  },
  {
    title: 'Startup-focused mindset',
    description:
      'I think beyond features — usability, scalability, and real user problems.',
  },
  {
    title: 'Clear communication',
    description:
      'Everything stays documented, transparent, and easy to follow from start to finish.',
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
          What could make us a great fit?
        </h2>
        <p className="text-zinc-600">
          A few reasons founders choose to work with me <br /> when they need
          clarity, speed, and thoughtful product execution.
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
