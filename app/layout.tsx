import type { Metadata, Viewport } from "next";
import "./globals.css";
import { PageFrame } from "@/components/PageFrame";

export const viewport: Viewport = {
  themeColor: "#E91D2A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Raunak Singh — UX Researcher & Product Builder",
  description:
    "Portfolio of Raunak Singh. Computer Science & Design undergraduate, UX researcher, and product builder. Currently shaping digital experiences at ITC Limited · Technology Intern, Bengaluru.",
  authors: [{ name: "Raunak Singh", url: "https://raunaksingh.dev" }],
  keywords: [
    "Raunak Singh",
    "UX Researcher",
    "Product Designer",
    "Frontend Engineer",
    "ITC Limited",
    "Computer Science & Design",
    "Bengaluru",
    "Design Systems",
    "Ergonomic UX",
  ],
  openGraph: {
    title: "Raunak Singh — UX Researcher & Product Builder",
    description:
      "I design, research, and build digital experiences that make complex things feel simple. Currently shaping digital experiences at ITC Limited · Technology Intern.",
    url: "https://raunaksingh.dev",
    siteName: "Raunak Singh Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raunak Singh — UX Researcher & Product Builder",
    description:
      "I design, research, and build digital experiences that make complex things feel simple. Currently shaping digital experiences at ITC Limited.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-[#E5E5E5] text-black antialiased selection:bg-[#E91D2A] selection:text-white">
        <PageFrame>{children}</PageFrame>
      </body>
    </html>
  );
}

