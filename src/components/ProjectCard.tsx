"use client";

import { forwardRef } from "react";
import Link from "next/link";
import Image from "next/image";
import GlitchText from "./animations/GlitchText";

interface ProjectCardProps {
  index: number;
  source: string;
  type: string;
  name: string;
  thumb: string;
  link: string;
  blurDataUrl: string;
}

const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ index, source, type, name, link, thumb }, ref) => {
    return (
      <div ref={ref} className="@container" data-index={index}>
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="custom-cursor-area"
        >
          <div className="relative z-0 mt-5 flex aspect-square items-center justify-center overflow-clip rounded-md bg-(--color-secondary-300) p-(--space-md) sm:p-(--space-lg) xl:p-(--space-2xl)">
            <Image
              src={`https://res.cloudinary.com/dnqepr6ku/image/upload/${source}.webp`}
              alt="background"
              fill
              className="h-full absolute w-full object-cover object-center transition-opacity duration-700 ease-in-out"
              style={{ color: "transparent" }}
            />
            <div className="relative z-10 aspect-4/3 w-full overflow-clip rounded-lg">
              {/* Mux Player would go here */}
              <div className="aspect-4/3 w-full rounded-lg bg-gray-100 overflow-hidden">
                <Image
                  src={thumb}
                  alt="background"
                  fill
                  className="object-cover"
                  style={{ color: "transparent" }}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-y-(--space-sm) pt-(--space-xs) lg:flex-row">
            <div className="flex flex-col gap-y-(--space-3xs)">
              <span className="font-mono text-var(--text-base-small) font-medium text-(--color-secondary-50)">
                <GlitchText text={type} delay={200} duration={600} />
              </span>
              <div className="w-fit text-(length:--text-heading-3) font-semibold text-(--color-accent-400)">
                <GlitchText text={name} delay={200} duration={600} />
              </div>
            </div>

            <div className="flex items-end gap-x-(--space-3xs) tracking-base text-(--color-secondary-50)">
              <span className="tag">Development</span>
              <span className="tag border-(--color-secondary-50) bg-(--color-secondary-50) text-(--color-secondary-400)">
                2025
              </span>
            </div>
          </div>
        </Link>
      </div>
    );
  },
);

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
