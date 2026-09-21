"use client";

import type { ReactNode } from "react";

export interface FloatingDockItem {
  title: string;
  icon: ReactNode;
  href: string;
  download?: boolean;
}

interface FloatingDockProps {
  items: FloatingDockItem[];
  className?: string;
}

export function FloatingDock({ items, className = "" }: FloatingDockProps) {
  return (
    <nav className={`floating-dock ${className}`} aria-label="Portfolio navigation">
      {items.map((item) => (
        <a className="floating-dock-item" href={item.href} title={item.title} aria-label={item.title} download={item.download || undefined} key={item.title}>
          <span className="floating-dock-icon">{item.icon}</span>
          <span className="floating-dock-tooltip">{item.title}</span>
        </a>
      ))}
    </nav>
  );
}
