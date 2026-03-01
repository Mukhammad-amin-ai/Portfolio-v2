"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  delayperwords?: number;
  once?: boolean;
}

export default function TextReveal({
  text,
  className = "",
  delay = 0,
  delayperwords = 0,
  once = true,
}: TextRevealProps) {
  const ref = useRef(null);
  const { ref: inViewRef, inView } = useInView({ triggerOnce: once });

  const words = text.split(" ");

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.span
        ref={inViewRef}
        className={className}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: {},
        }}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            className="inline-block pr-2"
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
                  delay: delay + index * delayperwords,
                },
              },
            }}
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </div>
  );
}
