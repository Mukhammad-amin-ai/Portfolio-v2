'use client'

import {forwardRef} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import GlitchText from './animations/GlitchText'

interface ProjectCardProps {
  index: number
  source: string
  type: string
  name: string
  link: string
  blurDataUrl: string
}

const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(
 ({index, source, type, name, link}, ref) => {
   return (
    <div ref={ref} className="@container" data-index={index}>
      <Link
       href={link}
       target="_blank"
       rel="noopener noreferrer"
       className="custom-cursor-area"
      >
        <div
         className="relative mt-5 flex aspect-square items-center justify-center overflow-clip rounded-md bg-[var(--color-secondary-300)] p-[var(--space-md)] sm:p-[var(--space-lg)] xl:p-[var(--space-2xl)]">
          <Image
           src={`https://res.cloudinary.com/dnocsf5bq/image/upload/${source}.webp`}
           alt="background"
           fill
           className="h-full absolute w-full object-cover object-center transition-opacity duration-700 ease-in-out"
           style={{color: 'transparent'}}
          />
          <div className="z-10 aspect-[4/3] w-full overflow-clip rounded-lg">
            {/* Mux Player would go here */}
            <div className="aspect-[4/3] w-full rounded-lg bg-gray-100 overflow-hidden"/>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-y-[var(--space-sm)] pt-[var(--space-xs)] lg:flex-row">
          <div className="flex flex-col gap-y-[var(--space-3xs)]">
              <span className="font-mono text-var(--text-base-small) font-medium text-[var(--color-secondary-50)]">
                <GlitchText text={type} delay={200} duration={600}/>
              </span>
            <div className="w-fit text-[length:var(--text-heading-3)] font-semibold text-[var(--color-accent-400)]">
              <GlitchText text={name} delay={200} duration={600}/>
            </div>
          </div>

          <div className="flex items-end gap-x-[var(--space-3xs)] tracking-base text-[var(--color-secondary-50)]">
            <span className="tag">Development</span>
            <span
             className="tag border-[var(--color-secondary-50)] bg-[var(--color-secondary-50)] text-[var(--color-secondary-400)]">
                2025
              </span>
          </div>
        </div>
      </Link>
    </div>
   )
 }
)

ProjectCard.displayName = 'ProjectCard'

export default ProjectCard
