'use client'

import { useState } from 'react'
import { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TextReveal from '@/components/animations/TextReveal'
import ContactForm from '@/components/ContactForm'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(containerRef.current, {
        y: -100,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 100%',
          end: 'top -60%',
          scrub: true,
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={containerRef}
      className="section-padding-x translate-y-[-20vh] sm:translate-y-[-80vh] py-[var(--space-lg)]"
    >
      <div className="relative flex h-full w-full flex-col items-center justify-between rounded-md bg-[linear-gradient(0deg,_#393632,_#080807)] bg-cover border border-white/10 shadow-lg backdrop-blur-xl p-[var(--space-md)]">
        <h2 className="max-w-[10ch] text-center text-[length:var(--text-heading-1)] font-semibold uppercase text-[var(--color-accent-400)]">
          <TextReveal delay={0.3} delayperwords={0.1} text="Let's Make It Happen " />
        </h2>
        <ContactForm />
      </div>
    </div>
  )
}
