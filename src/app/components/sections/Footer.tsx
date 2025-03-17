'use client';

import { SOCIAL_LINKS } from '@/app/lib/constants';
import SocialIcon from '../ui/SocialIcon';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-purple/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-lg text-text/90">© {new Date().getFullYear()} Liam Woods</p>
          <div className="flex items-center gap-6">
            {SOCIAL_LINKS.map((link) => (
              <SocialIcon 
                key={link.type}
                type={link.type}
                href={link.href}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
} 