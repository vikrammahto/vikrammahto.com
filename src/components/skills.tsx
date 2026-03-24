interface SkillCategory {
  category: string;
  items: string[];
}

export const Skills = () => {
  const skills: SkillCategory[] = [
    {
      category: 'Languages',
      items: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      category: 'Frameworks',
      items: ['Bootstrap', 'Tailwind CSS'],
    },
    {
      category: 'Library',
      items: ['jQuery', 'ReactJS', 'Material UI'],
    },
    {
      category: 'Design',
      items: ['Figma', 'Penpot', 'Adobe XD', 'Canva', 'Adobe Photoshop'],
    },
    {
      category: 'Others',
      items: ['WordPress', 'Git', 'Github', 'Bitbucket'],
    },
  ];
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-start space-y-5 px-10 md:space-y-7 md:px-5">
      <h1 className="border-b border-lime-400 bg-lime-400/10 px-4 py-1 text-xl">
        Tech Stack
      </h1>
      <div className="gap-4 md:grid md:grid-cols-3">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="border-b-2 border-dashed border-zinc-300 py-3 md:border-0 lg:py-0"
          >
            <h2 className="text-xl">{skill.category}</h2>
            <div className="flex">
              <ul>
                {skill.items.map((item, index) => (
                  <li
                    key={index}
                    className="relative inline-block px-3 before:absolute before:top-1/2 before:left-0 before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-gray-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
