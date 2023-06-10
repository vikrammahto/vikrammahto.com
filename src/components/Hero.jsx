import React from 'react';

const Hero = () => {
  return (
    <div>
      <div className="mt-20 flex flex-col items-start space-y-5 md:mt-32 md:space-y-7 md:px-5 lg:mt-32">
        <h1 className="text-4xl font-semibold">
          Hey, I'm Vikram. <br />{' '}
        </h1>
        <h2 className="text-3xl">
          I build websites with a focus on responsive design and accessibility.
        </h2>
        <p className="text-xl">
          I'm a Frontend Developer, Web & Graphics Designer, and open-source
          contributor. <br /> Find me on{' '}
          <a
            href="https://github.com/vikrammahto"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            GitHub
          </a>
          ,{' '}
          <a
            href="https://www.linkedin.com/in/vikrammahto/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            LinkedIn
          </a>
          ,{' '}
          <a
            href="https://www.behance.net/vikrammahto"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Behance,
          </a>{' '}
          and{' '}
          <a
            href="https://twitter.com/here_vikram"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Twitter
          </a>
          .
        </p>
        <div className="flex w-full items-center md:flex-row md:justify-start md:space-x-5 md:space-y-0">
          <a
            href="https://www.linkedin.com/in/vikrammahto/"
            className="border border-zinc-900 bg-zinc-900 text-white px-6 py-2 rounded-full"
          >
            Hire Me
          </a>
          <a
            href="#projects"
            className="border border-gray-200 text-zinc-900 px-6 py-2 rounded-full ms-3"
          >
            Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
