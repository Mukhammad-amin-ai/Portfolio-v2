'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function PageTransition() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      const hideTimer = setTimeout(() => setShow(false), 2500)
      return () => clearTimeout(hideTimer)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  if (!show) return null

  return (
    <motion.div
      className="fixed top-0 left-0 z-15 flex h-screen w-screen bg-secondary-400"
      initial={{ y: '0vh' }}
      animate={{ y: '-100vh' }}
      transition={{ duration: 2, ease: [0.2, 0.38, 0.09, 0.91] }}
    >
      <svg
        className="absolute top-0 w-full h-full"
        viewBox="0 0 926 1000"
        preserveAspectRatio="none"
        style={{ height: 'calc(100% + 300px)' }}
      >
        <motion.path
          className="fill-secondary-400"
          d="M0 0 L926 0 L926 1000 Q463 730 0 1000 L0 0"
          animate={{
            d: [
              'M0 0 L926 0 L926 1000 Q463 730 0 1000 L0 0',
              'M0 0 L926 0 L926 0 Q463 0 0 0 L0 0',
            ],
          }}
          transition={{ duration: 4, ease: 'easeOut' }}
        />
      </svg>
    </motion.div>
  )
}
