const faqs = [
  {
    question: 'What kind of products do you usually work on?',
    answer:
      'I mainly help founders and startups with landing pages, MVPs, dashboards, internal tools, and polished product experiences.',
  },
  {
    question: 'Can you handle both design and development?',
    answer:
      'Yes — I can support product thinking, UI/UX design, and frontend development, which helps keep the process faster and more consistent.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'It depends on scope, but smaller projects can move quickly while larger product builds are usually planned in clear phases with timelines upfront.',
  },
  {
    question: 'Do you work with remote clients?',
    answer:
      'Absolutely. I work remotely and keep communication simple through regular updates, async check-ins, and milestone-based delivery.',
  },
  {
    question: 'What do you need from me to get started?',
    answer:
      'Usually just the idea, your goals, and any existing context. From there, I can help shape the scope and next steps.',
  },
];

export function Faq() {
  return (
    <section className="px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
      <div className="space-y-3 text-center">
        <p className="text-sm font-semibold text-zinc-500">FAQs</p>
        <h2 className="text-3xl font-bold text-zinc-950 sm:text-4xl">
          Questions founders usually ask.
        </h2>
        <p className="mx-auto max-w-2xl text-zinc-600">
          A few quick answers about how I work, what I build, and what to
          expect.
        </p>
      </div>

      <div className="mt-8 space-y-3">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-[24px] border border-dashed border-zinc-200 bg-white p-5"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-zinc-950">
              <span>{faq.question}</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 text-lg text-zinc-600 transition group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 max-w-3xl text-zinc-600">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
