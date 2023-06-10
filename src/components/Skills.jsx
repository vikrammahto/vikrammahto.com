import React from 'react';

const Skills = () => {
  const skills = [
    {
      category: 'Languages',
      items: ['HTML', 'CSS', 'JavaScript', 'PHP (WordPress)'],
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
      category: 'Tools & Other',
      items: ['Git', 'Github', 'Bitbucket', 'Visual Studio Code'],
    },
  ];
  return (
    <div className="mt-20 flex flex-col items-start space-y-5 md:mt-32 md:space-y-7 md:px-5 lg:mt-32">
      <h1 className="text-3xl font-bold">Skills</h1>
      <div className="md:grid md:grid-cols-3 md:gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="py-3 border-dashed border-b-2 border-zinc-300 md:border-0"
          >
            <h2 className="text-2xl">{skill.category}</h2>
            <div className="flex">
              <ul className="">
                {skill.items.map((item, index) => (
                  <li
                    key={index}
                    className="inline-block relative px-3 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-gray-300 before:rounded-full"
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

export default Skills;
