'use client'

interface ButtonProps {
  text: string
  onClick?: () => void
}

export default function Button({ text, onClick }: ButtonProps) {
  return (
    <button
      className="group pointer-events-auto relative flex h-fit w-fit items-center justify-center overflow-hidden rounded-full bg-(--color-secondary-300) px-(--space-md) sm:py-(--space-sm) py-(--space-xs) font-bold uppercase tracking-wide text-[#f1f0ed] sm:text-(length:--text-base) text-(length:--text-base-small)"
      onClick={onClick}
    >
      <span className="absolute inset-0 z-10 block overflow-hidden">
        <span className="block h-full w-full translate-y-full rounded-t-[15rem] bg-(--color-accent-600) transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] sm:group-hover:translate-y-0 sm:group-hover:rounded-none" />
      </span>
      <span className="relative z-20 block overflow-hidden transition-all">
        <span
          className="block after:absolute after:left-0 after:block after:translate-y-0 after:transition-all after:duration-500 after:ease-[cubic-bezier(0.77,0,0.175,1)] after:content-[attr(data-after)] sm:group-hover:after:-translate-y-full"
          data-after={text}
        >
          <span className="flex transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] sm:group-hover:-translate-y-full">
            {text}
          </span>
        </span>
      </span>
    </button>
  )
}
