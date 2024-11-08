import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import { Sidebar, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

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
          <Sidebar className="p-4">
            <Link href="/" className="block mb-2">
              Customize CV
            </Link>
            <Link href="/update-cv" className="block mb-2">
              Update Master CV
            </Link>
            <Link href="/cover-letters" className="block mb-2">
              Cover Letters
            </Link>
          </Sidebar>
          <div className="flex-1 flex flex-col p-6">
            <div className="flex items-center mb-4">
              <SidebarTrigger />
              <h1 className="text-2xl font-bold ml-4">CV Manager</h1>
            </div>
            {children}
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
