import React from "react";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarProvider,
} from "../../components/ui/sidebar";

async function fetchCoverLetterList() {
  const response = await fetch(
    "https://api.github.com/repos/youngchingjui/resume/contents/Cover%20Letters",
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch cover letter list");
  }

  const data = await response.json();
  return data
    .filter((file: any) => file.name.endsWith(".md"))
    .map((file: any) => file.name.replace(".md", ""));
}

const CoverLettersLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const coverLetterList = await fetchCoverLetterList();

  return (
    <SidebarProvider>
      <Sidebar collapsible="none" className="p-4">
        <SidebarContent>
          <h2 className="text-xl font-bold mb-4">Cover Letters</h2>
          <ul>
            {coverLetterList.map((slug: string) => (
              <li key={slug} className="mb-2">
                <Link href={`/cover-letters/${slug}`}>{slug}</Link>
              </li>
            ))}
          </ul>
        </SidebarContent>
      </Sidebar>
      <main className="flex-1">{children}</main>
    </SidebarProvider>
  );
};

export default CoverLettersLayout;
