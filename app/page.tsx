'use client';

import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Home() {
	const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		console.log('Hello test');
	};
	return (
		<main className="flex min-h-screen p-5 lg:p-24">
			<Hero />
		</main>
	);
}
