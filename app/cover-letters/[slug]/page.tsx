import React from 'react';
import ReactMarkdown from 'react-markdown';

async function fetchMarkdownContent(slug: string) {
  const response = await fetch(`https://api.github.com/repos/youngchingjui/resume/contents/Cover%20Letters/${slug}.md`, {
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

const CoverLetterDetail = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  if (!slug) return <div>Loading...</div>;

  const markdownContent = await fetchMarkdownContent(slug as string);

  return (
    <div className=" bg-white text-gray-800 p-8 ">
      <header className="mb-8 flex justify-between items-baseline border-b-2 border-blue-900 pb-2.5">
        <h1 className="text-3xl font-bold text-gray-800">{slug}</h1>
      </header>
      <main className="mt-4 text-sm leading-7">
        <ReactMarkdown className="mb-4" children={markdownContent} />
      </main>
    </div>
  );
};

export default CoverLetterDetail; 