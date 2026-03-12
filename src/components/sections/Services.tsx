"use client";

import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import CharReveal from "@/components/animations/CharReveal";
import TextReveal from "@/components/animations/TextReveal";
import MenuButton from "@/components/MenuButton";
import { ServiceItem } from "../ServiceItem";

gsap.registerPlugin(ScrollTrigger);

export const services = [
  {
    id: "01",
    style: "sticky border-t border-t-(--color-secondary-300) bg-(--color-secondary-400) mb-[21.5em] c324:mb-[23em] c343:mb-[23.5em] c358:mb-[25em] c360:mb-[23em] c370:mb-[21em] cs3:mb-[19em] c387:mb-[19.2em] cs5:mb-[18.2em] cs4:mb-[18em] sm:mb-[19em] md:mb-[19em] cs1:mb-[18.5em] lg:mb-[20.1em]",
    title: "Product Engineering",
    description:
      "End-to-end development of modern web applications with strong focus on architecture, scalability and clean system design.",
    points: [
      "Application architecture & system design",
      "Frontend + backend feature development",
      "API design, data modelling, integrations",
    ],
  },
  {
    id: "02",
    style: "sticky border-t border-t-(--color-secondary-300) bg-(--color-secondary-400) mb-[15.5em] c343:mb-[17.5em] c358:mb-[16.5em] c360:mb-[15em] c370:mb-[16em] cs3:mb-[13.1em] c387:mb-[13em] cs5:mb-[13em] cs4:mb-[13em] cs2:mb-[13.2em] sm:mb-[13em] md:mb-[13.5em] cs1:mb-[13em] lg:mb-[14em] top-[calc(20vh+7em)] cs2:top-[calc(20vh+7em)] sm:top-[calc(20vh+6em)] md:top-[calc(20vh+8em)] cs1:top-[calc(20vh+6em)] lg:top-[calc(20vh+6em)]",
    title: "Frontend Systems",
    description:
      "Engineering fast, responsive and accessible user interfaces that scale with product growth.",
    points: [
      "SSR / SPA / hybrid rendering strategies",
      "Component architecture & state management",
      "UX performance optimization & SEO readiness",
    ],
  },
  {
    id: "03",
    style: "sticky border-t border-t-(--color-secondary-300) bg-(--color-secondary-400) mb-[7.5em] cs1:mb-[7em] lg:mb-[8em] top:calc(20vh + 16em)",
    title: "Scalable Backend",
    description:
      "Design and development of reliable backend services, real-time features and background processing pipelines.",
    points: [
      "Authentication, authorization & security layers",
      "Realtime communication & async processing",
      "Deployment pipelines, monitoring & scaling",
    ],
  },
];

