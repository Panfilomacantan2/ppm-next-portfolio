import { Card, CardContent, CardFooter } from "@/components/ui/card";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { projectLists } from "@/constants";
import { ShootingStars } from "@/components/ui/shooting-stars";
import Section from "./Section";

export default function ProjectPage() {
  return (
    <Section id="projects" className="py-32">
      <SectionHeading text="Projects" className="my-10" />
      <div className="grid grid-cols-1 gap-8 px-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:px-28 xl:grid-cols-3">
        {projectLists.map((proj, idx) => (
          <Card
            key={idx}
            className="h-auto w-full overflow-hidden rounded-md border transition-all duration-100 ease-in hover:border-border hover:shadow-md"
          >
            <CardContent className="w-full p-0">
              <div className="relative h-[200px] w-full border-b border-border">
                <Image
                  src={proj.imageSrc}
                  placeholder="blur"
                  blurDataURL={proj.imageSrc}
                  alt={`project ${idx + 1}`}
                  className="h-full w-full object-center"
                  width={320}
                  height={200}
                />
              </div>

              <div className="p-4">
                <h2 className="text-base font-medium">{proj.title}</h2>
                <div className="w-full flex flex-wrap">
                  {proj.stack.map((stack) => (
                    <span
                      key={stack}
                      className="mr-2 text-sm text-foreground/60"
                    >
                      <span className="text-sky-500">#</span>{stack}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-500">{proj.description}</p>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col text-sm">
              <div className="mt-5 flex w-full items-center justify-between text-sm">
                <Button variant="secondary" asChild className="cursor-pointer">
                  <Link
                    href={proj.githubUrl}
                    className="flex cursor-pointer items-center justify-center space-x-1"
                    target="_blank"
                  >
                    <Github size={16} />
                    <p>Github</p>
                  </Link>
                </Button>
                <Button asChild>
                  <Link
                    href={proj.demoUrl}
                    className="flex cursor-pointer items-center justify-center space-x-1"
                    target="_blank"
                  >
                    <ExternalLink size={16} />
                    <p>Demo</p>
                  </Link>
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
}
