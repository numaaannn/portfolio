"use client";

import { useEffect, useRef } from "react";

interface CanvasTextProps {
  text: string;
  className?: string;
  backgroundClassName?: string;
  colors?: string[];
  animationDuration?: number;
  lineWidth?: number;
  lineGap?: number;
  curveIntensity?: number;
}

export function CanvasText({
  text,
  className = "",
  backgroundClassName = "",
  colors = ["#f1f3f5", "#c7cdd4", "#8f98a3", "#727b86", "#ffffff"],
  animationDuration = 5,
  lineWidth = 2,
  lineGap = 12,
  curveIntensity = 60,
}: CanvasTextProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    let frame = 0;
    let animationFrame = 0;
    let width = 0;
    let height = 0;

    const draw = (time: number) => {
      const pixelRatio = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      context.clearRect(0, 0, width, height);

      const fontSize = Math.min(
        height * 0.72,
        width / Math.max(text.length * 0.72, 1),
        96,
      );
      context.font = `800 ${fontSize}px Arial, sans-serif`;
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.fillStyle = "#e6eef8";
      context.fillText(text, width / 2, height / 2);
      context.globalCompositeOperation = "source-atop";

      const phase = time / (animationDuration * 1000) * Math.PI * 2;
      for (let y = -lineGap; y < height + lineGap; y += lineGap) {
        const color = colors[Math.floor((y / lineGap + frame) % colors.length)];
        context.beginPath();
        context.strokeStyle = color;
        context.lineWidth = lineWidth;
        context.moveTo(-20, y);
        context.bezierCurveTo(width * .28, y + Math.sin(phase + y * .02) * curveIntensity, width * .72, y - Math.cos(phase + y * .018) * curveIntensity, width + 20, y);
        context.stroke();
      }
      context.globalCompositeOperation = "source-over";
      frame += .012;
      animationFrame = requestAnimationFrame(draw);
    };

    animationFrame = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animationFrame);
  }, [animationDuration, colors, curveIntensity, lineGap, lineWidth, text]);

  return <span className={`canvas-text-wrap ${backgroundClassName} ${className}`}><canvas ref={canvasRef} aria-hidden="true" /><span className="canvas-text-label">{text}</span></span>;
}
