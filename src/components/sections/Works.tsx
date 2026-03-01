'use client'

import {useState, useRef, useEffect} from 'react'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import CharReveal from '@/components/animations/CharReveal'
import TextReveal from '@/components/animations/TextReveal'
import GlitchText from '@/components/animations/GlitchText'
import ProjectCard from '@/components/ProjectCard'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    source: '6_jugckf',
    muxid: '',
    type: 'Travel agency, Next.js, SSR, Brevo',
    name: 'Hant Travel',
    link: 'https://hant-travel.vercel.app',
    blurDataUrl: 'https://res.cloudinary.com/dnocsf5bq/image/upload/w_10,q_1/v1748325061/6_jugckf.webp',
  },
  {
    source: '3_nzf5vb',
    muxid: '',
    type: 'CRM platform, Vue 2 → Vue 3 migration',
    name: 'Novicombank',
    link: 'https://novincom.vercel.app/',
    blurDataUrl: 'https://res.cloudinary.com/dnocsf5bq/image/upload/w_10,q_1/v1748325070/3_nzf5vb.jpg',
  },
  {
    source: '2_frjjt5',
    muxid: '',
    type: 'Platform, Nuxt 2/3, WebSockets, AWS S3',
    name: 'Nebula GTS',
    link: 'https://nebulagts.io',
    blurDataUrl: 'https://res.cloudinary.com/dnocsf5bq/image/upload/w_10,q_1/v1748325060/2_frjjt5.webp',
  },
  {
    source: '7_lfufd9',
    muxid: '',
    type: 'QR menu for restaurants, MERN, YooKassa',
    name: 'Bar Karas',
    link: 'https://bar-karas.vercel.app',
    blurDataUrl: 'https://res.cloudinary.com/dnocsf5bq/image/upload/w_10,q_1/v1748325062/7_lfufd9.webp',
  },
  {
    source: '1_phf5ng',
    muxid: '',
    type: 'Training registration, Vue.js, Google Docs',
    name: 'My Life Planner',
    link: 'https://my-life-planner.netlify.app',
    blurDataUrl: 'https://res.cloudinary.com/dnocsf5bq/image/upload/w_10,q_1/v1748325060/1_phf5ng.webp',
  },
  {
    source: '6_jugckf',
    muxid: '',
    type: 'Crypto/fintech landings, HTML, Vercel',
    name: 'Crypto Landings',
    link: 'https://sparklux-biz.vercel.app',
    blurDataUrl: 'https://res.cloudinary.com/dnocsf5bq/image/upload/w_10,q_1/v1748325061/6_jugckf.webp',
  },
]

export default function Works() {
  const [activeIndex, setActiveIndex] = useState(0)
  const refs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (refs.current.length !== projects.length) return

    const triggers = refs.current.map((ref, index) => {
      if (!ref) return null

      return ScrollTrigger.create({
        trigger: ref,
        start: 'top +=20%',
        end: 'bottom top+=33%',
        onEnter: () => setActiveIndex(index),
        onEnterBack: () => setActiveIndex(index),
      })
    })

    return () => {
      triggers.forEach((trigger) => trigger?.kill())
      ScrollTrigger.refresh()
    }
  }, [])

  const addRef = (el: HTMLDivElement | null) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el)
    }
  }

  return (
   <section id="Works">
     <div className="section-padding bg-[var(--color-secondary-400)]">
       <div className="flex flex-col gap-y-[var(--space-lg)] md:gap-y-[var(--space-2xl)]">
         <h1 className="section-heading relative text-[var(--color-accent-400)]">
           <CharReveal text="SELECTED WORKS /" delayPerChar={0.03}/>
         </h1>

         <div className="grid-gap flex grid-cols-12 sm:justify-end lg:grid">
           <div
            className="col-span-7 col-start-1 flex flex-col gap-x-[var(--space-xl)] gap-y-[var(--space-2xs)] sm:col-start-6 sm:flex-row">
              <span className="flex h-full font-medium uppercase text-nowrap text-[var(--color-secondary-75)]">
                (PROJECTS)
              </span>
             <div
              className="w-full max-w-[25ch] text-balance font-medium leading-base text-[var(--color-secondary-50)] text-[length:var(--text-base-large)]">
               <TextReveal
                delay={0.7}
                delayperwords={0.01}
                text="Commercial and freelance projects: from landings and CRM to full-stack platforms with payments and real-time features."
               />
             </div>
           </div>
         </div>

         <div className="grid-gap grid grid-cols-12 pt-[var(--space-lg)]">
           <div
            className="sticky top-12 col-span-5 hidden h-fit w-full overflow-hidden text-[22vw] font-normal leading-[0.8] text-[var(--color-secondary-50)] md:flex">
             <span className="relative">0</span>
             <div className="relative">
               <div
                className="absolute flex h-full w-fit flex-col transition-all duration-1000 ease-in-out"
                style={{transform: `translateY(-${100 * activeIndex}%)`}}
               >
                 {projects.map((_, index) => (
                  <span key={index} className="inline-block">
                      {index + 1}
                    </span>
                 ))}
               </div>
             </div>
           </div>

           <aside
            className="relative col-span-12 flex flex-col gap-y-[var(--space-xl)] md:col-span-7 md:gap-y-[var(--space-2xl)]">
             {projects.map((project, index) => (
              <ProjectCard
               key={index}
               // ref={(el) => {
               //   addRef(el)
               //   return el
               // }}
               index={index}
               {...project}
              />
             ))}
           </aside>
         </div>
       </div>
     </div>
   </section>
  )
}
