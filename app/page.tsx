"use client";

import AboutPage from "@/components/About";
import ContactPage from "@/components/Contact";
import Hero from "@/components/Hero";
import ProjectPage from "@/components/Project";
import TestimonialsPage from "@/components/Testimonials";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <main className="relative min-h-screen w-full">
      <Hero />
      <AboutPage />
      <ProjectPage />
      <ContactPage />
      <TestimonialsPage />
    </main>
  );
}
