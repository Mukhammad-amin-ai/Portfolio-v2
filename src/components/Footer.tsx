'use client'

import AnimatedLink from './AnimatedLink'
import Clock from './Clock'

export default function Footer() {
  return (
    <div className="section-padding-equal relative flex flex-col items-center justify-center gap-y-[var(--space-xl)] py-[var(--space-lg)]">
      <div className="grid-gap grid w-full grid-cols-2 gap-y-[var(--space-md)] text-[length:var(--text-base)] md:grid-cols-12">
        <div className="flex flex-col md:col-span-6">
          <h3 className="mb-[var(--space-xs)] flex border-b-[1.5px] border-[var(--color-accent-500)] pb-[var(--space-2xs)] font-bold tracking-base text-[var(--color-secondary-300)]">
            Menu
          </h3>
          <ul className="flex flex-col gap-y-[var(--space-3xs)]">
            {[
              { text: 'Home', href: '/' },
              { text: 'Services', href: '#Services' },
              { text: 'Works', href: '#Works' },
              { text: 'About', href: '#About' },
              { text: 'Contact', href: '#Contact' },
            ].map((item) => (
              <li key={item.href}>
                <AnimatedLink
                  href={item.href}
                  className="flex w-fit leading-base text-[var(--color-secondary-100)] sm:leading-snug"
                >
                  {item.text}
                </AnimatedLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col md:col-span-3">
          <h3 className="mb-[var(--space-xs)] flex border-b-[1.5px] border-[var(--color-accent-500)] pb-[var(--space-2xs)] font-bold tracking-base text-[var(--color-secondary-300)]">
            Contact
          </h3>
          <ul className="flex flex-col gap-y-[var(--space-3xs)]">
            {[
              { text: 'Telegram', href: 'https://t.me/muhammad_amin_software_engineer' },
              { text: 'Email', href: 'mailto:aminahmadov123@gmail.com' },
              { text: 'Kwork', href: 'https://kwork.ru/user/muhammadamin_dev' },
              { text: 'Github', href: 'https://github.com/Mukhammad-amin-ai' },
            ].map((item) => (
              <li key={item.href}>
                <AnimatedLink
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-fit leading-base text-[var(--color-secondary-100)] sm:leading-snug"
                >
                  {item.text}
                </AnimatedLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid-gap flex w-full items-end justify-between md:grid md:grid-cols-12">
        <span className="flex font-[500] flex-col text-[length:var(--text-heading-3)] leading-tight tracking-[var(--tracking-heading)] text-[var(--color-secondary-300)] sm:order-first sm:text-[length:var(--text-heading-3)] md:col-span-6" />

        <div className="flex flex-col text-[length:var(--text-base-small)] md:col-span-3">
          <span className="font-bold uppercase text-[var(--color-secondary-300)]">Samarkand</span>
          <span className="font-mono font-medium uppercase tracking-[var(--tracking-mono)] text-[var(--color-secondary-100)]">
            <Clock timezone="Asia/Samarkand" shortName="UZT" />
          </span>
        </div>

        <div className="hidden h-fit w-full justify-end md:col-span-3 md:flex">
          <div className="w-fit" style={{ transform: 'none' }}>
            <button
              aria-label="Scroll to top"
              className="group relative hidden w-fit flex-col items-center justify-center overflow-hidden rounded-full bg-[var(--color-accent-500)] p-[var(--space-lg)] duration-1000 ease-expo hover:scale-90 md:flex"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              {/* Arrow icon would go here */}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
