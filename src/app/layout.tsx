import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Pillow Connect",
  description: "Connecting global talent to the world's best Employers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/pillow.svg" sizes="any" />
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
        <Analytics/>
        <SpeedInsights/>
        <Toaster />
      </body>
    </html>
  );
}
