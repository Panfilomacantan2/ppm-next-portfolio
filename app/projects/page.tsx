import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import Link from 'next/link';
import Image from 'next/image';
import project from '/public/assets/project.jpg';
import { ExternalLink, Github } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';

const ProjectPage = () => {
	return (
		<section className="min-h-screen container py-32">
			<h1 className="text-center mb-10 font-bold text-lg">Projects</h1>
			<div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
				{Array.from({ length: 6 }).map((_, idx) => {
					return (
						<HoverCard key={idx}>
							<HoverCardTrigger asChild>
								<Card className="hover:shadow-md hover:scale-105 ease-in transition-all duration-100 min-h-[200px] w-full">
									<CardHeader>
										<CardTitle className="text-sm">Project {idx + 1}</CardTitle>
									</CardHeader>
									<CardContent>
										<Image src={project} width={200} height={300} placeholder="blur" alt="project 1" className="rounded-sm" />
									</CardContent>
									<CardFooter className="flex justify-between items-center text-sm">
										<Button variant="secondary" asChild>
											<Link href="#" className="flex space-x-1 justify-center items-center">
												<Github size={16} />

												<p>Github</p>
											</Link>
										</Button>
										<Button asChild>
											<Link href="#" className="flex space-x-1 justify-center items-center">
												<ExternalLink size={16} />
												<p>Demo</p>
											</Link>
										</Button>
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
					);
				})}
			</div>
		</section>
	);
};

export default ProjectPage;
