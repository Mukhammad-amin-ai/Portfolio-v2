'use client'

import { useState, useEffect } from 'react'

interface ClockProps {
  timezone?: string
  shortName?: string
}

export default function Clock({ timezone, shortName }: ClockProps) {
  const [time, setTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const options: Intl.DateTimeFormatOptions = {
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }

      if (timezone) {
        options.timeZone = timezone
      }

      let timeString = now.toLocaleTimeString('en-US', options)

      if (shortName) {
        timeString = timeString.replace(/\s([A-Z]{3,5}|GMT[+-]\d{1,2}(:\d{2})?)$/i, '')
      }

      setTime(timeString)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [timezone, shortName])

  if (time) {
    return (
      <>
        {time}
        {shortName && `, ${shortName}`}
      </>
    )
  }

  return (
    <span className="font-mono font-medium uppercase tracking-[var(--tracking-mono)] text-[var(--color-secondary-100)]">
      Loading...
    </span>
  )
}
