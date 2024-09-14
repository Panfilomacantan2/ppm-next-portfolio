"use client";
import Image from "next/image";
import { CardStack } from "./ui/card-stack";
import { cn } from "@/lib/utils";
export default function Achievements() {
  return (
    <div className="flex h-[30rem] w-full items-center justify-center">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "bg-emerald-100 px-1 py-0.5 font-bold text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500",
        className,
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Eastern Visayas Coding Olympics",
    designation: "Team Prugrammix",
    content: (
      <Image
        src="/assets/evco.png"
        width={300}
        height={300}
        alt="EVCO"
        className="w-full object-cover"
      />
    ),
  },
  {
    id: 1,
    name: "Academic Excellence Awardee",
    designation: "Senior Software Engineer",
    content: (
      <Image
        src="/assets/academic-execellence.png"
        width={300}
        height={300}
        alt="EVCO"
        className="w-full object-cover"
      />
    ),
  },
];
