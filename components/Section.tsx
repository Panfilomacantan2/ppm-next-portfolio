import { cn } from "@/lib/utils";
import React from "react";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string
};

export default function Section({
  children,
  className,
  ...props
}: SectionProps) {
  return (
    <section className={cn("min-h-screen w-full", className)} {...props}>
      {children}
    </section>
  );
}
