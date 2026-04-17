const services = [
  {
    title: 'UI/UX Design',
    description:
      'For new products that need to look and feel right from day one.',
    points: [
      'User flows, wireframes, and high-fidelity Figma designs',
      'Conversion-focused layouts for web and mobile',
      'Design system and component library included',
    ],
  },
  {
    title: 'Frontend Development',
    description: 'Pixel-perfect implementation of designs – web and mobile.',
    points: [
      'React, Next.js, TypeScript, Tailwind CSS',
      'React Native for cross-platform mobile',
      'Clean, maintainable code with fast load times',
    ],
  },
  {
    title: 'UI/UX Audit & Accessibility Fix',
    description:
      'For products that exist but feel broken, confusing, or outdated.',
    points: [
      'Full interface audit with a written report of issues',
      'WCAG accessibility testing and fixes',
      'Prioritized list of changes with before/after mockups',
    ],
  },
  {
    title: 'AI Slop Redesign',
    description:
      "Your product was built with AI-generated UI and it shows. Let's fix it.",
    points: [
      'Replace generic, mismatched, low-trust interfaces',
      'Real design thinking applied to your existing product',
      'Delivered as Figma files or implemented directly in code',
    ],
  },
];

export function Services() {
  return (
    <section id="what-i-do" className="px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
      <h2 className="text-center text-3xl font-bold  sm:text-4xl">
        Here's how I can help.
      </h2>
      <p className="text-center text-lg ">
        Let’s turn your vision into something amazing.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-2xl border border-dashed border-zinc-200 p-5"
          >
            <h3 className="text-2xl font-semibold">{service.title}</h3>
            <p className="mt-2 ">{service.description}</p>
            {service.points && (
              <ul className="ms-3 mt-3 list-disc text-lg ">
                {service.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
