import './globals.css'
import type { Metadata } from 'next'
import Navigation from '@/components/layout/Navigation'
import AnimationProvider from '@/components/layout/AnimationProvider'

export const metadata: Metadata = {
  title: 'Liam Woods | Full Stack Developer',
  description: 'Full Stack Developer specializing in React, UI/UX design, and modern web development. View my portfolio of projects and get in touch.',
  keywords: 'Liam Woods, Full Stack Developer, React Developer, Web Developer, UI/UX Designer, Software Engineer',
  authors: [{ name: 'Liam Woods' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio-2025-ten-phi.vercel.app',
    siteName: 'Liam Woods Portfolio',
    title: 'Liam Woods | Full Stack Developer',
    description: 'Full Stack Developer specializing in React, UI/UX design, and modern web development.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Liam Woods Portfolio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Liam Woods | Full Stack Developer',
    description: 'Full Stack Developer specializing in React, UI/UX design, and modern web development.',
    images: ['/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // You'll need to add this
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Liam Woods',
              url: 'https://portfolio-2025-ten-phi.vercel.app',
              sameAs: [
                'https://github.com/Liam-Woods-8',
                // Add your LinkedIn URL here
              ],
              jobTitle: 'Full Stack Developer',
              description: 'Full Stack Developer specializing in React, UI/UX design, and modern web development.',
              knowsAbout: [
                'React',
                'JavaScript',
                'TypeScript',
                'Next.js',
                'UI/UX Design',
                'Full Stack Development'
              ]
            })
          }}
        />
      </head>
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
