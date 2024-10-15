import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

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
        <nav className="flex justify-center space-x-4 bg-gray-100 p-4">
          <Link href="/" className="text-gray-700 hover:text-blue-500">
            Customize CV
          </Link>
          <Link href="/update-cv" className="text-gray-700 hover:text-blue-500">
            Update Master CV
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
