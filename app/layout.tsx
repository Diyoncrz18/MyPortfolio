import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dion Kobi | Full Stack Developer",
  description: "Full Stack Developer passionate about creating modern web applications and delivering exceptional user experiences. Specialized in React, Next.js, Node.js, and more.",
  keywords: ["Full Stack Developer", "Web Developer", "React", "Next.js", "Portfolio", "Dion Kobi"],
  authors: [{ name: "Dion Kobi" }],
  openGraph: {
    title: "Dion Kobi | Full Stack Developer",
    description: "Full Stack Developer passionate about creating modern web applications",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-black text-white overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}

