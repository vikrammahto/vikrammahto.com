export const MDXComponents = {
  h1: (props) => <h1 className="mb-6 text-4xl font-bold" {...props} />,
  h2: (props) => <h2 className="mb-4 text-3xl font-bold" {...props} />,
  h3: (props) => <h3 className="mb-3 text-2xl font-bold" {...props} />,
  p: (props) => <p className="mb-4" {...props} />,
  a: (props) => <a className="hover:text-lime-400 underline" {...props} />,
  ul: (props) => <ul className="mb-4 list-disc pl-6" {...props} />,
  ol: (props) => <ol className="mb-4 list-decimal pl-6" {...props} />,
  li: (props) => <li className="mb-2" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="my-4 border-l-4 border-gray-300 pl-4 italic"
      {...props}
    />
  ),
  code: (props) => (
    <code className="rounded bg-gray-100 px-1 py-0.5" {...props} />
  ),
  pre: (props) => (
    <pre className="mb-4 overflow-x-auto rounded bg-gray-100 p-4" {...props} />
  ),
};
