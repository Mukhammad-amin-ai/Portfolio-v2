"use client";

import {useRef, useEffect} from "react";
import {useLayoutEffect} from "react";
import Image from "next/image";
import {gsap} from "gsap";
import Link from "next/link";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import TextReveal from "@/components/animations/TextReveal";
import CharReveal from "@/components/animations/CharReveal";
import Button from "@/components/Button";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLSpanElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(imageRef.current, {
      clipPath: "inset(0% 0% 0% 0%)",
      scale: 1,
      opacity: 1,
      duration: 2,
      delay: 1.2,
      ease: 'expo.out',
    });

    gsap.to(arrowRef.current, {
      opacity: 1,
      duration: 2,
      delay: 1.1,
      ease: "power3.out",
    });

    gsap.to(buttonRef.current, {
      opacity: 1,
      duration: 1.2,
      translateY: 0,
      delay: 1.3,
      ease: "power3.out",
    });
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=100%",
          scrub: true,
        },
      });

      tl.to(heroRef.current, {
        scale: 0.95,
        y: 80,
        opacity: 0.3,
        ease: "none",
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
   <section className="mb-[-100svh] py-0 " id='containerHero'>
     <div
      ref={containerRef}
      id='containerHero'
      className="section-padding-equal sticky top-0 flex h-svh items-end"
     >
       <div ref={heroRef} id={'hero'} className="relative flex w-full flex-col md:gap-y-(--space-lg)">
         <h1
          className="text-[clamp(3rem,1.200rem+10.000vw,10rem)] xl:text-(length:--text-heading-display) font-semibold overflow-clip">
           <CharReveal
            className="w-full hidden h-full lg:block"
            text="MUKHAMMADAMIN"
            delay={0}
           />
           <span
            className="flex flex-col text-(length:--text-heading-display) font-semibold uppercase leading-[80%] tracking-(--tracking-heading) text-(--color-secondary-400) lg:hidden">
              <CharReveal text="MUKHAMMAD" delay={0}/>
              <CharReveal text="AMIN" delay={0.3}/>
            </span>
         </h1>

         <div
          className="relative grid w-full grid-cols-12 justify-between gap-x-(--gap-fluid) gap-y-(--space-md)">
           <div
            className="col-span-12 flex flex-col justify-between gap-y-(--space-2xl) pt-(--space-sm) md:col-span-4 md:gap-y-(--space-md)">
             <div className="grid-gap flex flex-col gap-(--space-md) md:gap-y-(--space-xl)">
               <div className="hidden overflow-clip md:block">
                  <span className="block" ref={arrowRef} style={{opacity: 0}}>
                    <svg
                     stroke="currentColor"
                     fill="none"
                     strokeWidth={1.25}
                     viewBox="6 6 12 12"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     className="m-0 size-4 p-0 md:size-6"
                     style={{color: "#8C8C73"}}
                     xmlns="http://www.w3.org/2000/svg"
                    >
                      <line x1="7" y1="7" x2="17" y2="17"/>
                      <polyline points="17 7 17 17 7 17"/>
                    </svg>
                  </span>
               </div>

               <div className="flex flex-col gap-y-(--space-sm) md:gap-y-(--space-md)">
                 <div
                  className="w-full max-w-[32ch] text-balance text-(length:--text-base) font-medium leading-snug text-(--color-secondary-100) xl:text-(length:--text-base-large) 3xl:text-[length:var(--text-heading-body)]">
                   <TextReveal
                    className="wrap-break-word"
                    text="Fullstack JS developer. Open to projects and remote work. Building fast, reliable web apps from UI to API and deployment."
                    delayperwords={0}
                    delay={1.3}
                   />
                 </div>
                 <div className="overflow-clip">
                   <div
                    ref={buttonRef}
                    style={{opacity: 0, transform: "translateY(100px)"}}
                   >
                     <Link href="#Contact">
                       <Button text={'CONTACT ↗'}></Button>
                     </Link>
                   </div>
                 </div>
               </div>
             </div>
           </div>

           <div className="col-span-4 flex flex-col items-start md:items-center">
             <div
              className="flex h-fit w-fit flex-col items-center justify-center gap-y-(--space-2xs) overflow-hidden rounded-md">
               <div
                ref={imageRef}
                className="pointer-events-none h-[15vh] max-w-lg rounded-lg md:h-[50vh]"
                style={{clipPath: "inset(0)", opacity: 0}}
               >
                 <Image
                  src="/1.webp"
                  alt="Just an Image."
                  width={1536}
                  height={2040}
                  priority
                  className="h-full w-full object-cover object-center grayscale"
                 />
               </div>
             </div>
           </div>

           <div className="inset-e-1 col-span-8 flex w-full flex-col items-end justify-end md:col-span-4">
             <div className="overflow-clip">
                <span
                 className="block max-w-[15ch] text-right font-mono text-(length:--text-base-small) font-medium uppercase leading-snug tracking-(--tracking-mono) text-[--color-secondary-100] md:max-w-max 3xl:text-[length:var(--text-base)]">
                  <TextReveal
                   text="Available for work"
                   delay={1.3}
                   delayperwords={0.01}
                  />
                </span>
             </div>
             <div className="overflow-clip">
                <span
                 className="block text-(length:--text-heading-2) font-semibold uppercase leading-none tracking-(--tracking-heading) text-(--color-secondary-300) sm:text-(length:--text-heading-1--alt) 3xl:text-[length:var(--text-heading-1)]">
                  <TextReveal
                   text="Feb '26 "
                   delay={1.3}
                   delayperwords={0.01}
                  />
                </span>
             </div>
           </div>
         </div>
       </div>
     </div>
     <div className="h-svh"/>
   </section>
  );
}
