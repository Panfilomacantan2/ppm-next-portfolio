'use client';
import React from 'react';
import { AnimatedTooltip } from './ui/animated-tooltip';

const people = [
	{
		id: 1,
		name: 'NextJs',
		image: '/assets/nextjs-original.svg',
	},
	{
		id: 2,
		name: 'CSS',
		image: '/assets/css3-original.svg',
	},
	{
		id: 3,
		name: 'ReactJs',
		image: '/assets/react-original.svg',
	},
	{
		id: 4,
		name: 'TailwindCss',
		image: '/assets/tailwindcss-original.svg',
	},
	{
		id: 5,
		name: 'HTML5',
		image: '/assets/html5-original.svg',
	},
];

export function AnimatedTooltipPreview() {
	return (
		<div className="flex flex-row items-center justify-center mb-10 w-full">
			<AnimatedTooltip items={people} />
		</div>
	);
}
