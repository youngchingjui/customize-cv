"use client";
import { usePathname } from "next/navigation";

const PageTitle = () => {
  const pathname = usePathname();
  const routeTitleMap: { [key: string]: string } = {
    "/": "Customize CV",
    "/update-cv": "Update Master CV",
    "/cover-letters": "Cover Letters",
    "/posts": "Posts",
  };

  if (!pathname) {
    return null;
  }

  // Extract the first path segment
  const firstPathSegment = `/${pathname.split("/")[1]}`;
  const title = routeTitleMap[firstPathSegment] || "CV Manager";

  return <h2 className="text-xl font-bold ml-4">{title}</h2>;
};

export default PageTitle;
