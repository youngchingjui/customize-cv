import NewsletterContentWrapper from "@/components/NewsletterContentWrapper";

export const revalidate = 10;

async function fetchMarkdownContent(slug: string) {
  const decodedSlug = decodeURIComponent(slug);
  const response = await fetch(
    `https://api.github.com/repos/youngchingjui/newsletter/contents/newsletters/${decodedSlug}.md`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch markdown content");
  }

  const data = await response.json();
  const content = Buffer.from(data.content, "base64").toString("utf-8");
  return content;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const decodedSlug = decodeURIComponent(slug);
  const title = `Ching Jui Young - Post - ${decodedSlug}`;
  return { title };
}

const PostDetail = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  if (!slug) return <div>Loading...</div>;

  const markdownContent = await fetchMarkdownContent(slug as string);

  return (
    <>
      <NewsletterContentWrapper markdownContent={markdownContent} />
    </>
  );
};

export default PostDetail;
