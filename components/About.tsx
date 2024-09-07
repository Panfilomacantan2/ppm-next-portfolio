import Education from "@/components/Education";
import SectionHeading from "@/components/SectionHeading";
import Tools from "@/components/Tools";
import React from "react";

export default function AboutPage() {
  return (
    <section id="about" className="min-h-screen py-32">
      <SectionHeading text="About Me" className="mb-10" />

      <div className="container flex max-w-md flex-col justify-center text-center text-foreground">
        <p className="w-full"></p>

        <p className="text-center">
          I have playing guitar, watching random funny videos and mostly I love
          codings!
        </p>
      </div>

      <h1 className="text-center text-lg font-bold">Tools</h1>

      <p className="my-5 text-center dark:text-gray-400">
        These are the tools that I mostly used in all my projects!
      </p>

      <Tools />
      <Education />
    </section>
  );
}
