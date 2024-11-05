import React from 'react';
import ReactMarkdown from 'react-markdown';

const CoverLetterPage = ({ markdownContent }: { markdownContent: string }) => {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-8 max-w-[21cm] mx-auto">
      <header className="mb-8 flex justify-between items-baseline border-b-2 border-blue-900 pb-2.5">
        <h1 className="text-3xl font-bold text-gray-800">Ching Jui Young</h1>
      </header>
      <main className="mt-4 text-sm leading-7">
        <ReactMarkdown className="mb-4" children={markdownContent} />
      </main>
    </div>
  );
};

export default CoverLetterPage;
