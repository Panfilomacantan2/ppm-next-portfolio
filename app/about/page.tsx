import Education from "@/components/Education";
import SectionHeading from "@/components/SectionHeading";
import Tools from "@/components/Tools";
import React from "react";

const AboutPage = () => {
  return (
    <section className="min-h-screen  py-32">
      <SectionHeading text="About Me" className="mb-10" />
      <Tools />
      <Education />
    </section>
  );
};

export default AboutPage;
