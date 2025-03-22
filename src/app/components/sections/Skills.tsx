'use client';

import { SKILLS } from '@/app/lib/constants';

export default function Skills() {
  return (
    <section id="skills" className="py-32 bg-gradient-to-b from-white/80 via-sage/10 to-white/80">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-20 sm:mb-32 md:mb-40">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {SKILLS.map((category, index) => (
            <div key={index} className="glass-effect p-8">
              <h3 className="font-sao-torpes text-3xl mb-6 text-gradient">{category.title}</h3>
              <ul className="space-y-4 text-lg text-text/90">
                {category.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 