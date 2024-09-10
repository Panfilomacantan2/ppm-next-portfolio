import React from "react";
import SectionHeading from "./SectionHeading";
import { TracingBeam } from "./ui/tracing-beam";
import Section from "./Section";

export default function EducationPage() {
  return (
    <div>
      <SectionHeading text="Education" className="my-10" />

      <div className="flex justify-center overflow-x-hidden px-3">
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          <li className="mb-10 ms-4">
            <div
              className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"
              data-aos="new-animation"
              data-aos-once="false"
            ></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              July 2024
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Eastern Visayas State University - Tanauan Campus
            </h3>
            <p
              className="mb-4 text-base font-normal text-foreground/60"
              data-aos="fade-left"
              data-aos-duration="300"
            >
              - Programmer of the year
            </p>
            <p
              className="mb-4 text-base font-normal text-foreground/60"
              data-aos="fade-left"
              data-aos-duration="400"
            >
              - Best in Capstone
            </p>
            <p
              className="mb-4 text-base font-normal text-foreground/60"
              data-aos="fade-left"
              data-aos-duration="500"
            >
              - Service Merit Award
            </p>
            <p
              className="mb-4 text-base font-normal text-foreground/60"
              data-aos="fade-left"
              data-aos-duration="600"
            >
              - Academic Exellence Awardee
            </p>
          </li>
          <li className="mb-10 ms-4">
            <div
              className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"
              data-aos="new-animation"
              data-aos-once="false"
            ></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              March 2022
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Burauen Comprehensive National High School (Senior High School)
            </h3>

            <p
              className="mb-4 text-base font-normal text-foreground/60"
              data-aos="fade-left"
              data-aos-duration="700"
            >
              - Supreme Student Government (volunteer)
            </p>
          </li>
          <li className="mb-10 ms-4">
            <div
              className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"
              data-aos="new-animation"
              data-aos-once="false"
            ></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              March 2022
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Burauen National High School (Junior High School)
            </h3>
            {/* <p className="text-base font-normal text-foreground/60">
							All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.
						</p> */}
          </li>
          <li className="ms-4">
            <div
              className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"
              data-aos="new-animation"
              data-aos-once="false"
            ></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              April 2022
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Burabod Elementary School
            </h3>
            {/* <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p> */}
          </li>
        </ol>
      </div>
    </div>
  );
}
