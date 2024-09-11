import React from "react";
import SectionHeading from "@/components/SectionHeading";
import { InfiniteMovingCards } from "@/components/TestimonialCards";
import { ShootingStars } from "@/components/ui/shooting-stars";

import Section from "./Section";

export default function TestimonialsPage() {
  return (
    <Section id="testimonials" className="overflow-x-hidden">
      <SectionHeading text="Testimonials" className="my-10 mt-20" />

      <p className="mb-10 text-center text-foreground/60 max-w-md mx-auto px-3">I&apos;m committed to providing personal attention and dedication to every project. Here&apos;s what my clients say about working with me:</p>

      <InfiniteMovingCards />

    </Section>
  );
}
