import React from 'react';
import { cn } from '@/lib/utils';

type SiteFooterLink = {
  label: string;
  href?: string;
};

interface SiteFooterProps {
  className?: string;
  navLinks?: SiteFooterLink[];
}

const defaultLinks: SiteFooterLink[] = [
  { label: 'Home' },
  { label: 'Projects' },
  { label: 'Services' },
  { label: 'About us' },
  { label: 'Blog' },
];

export function SiteFooter({ className, navLinks = defaultLinks }: SiteFooterProps) {
  return (
    <div
      className={cn(
        'border-t border-black/10 text-xs text-black/70 md:text-sm flex flex-col gap-6 md:flex-row md:items-center md:justify-between',
        className,
      )}
    >
      <div>
        Designed by <span className="underline">Mavenflow</span> • <span className="underline">License</span>
      </div>
      <nav className="hidden md:flex items-center gap-6">
        {navLinks.map((link) => {
          const linkProps = link.href ? { href: link.href } : {};
          return (
            <a key={link.label} {...linkProps}>
              {link.label}
            </a>
          );
        })}
      </nav>
      <div>©Martin.R, All rights reserved</div>
    </div>
  );
}
