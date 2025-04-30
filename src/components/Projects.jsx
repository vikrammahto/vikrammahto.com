import Image from 'next/image';
import React from 'react';

const Projects = () => {
  const works = [
    {
      title: 'Tototimer',
      description:
        'PWA App to Manage Time, Money and Work. [React, Tailwind CSS]',
      code: 'https://github.com/vikrammahto/tototimer',
      live: 'https://tototimer.vercel.app/',
      stack: 'React, Tailwind CSS',
      thumbnail: 'tototimer.svg',
    },
    {
      title: 'Sangeet - Music UI',
      description: 'Music app desktop UI made using HTML, Vanilla CSS and JS',
      code: 'https://github.com/vikrammahto/sangeet',
      live: 'https://vikrammahto.github.io/sangeet/',
      stack: 'HTMl, CSS, JavaScript',
      thumbnail: 'sangeet-music-desktop-ui.png',
    },
    {
      title: 'EngDing',
      description: 'E-learning landing page design using Bootstrap 5',
      code: 'https://github.com/vikrammahto/engding',
      live: 'https://vikrammahto.github.io/engding/',
      stack: 'HTML, Bootstrap 5',
      thumbnail: 'engding.png',
    },
  ];
  return (
    <div
      id="projects"
      className="mx-auto flex w-full max-w-6xl flex-col items-start space-y-5 px-10 md:space-y-7 md:px-5"
    >
      <h1 className="border-b border-lime-400 bg-lime-400/10 px-4 py-1 text-xl">
        Projects
      </h1>
      <div className="mt-7 grid gap-12 md:grid-cols-3">
        {works.map((work, index) => (
          <div
            key={index}
            className="group space-y-5 rounded-2xl hover:border-zinc-200 lg:gap-x-0 lg:gap-y-5"
          >
            <Image
              alt="blog"
              loading="lazy"
              width="400"
              height="400"
              className="h-auto w-full rounded-2xl object-cover"
              src={`/projects/${work.thumbnail}`}
            />
            <div className="flex flex-col items-start space-y-3">
              <h2 className="text-xl font-semibold">{work.title}</h2>
              <p>{work.description}</p>
              <div className="flex w-full flex-row items-center gap-4">
                <a
                  href={work.live}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-lime-400/10 bg-lime-400/10 px-8 py-2 text-lime-400 transition duration-300 hover:cursor-pointer hover:bg-lime-400/20 hover:text-lime-400"
                >
                  Live
                </a>
                <a
                  href={work.code}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-lime-400/10 bg-lime-400/10 px-8 py-2 text-lime-400 transition duration-300 hover:cursor-pointer hover:bg-lime-400/20 hover:text-lime-400"
                >
                  Source
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
