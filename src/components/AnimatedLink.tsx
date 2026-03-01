'use client'

import Link from 'next/link'
import clsx from 'clsx'

interface AnimatedLinkProps {
  href?: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
  target?: string
  rel?: string
}

export default function AnimatedLink({
  href,
  children,
  className = '',
  onClick,
  target,
  rel,
}: AnimatedLinkProps) {
  const baseClasses = 'group relative block h-fit overflow-hidden font-medium select-none'
  const linkClasses = href
    ? 'group relative block h-fit overflow-hidden font-medium cursor-pointer select-none'
    : baseClasses

  const combinedClasses = clsx(linkClasses, className)

  const content = (
    <>
      <span className="block w-full transition-transform duration-[0.4s] ease-[cubic-bezier(.51,.92,.24,1.15)] translate-y-0 group-hover:-translate-y-full">
        {children}
      </span>
      <span
        aria-hidden="true"
        className="absolute top-0 left-0 w-full block transition-transform duration-[0.4s] ease-[cubic-bezier(.51,.92,.24,1.15)] translate-y-full group-hover:translate-y-0"
      >
        {children}
      </span>
    </>
  )

  if (href) {
    return (
      <Link
        href={href}
        className={combinedClasses}
        onClick={onClick}
        target={target}
        rel={rel}
      >
        {content}
      </Link>
    )
  }

  return (
    <span className={combinedClasses} onClick={onClick}>
      {content}
    </span>
  )
}
