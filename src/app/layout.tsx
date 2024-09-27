import type { Metadata } from "next";
import Link from "next/link";

import localFont from "next/font/local";
import "@/styles/globals.css";

const geistSans = localFont({
  src: "../assets/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../assets/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased px-8`}
      >
        <header className="text-xl font-bold gap-2 flex pt-4 pb-6">
          <Link href="/">Live Academy Universe</Link>
        </header>
        {children}
      </body>
    </html>
  );
}
