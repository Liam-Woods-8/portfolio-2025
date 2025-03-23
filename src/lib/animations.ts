// Types
interface ScrollRevealOptions {
  threshold: number;
  rootMargin: string;
}

interface ProjectCardConfig {
  glowRadius: string;
}

// Scroll reveal animation
export function initScrollReveal(options: ScrollRevealOptions) {
  const observerOptions = {
    root: null,
    rootMargin: options.rootMargin,
    threshold: options.threshold
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-up').forEach((element) => {
    observer.observe(element);
  });
}

// Mouse tracking for project cards
export function initProjectCardEffects(config: ProjectCardConfig) {
  const cards = document.querySelectorAll<HTMLElement>('.project-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
} 