"use client";

import type { HTMLAttributes, ReactNode } from "react";

interface AuroraBackgroundProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export function AuroraBackground({ children, className = "", showRadialGradient = true, ...props }: AuroraBackgroundProps) {
  return (
    <div className={`aurora-background ${showRadialGradient ? "aurora-with-radial" : ""} ${className}`} {...props}>
      <div className="aurora-gradient" aria-hidden="true" />
      {showRadialGradient && <div className="aurora-readability" aria-hidden="true" />}
      <div className="aurora-content">{children}</div>
    </div>
  );
}
