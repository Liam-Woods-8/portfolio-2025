import type { Metadata } from "next";
import "../styles/globals.css";
import Navigation from "../components/Navigation";

export const metadata: Metadata = {
  title: "Liam Woods - Full Stack Developer",
  description: "Portfolio website showcasing my work as a Full Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
