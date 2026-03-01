import Link from "next/link";

export default function Header() {
  return (
   <header className="absolute top-0 z-40 w-full">
     <div
      className=" section-padding-x mt-[var(--space-md)] flex flex-row items-start justify-between gap-x-[var(--gap-fluid)] lg:grid lg:grid-cols-12 lg:items-center ">
       <div
        className="col-span-8 flex flex-col items-start gap-x-[var(--space-2xl)] gap-y-[var(--space-3xs)] lg:flex-row lg:items-center">
          <span
           className=" block w-fit max-w-[14ch] text-balance font-medium leading-snug text-[var(--color-secondary-100)] text-[length:var(--text-base)] sm:max-w-max md:text-[length:var(--text-base-small)] 2xl:text-[length:var(--text-base)] ">
            <div className="transition-all duration-500 ease-in transform opacity-100 ">Fullstack Developer</div>
          </span>
       </div>
       <nav
        className="col-span-4 flex justify-end text-[length:var(--text-base)] md:text-[length:var(--text-base-small)] 2xl:text-[length:var(--text-base)] ">
         <ul
          className=" m-0 flex flex-col items-start text-[var(--color-secondary-100)] gap-y-[var(--space-3xs)] md:flex-row md:items-center md:gap-x-[var(--space-2xs)] md:gap-y-0 font-medium  ">
           <div className="transition-all duration-500 ease-in transform opacity-100 ">
             <li className="flex leading-normal  md:leading-snug">
               <Link href="/#Services"
                     className="group relative block h-fit  overflow-hidden font-medium cursor-pointer select-none"
               >
                 <span
                  className="block w-full transition-transform duration-[0.4s] ease-[cubic-bezier(.51,.92,.24,1.15)] translate-y-0 group-hover:-translate-y-full">Services</span>
                 <span aria-hidden="true"
                       className="absolute top-0 left-0 w-full block transition-transform duration-[0.4s] ease-[cubic-bezier(.51,.92,.24,1.15)] translate-y-full group-hover:translate-y-0">Services</span>
               </Link>
             </li>
           </div>
           <div className="transition-all duration-500 ease-in transform opacity-100 ">
             <li className="flex leading-normal  md:leading-snug">
               <Link href="/#Works"
                     className="group relative block h-fit  overflow-hidden font-medium cursor-pointer select-none">
                 <span
                  className="block w-full transition-transform duration-[0.4s] ease-[cubic-bezier(.51,.92,.24,1.15)] translate-y-0 group-hover:-translate-y-full">Works</span>
                 <span aria-hidden="true"
                       className="absolute top-0 left-0 w-full block transition-transform duration-[0.4s] ease-[cubic-bezier(.51,.92,.24,1.15)] translate-y-full group-hover:translate-y-0">Works</span>
               </Link>
             </li>
           </div>
           <div className="transition-all duration-500 ease-in transform opacity-100 ">
             <li className="flex leading-normal  md:leading-snug">
               <Link className="group relative block h-fit  overflow-hidden font-medium cursor-pointer select-none"
                     href="/#About"><span
                className="block w-full transition-transform duration-[0.4s] ease-[cubic-bezier(.51,.92,.24,1.15)] translate-y-0 group-hover:-translate-y-full">About</span>
                 <span aria-hidden="true"
                       className="absolute top-0 left-0 w-full block transition-transform duration-[0.4s] ease-[cubic-bezier(.51,.92,.24,1.15)] translate-y-full group-hover:translate-y-0">About</span>
               </Link>
             </li>
           </div>
           <div className="transition-all duration-500 ease-in transform opacity-100 ">
             <li className="flex leading-normal  md:leading-snug">
               <Link
                className="group relative block h-fit  overflow-hidden font-medium cursor-pointer select-none"
                href="/#Contact">
               <span
                className="block w-full transition-transform duration-[0.4s] ease-[cubic-bezier(.51,.92,.24,1.15)] translate-y-0 group-hover:-translate-y-full">Contact</span>
                 <span aria-hidden="true"
                       className="absolute top-0 left-0 w-full block transition-transform duration-[0.4s] ease-[cubic-bezier(.51,.92,.24,1.15)] translate-y-full group-hover:translate-y-0">Contact</span>
               </Link>
             </li>
           </div>
         </ul>
       </nav>
     </div>
   </header>
  )
}
