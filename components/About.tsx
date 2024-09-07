import Education from "@/components/Education";
import SectionHeading from "@/components/SectionHeading";
import Tools from "@/components/Tools";
import React from "react";

export default function AboutPage() {
  return (
    <section id="about" className="min-h-screen py-32">
      <SectionHeading text="About Me" className="mb-10" />

      <p className="text-center text-foreground/80 px-3">
        Hello, <span className="text-sky-500">I&apos;m Panfilo.</span> I
        graduated from Eastern Visayas State University, Tanauan Campus, in
        2024. I began learning to code during my senior year of high school and
        have continued to develop my skills since then. I am passionate about
        exploring and creating projects with the latest technologies used in the
        IT industry.
      </p>

      <SectionHeading text="Tools" className="mt-20" />

      <p className="my-5 px-3 text-center text-foreground/80">
        Here are the tools I have used from then until now, which have
        significantly contributed to my development and expertise:
      </p>

      <Tools />
      <Education />
    </section>
  );
}
