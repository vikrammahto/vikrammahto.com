const services = [
  {
    title: 'MVP Development',
    description: 'Help you launch your product quickly.',
    points: [
      'Idea validation',
      'MVP planning',
      'Fast development & deployment',
    ],
  },
  {
    title: 'Web Applications',
    description: 'Production-ready web apps built with modern tech.',
    points: ['SaaS platforms', 'Dashboards', 'Internal tools'],
  },
  {
    title: 'Mobile Apps',
    description: 'Cross-platform mobile apps using React Native CLI.',
    points: [
      'Android & iOS apps',
      'API integrations',
      'Performance-focused builds',
    ],
  },
  {
    title: 'UI/UX Design',
    description: 'Clean, functional, and conversion-focused design.',
    points: ['Wireframes', 'High-fidelity UI', 'Design systems'],
  },
];

export function Services() {
  return (
    <section id="what-i-do" className="px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
      <p className="text-center text-zinc-500">Why work with me?</p>
      <h2 className="text-center text-3xl font-bold text-zinc-950 sm:text-4xl">
        How Can I Help?
      </h2>
      <p className="text-center text-lg text-zinc-700">
        Let’s turn your vision into something amazing.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-2xl border border-dashed border-zinc-200 p-5"
          >
            <h3 className="text-2xl font-semibold">{service.title}</h3>
            <p className="mt-2 text-zinc-700">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
