"use client";

import { useEffect, useState } from "react";

interface TextFlippingBoardProps {
  text: string;
  duration?: number;
  className?: string;
}

export function TextFlippingBoard({ text, duration = 1.2, className = "" }: TextFlippingBoardProps) {
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setCycle((value) => value + 1), Math.max(duration * 1000 + 1800, 3000));
    return () => window.clearInterval(timer);
  }, [duration]);

  const rows = text.toUpperCase().split("\n");
  const maxLength = Math.max(...rows.map((row) => row.length));

  return (
    <div className={`flipping-board ${className}`} aria-label={text.replaceAll("\n", ", ")}>
      {rows.map((row, rowIndex) => (
        <div className="flipping-board-row" key={`${rowIndex}-${cycle}`}>
          {Array.from({ length: maxLength }, (_, charIndex) => {
            const character = row[charIndex] ?? " ";
            return (
              <span
                className={`flipping-tile ${character === " " ? "is-space" : ""}`}
                key={`${rowIndex}-${charIndex}-${cycle}`}
                style={{ animationDuration: `${duration}s`, animationDelay: `${(rowIndex * maxLength + charIndex) * 0.035}s` }}
              >
                <span>{character}</span>
              </span>
            );
          })}
        </div>
      ))}
    </div>
  );
}
