import Image from 'next/image';

import {
  aiSdkLogo,
  figmaLogo,
  nextJsLogo,
  nodeJsLogo,
  photoshopLogo,
  reactLogo,
  reactNativeLogo,
  shadcnUiLogo,
  supabaseLogo,
  tailwindCssLogo,
  typeScriptLogo,
} from '@/components/logos';

const techStack = [
  { name: 'React', logo: reactLogo },
  { name: 'Next.js', logo: nextJsLogo },
  { name: 'TypeScript', logo: typeScriptLogo },
  { name: 'Tailwind CSS', logo: tailwindCssLogo },
  { name: 'shadcn/ui', logo: shadcnUiLogo },
  { name: 'React Native', logo: reactNativeLogo },
  { name: 'Node.js', logo: nodeJsLogo },
  { name: 'Supabase', logo: supabaseLogo },
  { name: 'Figma', logo: figmaLogo },
  { name: 'Adobe Photoshop', logo: photoshopLogo },
  { name: 'AI SDK', logo: aiSdkLogo },
];

export function TechStack() {
  return (
    <section className="px-6 py-16 text-center sm:px-10 lg:px-16 lg:py-24">
      <div className="space-y-3 text-center">
        <p className="">
          Designed in Figma. Built with React, Next.js, and Tailwind.
        </p>
        <h2 className="text-3xl font-bold  sm:text-4xl">
          What you see in the mockup is exactly what ships.
        </h2>
      </div>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        {techStack.map(({ name, logo }) => (
          <span
            key={name}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 text-sm "
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              className="h-4 w-4 object-contain"
            />
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}
