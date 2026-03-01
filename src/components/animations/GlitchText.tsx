"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface GlitchTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}

export default function GlitchText({
  text,
  className = "",
  delay = 0,
  duration = 1000,
}: GlitchTextProps) {
  const textRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLHeadingElement>(null);
  const { ref: inViewRef, inView } = useInView({ triggerOnce: true });
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!inView || isComplete || !textRef.current) return;

    const element = textRef.current;
    let currentIndex = 0;
    const intervalDuration = duration / (3 * text.length);

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        element.innerText = text
          .split("")
          .map((char, index) => {
            if (index < currentIndex) return text[index];
            return "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (currentIndex >= text.length) {
          clearInterval(interval);
          setIsComplete(true);
        }
        currentIndex += 1 / 3;
      }, intervalDuration);

      return () => clearInterval(interval);
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [inView, delay, duration, text, isComplete]);

  return (
    <h1
      ref={(el) => {
        textRef.current = el;
        containerRef.current = el;
        inViewRef(el);
      }}
      className={`font-mono cursor-default ${className}`}
    >
      {text}
    </h1>
  );
}
