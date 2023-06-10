import React from 'react';
import sangeet from '../assets/images/sangeet-music-desktop-ui.png';
import engding from '../assets/images/engding-thumb.png';

const Projects = () => {
  const works = [
    {
      title: 'Sangeet - Music UI',
      description: 'Music app desktop UI made using HTML, Vanilla CSS and JS',
      code: 'https://github.com/vikrammahto/sangeet',
      live: 'https://vikrammahto.github.io/sangeet/',
      stack: 'HTMl, CSS, JavaScript',
      thumbnail: sangeet,
    },
    {
      title: 'EndDing',
      description: 'E-learning landing page design using Bootstrap 5',
      code: 'https://github.com/vikrammahto/engding',
      live: 'https://vikrammahto.github.io/engding/',
      stack: 'HTML, Bootstrap 5',
      thumbnail: engding,
    },
  ];
  return (
    <div
      id="projects"
      className="mt-20 flex flex-col items-start space-y-5 md:mt-32 md:space-y-7 md:px-5 lg:mt-32"
    >
      <h1 className="text-3xl font-bold">Projects</h1>
      <div className="mt-12 grid gap-12 md:grid-cols-3">
        {works.map((work, index) => (
          <div
            key={index}
            className="group space-y-5 p-4 lg:gap-x-0 lg:gap-y-5 border border-zinc-100 hover:border-zinc-200 rounded-2xl"
          >
            <img
              alt="blog"
              loading="lazy"
              width="400"
              height="400"
              className="h-auto w-full rounded-2xl object-cover"
              src={work.thumbnail}
            />
            <div className="flex flex-col items-start space-y-3">
              <h2 className="font-semibold text-xl">{work.title}</h2>
              <p>{work.description}</p>
              <div className="flex w-full flex-row items-center">
                <a
                  href={work.live}
                  target="_blank"
                  rel="noreferrer"
                  className="w-auto rounded-lg border px-3 py-1 hover:bg-zinc-900 hover:text-white transition ease-in-out delay-150 duration-500"
                >
                  Live{' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-devices inline-block w-4 h-4"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M13 9a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1v-10z"></path>
                    <path d="M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h9"></path>
                    <path d="M16 9h2"></path>
                  </svg>
                </a>
                <a
                  href={work.code}
                  target="_blank"
                  rel="noreferrer"
                  className="w-auto rounded-lg border px-3 py-1 ms-3 hover:bg-zinc-900 hover:text-white transition ease-in-out delay-150 duration-500"
                >
                  Source Code{' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-code inline-block w-4 h-4"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M7 8l-4 4l4 4"></path>
                    <path d="M17 8l4 4l-4 4"></path>
                    <path d="M14 4l-4 16"></path>
                  </svg>
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
