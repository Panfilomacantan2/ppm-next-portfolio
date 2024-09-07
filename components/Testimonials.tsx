import React from "react";
import SectionHeading from "@/components/SectionHeading";
import { InfiniteMovingCards } from "@/components/TestimonialCards";
import { ShootingStars } from "@/components/ui/shooting-stars";

import Section from "./Section";

export default function TestimonialsPage() {
  return (
    <Section id="testimonials" className="overflow-x-hidden">
      <SectionHeading text="Testimonials" className="my-10 mt-20" />

      <p className="mb-5 text-center dark:text-gray-400">What my clients say</p>

      <InfiniteMovingCards />

    </Section>
  );
}
