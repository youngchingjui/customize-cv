import React from 'react';
import Link from 'next/link';

async function fetchMarkdownFiles() {
  const response = await fetch('https://api.github.com/repos/youngchingjui/resume/contents/Cover%20Letters', {
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch markdown files');
  }

  const data = await response.json();
  return data.filter((file: any) => file.name.endsWith('.md'));
}

const CoverLetterPage = async () => {
  const markdownFiles = await fetchMarkdownFiles();

  return (
    <div className="min-h-screen bg-white text-gray-800 p-8 max-w-[21cm] mx-auto">
      <header className="mb-8 flex justify-between items-baseline border-b-2 border-blue-900 pb-2.5">
        <h1 className="text-3xl font-bold text-gray-800">Ching Jui Young</h1>
      </header>
      <main className="mt-4 text-sm leading-7">
        <ul>
          {markdownFiles.map((file: any) => (
            <li key={file.name} className="mb-2">
              <Link href={`/cover-letters/${file.name.replace('.md', '')}`}>
                {file.name.replace('.md', '')}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default CoverLetterPage;
