import { Card, CardContent, CardFooter } from '@/components/ui/card';
import React from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import Link from 'next/link';
import Image from 'next/image';
import project from '/public/assets/project.jpg';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/SectionHeading';
import { AnimatedTooltipPreview } from '@/components/ProjectTools';
import { projectLists } from '@/constants';

const ProjectPage = () => {
	return (
		<section className="min-h-screen container py-32">
			<SectionHeading text="Projects" className="my-10" />
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
				{projectLists.map((proj, idx) => (
					<HoverCard key={idx}>
						<HoverCardTrigger asChild>
							<Card className="hover:shadow-md hover:scale-105 ease-in transition-all duration-100  w-full">
								<CardContent className="p-0 w-full">
									<div className="relative w-full h-40">
										<Image
											src={'/assets/proj_yd.png'}
											placeholder="blur"
											blurDataURL={proj.imageSrc}
											alt={`project ${idx + 1}`}
											className="h-full rounded-sm grayscale hover:grayscale-0"
											fill={true}
										/>
									</div>
								</CardContent>
								<CardFooter className="flex flex-col justify-start items-start text-sm">
									<div>
										<h3 className="my-2">Tech Used</h3>
										<AnimatedTooltipPreview />
									</div>
									<div className="w-full flex justify-between items-center text-sm">
										<Button variant="secondary" asChild>
											<Link href={proj.githubUrl} className="flex space-x-1 justify-center items-center" target="_blank">
												<Github size={16} />
												<p>Github</p>
											</Link>
										</Button>
										<Button asChild>
											<Link href={proj.demoUrl} className="flex space-x-1 justify-center items-center" target="_blank">
												<ExternalLink size={16} />
												<p>Demo</p>
											</Link>
										</Button>
									</div>
								</CardFooter>
							</Card>
						</HoverCardTrigger>
						<HoverCardContent>
							<div className="p-px">
								<h1 className="text-sm font-bold">Project {idx + 1}</h1>
								<p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium ipsa maiores.</p>
								<h3 className="text-sm font-bold">Stack used</h3>
								<div className="flex space-x-2 text-xs">
									<span>React</span>
									<span>Next.js</span>
									<span>Typescript</span>
								</div>
							</div>
						</HoverCardContent>
					</HoverCard>
				))}
			</div>
		</section>
	);
};

export default ProjectPage;
