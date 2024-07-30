import React from 'react';

export function GridBackgroundDemo({ children }: { children: React.ReactNode }) {
	return (
		<div className="h-screen w-full   dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
			{/* Radial gradient for the container to give a faded look */}
			<div className="top-0  left-0 absolute pointer-events-none inset-0 flex items-center justify-center transparent [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
			{children}
		</div>
	);
}
