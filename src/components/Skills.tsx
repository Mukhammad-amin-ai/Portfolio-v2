"use client";

import GlitchText from "./animations/GlitchText";
import AnimatedLink from "./AnimatedLink";

const skills = {
  "Core Engineering": [
    "JavaScript (ES6+)",
    "TypeScript",
    "Asynchronous Programming",
    "Functional Programming",
    "OOP & Design Patterns",
    "Clean Architecture",
    "SOLID Principles",
    "System Design",
  ],

  "Frontend Engineering": [
    "React",
    "Next.js (SSR / SSG / ISR)",
    "Vue",
    "Nuxt",
    "State Management",
    "Performance Optimization",
    "Accessibility",
    "Animation (GSAP / Framer Motion)",
  ],

  "Backend & Platform": [
    "Node.js",
    "Express",
    "NestJS",
    "REST API Design",
    "Authentication (JWT / Sessions / OAuth)",
    "Realtime Systems (WebSockets)",
    "Background Jobs & Queues",
    "API Integrations",
  ],
};

export default function Skills() {
  return (
    <section className="self-start md:px-6 py-5 c370:px-3 px-0 bg-(--color-secondary-400) text-(--color-accent-400) w-full">
      <div className="max-w-6xl mx-auto">
        <h2 className="md:text-(length:--text-h1-alt) text-(length:--text-menu) font-bold mb-8 text-center">
          Skills
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-3 c343:gap-1 gap-0 md:gap-5 md:p-5 c370:p-1 p-0">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="c370:p-2 p-0 rounded-2xl shadow-md hover:shadow-lg transition self-start"
            >
              <h3 className="hidden md:flex text-xl font-semibold mb-4">
                {category}
              </h3>
              <ul className="space-y-3 md:text-base">
                {items.map((skill) => (
                  <div
                    key={skill}
                    className="flex relative items-start gap-2 text-(--color-secondary-50) c343:text-[length:var(--text-base)] text-(length:--text-skill)"
                  >
                    <AnimatedLink>
                      <GlitchText text={skill} delay={400} />
                    </AnimatedLink>
                  </div>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
