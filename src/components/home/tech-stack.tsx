const techStack = [
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'shadcn/ui',
  'React Native',
  'Node.js',
  'Supabase',
  'Figma',
  'Adobe Photoshop',
  'AI SDK',
];
export function TechStack() {
  return (
    <section className="px-6 py-16 text-center sm:px-10 lg:px-16 lg:py-24">
      <div className="space-y-3 text-center">
        <p className="text-zinc-500">Tools & Technologies that I work with</p>
        <h2 className="text-3xl font-bold text-zinc-950 sm:text-4xl">
          A focused set of tools I use to design, build, <br />
          and ship fast, scalable digital products.
        </h2>
      </div>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        {techStack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-zinc-300 px-4 py-2 text-lg text-zinc-800"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
