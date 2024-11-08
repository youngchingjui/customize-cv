import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import { Sidebar, SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { FileEdit, FilePlus, FileText } from "lucide-react";
import PageTitle from "@/components/PageTitle";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Customize CV",
  description: "Customize your CV with AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarProvider>
          <Sidebar variant="inset" collapsible="offcanvas" className="p-4">
            <h1 className="text-2xl font-bold mb-4">CV Manager</h1>
            <Link href="/" className="flex items-center mb-4">
              <FileEdit className="mr-2 h-4 w-4" />
              Customize CV
            </Link>
            <Link href="/update-cv" className="flex items-center mb-4">
              <FilePlus className="mr-2 h-4 w-4" />
              Update Master CV
            </Link>
            <Link href="/cover-letters" className="flex items-center mb-4">
              <FileText className="mr-2 h-4 w-4" />
              Cover Letters
            </Link>
          </Sidebar>
          <div className="flex-1 flex flex-col p-6">
            <div className="flex items-center mb-4">
              <SidebarTrigger />
              <PageTitle/>
            </div>
            <SidebarInset>
            {children}
            </SidebarInset>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
