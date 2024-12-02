import React from "react";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarProvider,
} from "../../components/ui/sidebar";

async function fetchPostList() {
  const response = await fetch(
    "https://api.github.com/repos/youngchingjui/newsletter/contents/newsletters",
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    }
  );

  if (!response.ok) {
    console.error("Failed to fetch post list", response);
    throw new Error("Failed to fetch post list");
  }

  const data = await response.json();
  return data
    .filter((file: any) => file.name.endsWith(".md"))
    .map((file: any) => file.name.replace(".md", ""));
}

const PostsLayout = async ({ children }: { children: React.ReactNode }) => {
  const postList = await fetchPostList();

  return (
    <SidebarProvider>
      <Sidebar collapsible="none" className="p-4">
        <SidebarContent>
          <ul>
            {postList.map((slug: string) => (
              <li key={slug} className="mb-2">
                <Link href={`/posts/${slug}`}>{slug}</Link>
              </li>
            ))}
          </ul>
        </SidebarContent>
      </Sidebar>
      <div className="flex-1">{children}</div>
    </SidebarProvider>
  );
};

export default PostsLayout;
