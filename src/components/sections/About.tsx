'use client'

import { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import CharReveal from '@/components/animations/CharReveal'
import TextReveal from '@/components/animations/TextReveal'
import Skills from '@/components/Skills'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(contentRef.current, {
        scale: 0.95,
        y: -100,
        ease: 'none',
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top -10%',
          end: 'bottom 30%',
          scrub: true,
        },
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="About" className="mt-[-2vh]">
      <div ref={containerRef} className="z-999999 relative">
        <div
          ref={contentRef}
          className="section-padding sm:pb-[10em] pb-[5em] flex flex-col gap-y-(--space-lg) rounded-b-3xl bg-(--color-secondary-400) lg:gap-y-(--space-2xl) md:pt-[15vh]"
        >
          <div className="custom-grid">
            <h2 className="section-heading cs5:text-[length:var(--text-h1-display)] text-(length:--text-menu) relative z-30 flex w-full flex-col col-span-full leading-none text-(--color-accent-400) mix-blend-exclusion lg:col-span-8 lg:col-end-7 mt-[1em] mb-[1em] order-2 md:order-1">
              <span>
                <CharReveal text="DEVELOPER" delay={0} />
              </span>
              <span>
                <CharReveal text="ENGINEER" delay={0.3} />
              </span>
              <span>
                <CharReveal text="CREATOR/" delay={0.6} />
              </span>
            </h2>

            <div className="relative z-0 lg:col-span-6 col-span-full flex w-full items-center overflow-clip rounded-md md:items-end order-1 md:order-2">
              <Skills />
            </div>
          </div>

          <div className="custom-grid col-span-full gap-y-(--space-lg) lg:gap-y-(--space-2xl)">
            <div className="pointer-events-none max-h-120 relative z-0 col-span-3 flex aspect-square w-full items-center overflow-clip rounded-md sm:aspect-auto md:items-end">
              <Image
                src="/1.webp"
                priority
                alt="Just an Image."
                width={1536}
                height={2040}
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="col-span-7 col-start-6 flex flex-col gap-y-(--space-xl) lg:gap-y-(--space-2xl)">
              <div className="relative w-full max-w-[39ch] text-balance text-(length:--text-heading-4) font-medium leading-snug text-(--color-accent-400)">
                <TextReveal
                  delayperwords={0}
                  delay={0.5}
                  text="Fullstack JS developer with 2+ years of experience. Building scalable web applications with React, Vue, Next.js, and Node.js."
                />
              </div>

              <div className="flex flex-col gap-x-(--space-xl) gap-y-(--space-sm) lg:flex-row">
                <span className="flex h-fit overflow-clip font-mono tracking-(--tracking-mono)">
                  <span className="flex h-full font-medium uppercase text-nowrap text-(--color-secondary-50)">
                    <CharReveal delayPerChar={0} text="(About Me)" />
                  </span>
                </span>

                <div className="flex w-full gap-y-4 max-w-[38ch] flex-col text-balance text-(length:--text-base) font-medium leading-base text-(--color-secondary-50)">
                  <TextReveal
                    text="I work as a T-shaped developer: strong frontend (React, Vue, Next.js, Nuxt) and solid backend with DevOps. I own the full cycle — from UI and API to server, deployment, and production support. Experience on Kwork, mentorship at Empire IT, internship at Programmer Uz."
                    delayperwords={0}
                    delay={0.5}
                  />
                  <TextReveal
                    text="Focused on clean code, performance, and agile collaboration. Based in Samarkand, open to remote work and projects."
                    delayperwords={0}
                    delay={0.5}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
