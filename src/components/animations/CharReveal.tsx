"use client";

import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";

interface CharRevealProps {
  text: string;
  className?: string;
  delayPerChar?: number;
  once?: boolean;
  delay?: number;
}

export default function CharReveal({
  text,
  className = "",
  delayPerChar = 0.05,
  once = true,
  delay = 0,
}: CharRevealProps) {
  const { ref, inView } = useInView({
    triggerOnce: once,
    threshold: 0.1,
  });

  const chars = text.split("");

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.span
        className={className}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
      >
        {chars.map((char, index) => (
          <motion.span
            key={index}
            className="inline-block"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              hidden: { y: "100%", opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  ease: "easeOut",
                  duration: 0.4,
                  delay: delay + index * delayPerChar,
                },
              },
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.span>
    </div>
  );
}
