"use client";

import AnimatedLink from "./AnimatedLink";
import Clock from "./Clock";

export default function Footer() {
  return (
    <div className="section-padding-equal relative flex flex-col items-center justify-center gap-y-(--space-xl) py-(--space-lg)">
      <div className="grid-gap grid w-full grid-cols-2 gap-y-(--space-md) text-(length:--text-base) md:grid-cols-12">
        <div className="flex flex-col md:col-span-6">
          <h3 className="mb-(--space-xs) flex border-b-[1.5px] border-(--color-accent-500) pb-(--space-2xs) font-bold tracking-base text-(--color-secondary-300)">
            Menu
          </h3>
          <ul className="flex flex-col gap-y-(--space-3xs)">
            {[
              { text: "Home", href: "/" },
              { text: "Services", href: "#Services" },
              { text: "Works", href: "#Works" },
              { text: "About", href: "#About" },
              { text: "Contact", href: "#Contact" },
            ].map((item) => (
              <li key={item.href}>
                <AnimatedLink
                  href={item.href}
                  className="flex w-fit leading-base text-(--color-secondary-100) sm:leading-snug"
                >
                  {item.text}
                </AnimatedLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col md:col-span-3">
          <h3 className="mb-(--space-xs) flex border-b-[1.5px] border-(--color-accent-500) pb-(--space-2xs) font-bold tracking-base text-(--color-secondary-300)">
            Contact
          </h3>
          <ul className="flex flex-col gap-y-(--space-3xs)">
            {[
              {
                text: "Telegram",
                href: "https://t.me/muhammad_amin_software_engineer",
              },
              { text: "Email", href: "mailto:aminahmadov123@gmail.com" },
              { text: "Kwork", href: "https://kwork.ru/user/muhammadamin_dev" },
              { text: "Github", href: "https://github.com/Mukhammad-amin-ai" },
            ].map((item) => (
              <li key={item.href}>
                <AnimatedLink
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-fit leading-base text-(--color-secondary-100) sm:leading-snug"
                >
                  {item.text}
                </AnimatedLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid-gap flex w-full items-end justify-between md:grid md:grid-cols-12">
        <span className="flex font-medium flex-col text-(length:--text-heading-3) leading-tight tracking-(--tracking-heading) text-(--color-secondary-300) sm:order-first sm:text-(length:--text-heading-3) md:col-span-6" />

        <div className="flex flex-col text-(length:--text-base-small) md:col-span-3">
          <span className="font-bold uppercase text-(--color-secondary-300)">
            Samarkand
          </span>
          <span className="font-mono font-medium uppercase tracking-(--tracking-mono) text-(--color-secondary-100)">
            <Clock timezone="Asia/Samarkand" shortName="UZT" />
          </span>
        </div>

        <div className="hidden h-fit w-full justify-end md:col-span-3 md:flex">
          <div className="w-fit" style={{ transform: "none" }}>
            <button
              aria-label="Scroll to top"
              className="group relative cursor-pointer hidden w-fit flex-col items-center justify-center overflow-hidden rounded-full bg-(--color-accent-500) p-(--space-lg) duration-1000 ease-expo hover:scale-90 md:flex"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="28"
                viewBox="0 0 30 32"
                fill="none"
              >
                <path
                  d="M16.9815 7.14399L17.0134 29.8209C17.0134 30.3313 16.8378 30.762 16.4865 31.1133C16.1352 31.4646 15.7049 31.6398 15.1954 31.6389C14.6851 31.6389 14.2543 31.4633 13.9031 31.112C13.5518 30.7608 13.3766 30.3304 13.3774 29.821L13.4093 7.14399L3.71341 16.8399C3.35194 17.2014 2.92626 17.3821 2.43636 17.3821C1.94646 17.3821 1.52162 17.2014 1.16185 16.8399C0.800384 16.4784 0.61965 16.0528 0.61965 15.5629C0.61965 15.073 0.800384 14.6481 1.16186 14.2883L13.9196 1.53057C14.2811 1.1691 14.7068 0.988364 15.1967 0.988364C15.6866 0.988364 16.1114 1.1691 16.4712 1.53057L29.229 14.2884C29.5904 14.6498 29.7712 15.0755 29.7712 15.5654C29.7712 16.0553 29.5904 16.4801 29.229 16.8399C28.8675 17.2014 28.4418 17.3821 27.9519 17.3821C27.462 17.3821 27.0372 17.2014 26.6774 16.8399L16.9815 7.14399Z"
                  fill="#524D47"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
