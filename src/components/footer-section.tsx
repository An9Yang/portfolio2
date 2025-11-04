import React from 'react';
import { usePinnedTitle } from '@/hooks/usePinnedTitle';
import { SiteFooter } from '@/components/site-footer';
import { cn } from '@/lib/utils';

type FooterLink = {
  label: string;
  href?: string;
};

interface FooterSectionProps {
  className?: string;
  navLinks?: FooterLink[];
}

export function FooterSection({ className, navLinks }: FooterSectionProps) {
  const contactPinned = usePinnedTitle(10);

  return (
    <footer className={cn('relative bg-paper-2', className)}>
      <div className="section-wrap section-pad">
        <div className="flex items-center gap-10 text-sm text-black/70 mb-6">
          <a href="#" aria-label="Instagram">
            Instagram
          </a>
          <a href="#" aria-label="Twitter / X">
            X (Twitter)
          </a>
          <a href="#" aria-label="LinkedIn">
            LinkedIn
          </a>
          <a href="#" aria-label="Dribbble">
            Dribbble
          </a>
        </div>
        <div className="grid grid-cols-12 gap-x-10 lg:gap-x-14">
          <div ref={contactPinned.containerRef} className="sticky-col">
            <div ref={contactPinned.titleRef} style={contactPinned.style} className="eyebrow">
              I GET IN TOUCH
            </div>
            <div className="mt-10 space-y-6 text-sm text-black">
              <div>
                <div className="mb-1">+001 313 759 968 345</div>
                <div className="text-black/70">martinrobart@gmail.com</div>
              </div>
              <div className="text-black/70 leading-relaxed">
                12273 Dream Avenue,
                <br />
                New York, United State
              </div>
            </div>
          </div>

          <div className="content-col">
            <div className="text-[clamp(2.8rem,8.5vw,8rem)] font-black leading-[0.95] tracking-tight text-black">
              <div>Let’s Work</div>
              <div>Together</div>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <button className="btn btn-primary">Contact Now →</button>
              <button className="btn btn-outline">Schedule a call →</button>
            </div>
          </div>
        </div>

        <SiteFooter className="mt-16 pt-6" navLinks={navLinks} />
      </div>
    </footer>
  );
}
