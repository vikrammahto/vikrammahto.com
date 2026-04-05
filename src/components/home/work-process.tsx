const processSteps = [
  {
    number: '01',
    title: 'Discovery Call',
    description:
      'We begin with a quick call to understand your idea, audience, and goals.',
    tags: ['Idea', 'Audience', 'Goals'],
  },
  {
    number: '02',
    title: 'Planning & Strategy',
    description:
      'Next, I turn your idea into a clear roadmap with the right features and direction.',
    tags: ['Roadmap', 'Features', 'Direction'],
  },
  {
    number: '03',
    title: 'Scope & Timeline',
    description:
      'You get a clear project scope, timeline, and deliverables before we begin.',
    tags: ['Scope', 'Timeline', 'Deliverables'],
  },
  {
    number: '04',
    title: 'Build & Launch',
    description:
      'I design, build and launch the product with regular updates along the way.',
    tags: ['Build', 'Refine', 'Launch'],
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
              className="rounded-2xl border border-dashed border-zinc-200 bg-white p-5 transition-all duration-200 hover:-translate-y-1 sm:p-6"
            >
              <span className="inline-flex text-6xl font-extrabold text-zinc-800/10">
                {step.number}
              </span>

              <div className="mt-5 rounded-2xl border border-dashed border-zinc-200 bg-zinc-50/80 p-4 sm:p-5">
                <div className="flex flex-wrap items-center gap-3">
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6">
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
