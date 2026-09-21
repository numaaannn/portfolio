"use client";

import type { CSSProperties } from "react";

export interface MovingCardItem {
  quote: string;
  name: string;
  title: string;
}

interface InfiniteMovingCardsProps {
  items: MovingCardItem[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

const speeds = { fast: "24s", normal: "34s", slow: "46s" };

export function InfiniteMovingCards({ items, direction = "left", speed = "normal", pauseOnHover = true, className = "" }: InfiniteMovingCardsProps) {
  const style = { "--moving-duration": speeds[speed], "--moving-direction": direction === "left" ? "normal" : "reverse" } as CSSProperties;
  return <div className={`moving-cards-window ${pauseOnHover ? "pause-on-hover" : ""} ${className}`}><div className="moving-cards-track" style={style}>{[...items, ...items].map((item, index) => <article className="moving-card" key={`${item.name}-${index}`}><span className="moving-card-mark">✦</span><p>{item.quote}</p><strong>{item.name}</strong><small>{item.title}</small></article>)}</div></div>;
}
