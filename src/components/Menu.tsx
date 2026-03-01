'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Link from 'next/link'
import Image from 'next/image'
import AnimatedLink from './AnimatedLink'

interface MenuProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

const menuItems = ['Home', 'Services', 'Works', 'About', 'Contact']

export default function Menu({ isOpen, setIsOpen }: MenuProps) {
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const menu = menuRef.current
    if (!menu) return

    gsap.killTweensOf(menu)

    if (isOpen) {
      menu.style.display = 'flex'
      gsap.fromTo(
        menu,
        { x: '100%' },
        { x: '0%', duration: 1.3, ease: 'power3.out' }
      )
    } else {
      gsap.to(menu, {
        x: '100%',
        duration: 1,
        ease: 'power3.out',
        onComplete: () => {
          if (menu) {
            menu.style.display = 'none'
          }
        },
      })
    }
  }, [isOpen])

  return (
    <div
      ref={menuRef}
      className="fixed top-0 right-0 z-[99999999] h-screen w-screen justify-end backdrop-blur-xl text-[var(--color-accent-200)]"
      style={{ display: 'none' }}
    >
      <div className="w-full relative z-20 flex max-w-2xl flex-col justify-end overflow-hidden rounded-md xl:max-w-3xl 3xl:max-w-4xl">
        <div className="absolute right-0 top-0 opacity-40" style={{ opacity: 0.25 }}>
          <Image
            src="/menu.svg"
            alt=""
            width={245}
            height={327}
            className="2xl:w-72 3xl:w-96"
            loading="lazy"
          />
        </div>

        <nav className="relative h-full px-[var(--space-md)] text-[length:var(--text-menu)] font-[700] uppercase leading-[100%] sm:px-[var(--space-xl)]">
          <ul className="flex h-full flex-col justify-center gap-y-[var(--space-3xs)]">
            {menuItems.map((item) => (
              <li key={item} className="relative flex w-fit cursor-pointer items-center">
                <AnimatedLink
                  onClick={() => setIsOpen(false)}
                  href={`#${item}`}
                  className="relative inline-block text-[length:var(--text-menu)] text-[var(--color-accent-200)] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[var(--color-accent-200)] after:transition-all after:duration-500 hover:after:w-full"
                >
                  {item}
                </AnimatedLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col items-start justify-start gap-y-[var(--space-md)] px-[var(--space-md)] pb-[var(--space-md)] sm:px-[var(--space-xl)] sm:pb-[var(--space-xl)]">
          <div className="flex flex-col">
            <span className="text-left text-[length:var(--text-base-small)] font-bold text-[--color-secondary-50] 2xl:text-[length:var(--text-base-small)]">
              EMAIL ADDRESS
            </span>
            <a
              href="mailto:contact@zunedaalim.com"
              onClick={() => setIsOpen(false)}
              className="link-text relative block h-fit overflow-hidden font-mono font-medium"
            >
              <AnimatedLink>contact@zunedaalim.com</AnimatedLink>
            </a>
          </div>

          <ul className="flex flex-nowrap justify-start gap-x-[var(--space-2xs)]">
            <li>
              <AnimatedLink
                target="_blank"
                href="https://www.linkedin.com/in/zunedaalim/"
              >
                LinkedIn
              </AnimatedLink>
            </li>
            <li>
              <AnimatedLink
                target="_blank"
                href="https://github.com/zunedaalim"
              >
                Github
              </AnimatedLink>
            </li>
            <li>
              <AnimatedLink
                target="_blank"
                href="https://leetcode.com/u/zunedaalim1/"
              >
                Leetcode
              </AnimatedLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
