'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLenis } from '@/contexts/LenisContext'
import Menu from './Menu'

interface MenuButtonProps {
  show: boolean
}

export default function MenuButton({ show }: MenuButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const lenis = useLenis()

  useEffect(() => {
    if (lenis) {
      if (isOpen) {
        lenis.stop()
      } else {
        lenis.start()
      }
    }
  }, [isOpen, lenis])

  const lineProps = {
    stroke: 'black',
    strokeWidth: '2',
    strokeLinecap: 'round' as const,
    transition: { duration: 0.3 },
    style: { transformOrigin: '17.5px 17.5px' },
  }

  return (
    <div className="relative">
      {show && <Menu isOpen={isOpen} setIsOpen={setIsOpen} />}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={show ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0, pointerEvents: 'none' }}
        transition={{ duration: 0.3 }}
        className="fixed top-9 right-8 z-[99999999] p-3 bg-[var(--color-accent-400)] rounded-full shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
        style={{ cursor: 'pointer' }}
      >
        <svg width={35} height={35} viewBox={`0 0 ${35} ${35}`}>
          <motion.line
            x1={2}
            y1={13.5}
            x2={33}
            y2={13.5}
            {...lineProps}
            animate={{
              translateY: isOpen ? 4 : 0,
              rotate: isOpen ? 45 : 0,
            }}
          />
          <motion.line
            x1={2}
            y1={21.5}
            x2={33}
            y2={21.5}
            {...lineProps}
            animate={{
              translateY: isOpen ? -4 : 0,
              rotate: isOpen ? -45 : 0,
            }}
          />
        </svg>
      </motion.button>
    </div>
  )
}
