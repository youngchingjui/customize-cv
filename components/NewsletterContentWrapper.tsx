"use client";

import React, { useRef } from "react";
import ReactMarkdown from "react-markdown";
import DownloadNewsletterButton from "@/components/DownloadNewsletterButton";

const NewsletterContentWrapper = ({
  markdownContent,
}: {
  markdownContent: string;
}) => {
  const postRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <DownloadNewsletterButton postRef={postRef} />
      <main ref={postRef}>
        <ReactMarkdown
          className="mb-4"
          components={{
            p: ({ node, ...props }) => <p className="my-4" {...props} />,
          }}
        >
          {markdownContent}
        </ReactMarkdown>
      </main>
    </>
  );
};

export default NewsletterContentWrapper;
