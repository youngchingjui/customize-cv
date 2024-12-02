"use client";

import { Button } from "@/components/ui/button";

import html2canvas from "html2canvas";

const DownloadNewsletterButton = ({
  postRef,
}: {
  postRef: React.RefObject<HTMLDivElement>;
}) => {
  const capturePost = async () => {
    if (!postRef.current) return;
    const canvas = await html2canvas(postRef.current);
    const image = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = image;
    a.download = "newsletter.png";
    a.click();
  };
  return <Button onClick={capturePost}>Download Newsletter</Button>;
};

export default DownloadNewsletterButton;
