import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { Providers } from "@/providers/Providers";
import { Sidebar } from "@/components";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Twitter Clone",
  description: "Twitter Clone",
  viewport: "width=device-width, initial-scale=1",
  authors: {
    name: "Guido Olguin",
  },
  openGraph: {
    type: "website",
    title: "Twitter Clone",
    description: "Twitter Clone",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-y-scroll`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
