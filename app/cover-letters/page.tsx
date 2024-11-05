import React from 'react';
import ReactMarkdown from 'react-markdown';

async function fetchMarkdownContent() {
  const response = await fetch('https://api.github.com/repos/youngchingjui/resume/contents/Cover%20Letters/Pave.md', {
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch markdown content');
  }

  const data = await response.json();
  const content = Buffer.from(data.content, 'base64').toString('utf-8');
  return content;
}

const CoverLetterPage = async () => {
  const markdownContent = await fetchMarkdownContent();

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