export default function Services() {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: "#Services",
      start: "top -20%",
      onEnter: () => setShowMenu(true),
      onLeaveBack: () => setShowMenu(false),
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <section id="Services">
      <MenuButton show={showMenu} />
      <div className="relative z-20 min-h-screen w-full overflow-x-clip">
        <section className="section-padding rounded-t-3xl bg-(--color-secondary-400) text-(--color-text-bg)">
          <div className="relative flex w-full flex-col gap-y-(--space-lg) md:gap-y-(--space-2xl)">
            <h1 className="cs2:text-[length:var(--text-h1)] section-heading col-span-6 max-w-[18ch] text-accent-400">
              <CharReveal text="What I Do /" delayPerChar={0.03} />
            </h1>

            <div className="flex grid-cols-12 gap-x-(--gap-fluid) md:grid">
              <div className="col-span-7 flex flex-col gap-x-(--space-xl) gap-y-(--space-2xs) sm:flex-row md:col-start-6">
                <span className="flex h-full font-medium uppercase text-nowrap text-(--color-secondary-75) text-[16px]">
                  (Services)
                </span>
                <div className="w-full max-w-[35ch] text-balance text-(length:--text-base-large) font-medium leading-base text-(--color-secondary-50)">
                  <TextReveal
                    delay={0.3}
                    delayperwords={0}
                    text="I build full-stack web applications from UI and API to server and deployment. React, Vue, Next.js, Nuxt, Node.js, Express, Nest, MongoDB, PostgreSQL. Fast, reliable, and user-focused."
                  />
                </div>
              </div>
            </div>

            {/* <div className="w-full pt-(--space-lg)">
              <div className="mt-12 gap-y-16 flex flex-col justify-between bg-(--color-secondary-400)">
               
                <div
                  className="sticky border-t border-t-(--color-secondary-300) bg-(--color-secondary-400) mb-[21.5em] c324:mb-[23em] c343:mb-[23.5em] c358:mb-[25em] c360:mb-[23em] c370:mb-[21em] cs3:mb-[19em] c387:mb-[19.2em] cs5:mb-[18.2em] cs4:mb-[18em] sm:mb-[19em] md:mb-[19em] cs1:mb-[18.5em] lg:mb-[20.1em]"
                  style={{ top: "20vh" }}
                >
                  <div className="flex grid-cols-12 items-center justify-start gap-x-(--space-xs) text-left text-(length:--text-heading-2) font-semibold text-(--color-accent-400) md:grid md:justify-between md:gap-x-(--gap-fluid)">
                    <span className="col-span-2">(01)</span>
                    <h3 className="col-span-8 col-start-6 py-(--space-md) 2xl:py-(--space-sm)">
                      Full-Stack Development
                    </h3>
                  </div>
                  <div className="grid-gap relative flex min-h-[30vh] flex-col place-items-start pt-(--space-3xs) md:grid md:min-h-[40vh] md:grid-cols-12">
                    <div className="col-span-7 col-start-6 flex w-full flex-col gap-y-(--space-sm) pt-(--space-sm) text-(length:--text-heading-4)">
                      <p className="max-w-[40ch] text-balance text-(length:--text-base) font-medium text-(--color-secondary-50)">
                        From frontend to backend and deployment — full
                        development cycle. Modern stack, scalable and
                        maintainable apps for real-world use.
                      </p>
                      <div className="flex flex-col divide-y divide-(--color-secondary-200)">
                        <span className="flex items-start gap-x-(--space-sm) py-(--space-3xs) font-bold text-(--color-accent-500) xl:gap-x-(--space-md) xl:py-(--space-2xs) text-(length:--text-heading-4)">
                          <span className="font-mono text-(length:--text-base) font-medium leading-[200%] text-(--color-secondary-75)">
                            01
                          </span>
                          React, Vue, Next.js, Nuxt, Node.js
                        </span>
                        <span className="flex items-start gap-x-(--space-sm) py-(--space-3xs) font-bold text-(--color-accent-500) xl:gap-x-(--space-md) xl:py-(--space-2xs)">
                          <span className="font-mono text-(length:--text-base) font-medium leading-[200%] text-(--color-secondary-75)">
                            02
                          </span>
                          Express, Nest, MongoDB, PostgreSQL, REST
                        </span>
                        <span className="flex items-start gap-x-(--space-sm) py-(--space-3xs) font-bold text-(--color-accent-500) xl:gap-x-(--space-md) xl:py-(--space-2xs)">
                          <span className="font-mono text-(length:--text-base) font-medium leading-[200%] text-(--color-secondary-75)">
                            03
                          </span>
                          Docker, Git, JWT, OAuth, WebSockets
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                
                <div className="sticky border-t border-t-(--color-secondary-300) bg-(--color-secondary-400) mb-[15.5em] c343:mb-[17.5em] c358:mb-[16.5em] c360:mb-[15em] c370:mb-[16em] cs3:mb-[13.1em] c387:mb-[13em] cs5:mb-[13em] cs4:mb-[13em] cs2:mb-[13.2em] sm:mb-[13em] md:mb-[13.5em] cs1:mb-[13em] lg:mb-[14em] top-[calc(20vh+7em)] cs2:top-[calc(20vh+7em)] sm:top-[calc(20vh+6em)] md:top-[calc(20vh+8em)] cs1:top-[calc(20vh+6em)] lg:top-[calc(20vh+6em)]">
                  <div className="flex grid-cols-12 items-center justify-start gap-x-(--space-xs) text-left text-(length:--text-heading-2) font-semibold text-(--color-accent-400) md:grid md:justify-between md:gap-x-(--gap-fluid)">
                    <span className="col-span-2">(02)</span>
                    <h3 className="col-span-8 col-start-6 py-(--space-md) 2xl:py-(--space-sm)">
                      UI/UX & Frontend
                    </h3>
                  </div>
                  <div className="grid-gap relative flex min-h-[30vh] flex-col place-items-start pt-(--space-3xs) md:grid md:min-h-[40vh] md:grid-cols-12">
                    <div className="col-span-7 col-start-6 flex w-full flex-col gap-y-(--space-sm) pt-(--space-sm) text-(length:--text-heading-4)">
                      <p className="max-w-[40ch] text-balance text-(length:--text-base) font-medium text-(--color-secondary-50)">
                        Clean, responsive interfaces with a focus on clarity and
                        accessibility. SSR, SEO, performance, and great UX
                        across devices.
                      </p>
                      <div className="flex flex-col divide-y divide-(--color-secondary-200)">
                        <span className="flex items-start gap-x-(--space-sm) py-(--space-3xs) font-bold text-(--color-accent-500) xl:gap-x-(--space-md) xl:py-(--space-2xs) text-(length:--text-heading-4)">
                          <span className="font-mono text-(length:--text-base) font-medium leading-[200%] text-(--color-secondary-75)">
                            01
                          </span>
                          Next.js, Nuxt, Tailwind, MUI, AntD
                        </span>
                        <span className="flex items-start gap-x-(--space-sm) py-(--space-3xs) font-bold text-(--color-accent-500) xl:gap-x-(--space-md) xl:py-(--space-2xs)">
                          <span className="font-mono text-(length:--text-base) font-medium leading-[200%] text-(--color-secondary-75)">
                            02
                          </span>
                          Figma to Code, UI/UX
                        </span>
                        <span className="flex items-start gap-x-(--space-sm) py-(--space-3xs) font-bold text-(--color-accent-500) xl:gap-x-(--space-md) xl:py-(--space-2xs)">
                          <span className="font-mono text-(length:--text-base) font-medium leading-[200%] text-(--color-secondary-75)">
                            03
                          </span>
                          HTML, CSS, TypeScript
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

               
                <div className="sticky border-t border-t-(--color-secondary-300) bg-(--color-secondary-400) mb-[7.5em] cs1:mb-[7em] lg:mb-[8em] top:calc(20vh + 16em)">
                  <div className="flex grid-cols-12 items-center justify-start gap-x-(--space-xs) text-left text-(length:--text-heading-2) font-semibold text-(--color-accent-400) md:grid md:justify-between md:gap-x-(--gap-fluid)">
                    <span className="col-span-2">(03)</span>
                    <h3 className="col-span-8 col-start-6 py-(--space-md) 2xl:py-(--space-sm)">
                      Security & DevOps
                    </h3>
                  </div>
                  <div className="grid-gap relative flex min-h-[30vh] flex-col place-items-start pt-(--space-3xs) md:grid md:min-h-[40vh] md:grid-cols-12">
                    <div className="col-span-7 col-start-6 flex w-full flex-col gap-y-(--space-sm) pt-(--space-sm) text-(length:--text-heading-4)">
                      <p className="max-w-[40ch] text-balance text-(length:--text-base) font-medium text-(--color-secondary-50)">
                        Security, anti-fraud, JWT, sessions. CI/CD, deployment
                        on Vercel/Netlify, cron jobs and background processes.
                        Clean architecture and scalability.
                      </p>
                      <div className="flex flex-col divide-y divide-(--color-secondary-200)">
                        <span className="flex items-start gap-x-(--space-sm) py-(--space-3xs) font-bold text-(--color-accent-500) xl:gap-x-(--space-md) xl:py-(--space-2xs) text-(length:--text-heading-4)">
                          <span className="font-mono text-(length:--text-base) font-medium leading-[200%] text-(--color-secondary-75)">
                            01
                          </span>
                          JWT, OAuth, Brevo, Telegram Bot
                        </span>
                        <span className="flex items-start gap-x-(--space-sm) py-(--space-3xs) font-bold text-(--color-accent-500) xl:gap-x-(--space-md) xl:py-(--space-2xs)">
                          <span className="font-mono text-(length:--text-base) font-medium leading-[200%] text-(--color-secondary-75)">
                            02
                          </span>
                          YooKassa, payments, multi-tenancy
                        </span>
                        <span className="flex items-start gap-x-(--space-sm) py-(--space-3xs) font-bold text-(--color-accent-500) xl:gap-x-(--space-md) xl:py-(--space-2xs)">
                          <span className="font-mono text-(length:--text-base) font-medium leading-[200%] text-(--color-secondary-75)">
                            03
                          </span>
                          CI/CD, Vercel, AWS S3, WebSockets
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="mt-12 flex flex-col">
              {services.map((service, index) => (
                <ServiceItem key={service.id} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
