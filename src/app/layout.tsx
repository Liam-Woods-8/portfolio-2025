import './globals.css'
import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import AnimationProvider from './components/AnimationProvider'

export const metadata: Metadata = {
  title: 'Liam Woods | Portfolio',
  description: 'Full Stack Developer crafting exceptional digital experiences',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Navigation />
        <AnimationProvider>
          <main className="min-h-screen">
            {children}
          </main>
        </AnimationProvider>
      </body>
    </html>
  );
}
