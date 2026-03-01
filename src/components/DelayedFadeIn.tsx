'use client'

import { useState, useEffect } from 'react'

interface DelayedFadeInProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export default function DelayedFadeIn({ children, delay = 600, className = '' }: DelayedFadeInProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      className={`transition-all duration-500 ease-in transform ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  )
}
