"use client";

import AboutPage from "@/components/About";
import ContactPage from "@/components/Contact";
import Hero from "@/components/Hero";
import ProjectPage from "@/components/Project";
import TestimonialsPage from "@/components/Testimonials";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Spotlight } from "@/components/ui/Spotlight";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <main className="min-h-screen w-full">
      <Spotlight
        className="-top-40 left-0 md:top-10"
        fill="rgba(255,255,255,0.8)"
      />
      <Hero />
      <AboutPage />
      <ProjectPage />
      <ContactPage />
      <TestimonialsPage />
    </main>
  );
}
