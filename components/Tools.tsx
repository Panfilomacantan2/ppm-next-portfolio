import Image from 'next/image';
import React from 'react';

const Tools = () => {
	return (
		<section className="container">
			<h1 className="text-center font-bold text-lg">Tools</h1>

			<p className="text-center my-5 dark:text-gray-400">These are the tools that I mostly used in all my projects!</p>

			<div className="flex justify-center flex-shrink-0 flex-wrap gap-4">
				{Array.from({ length: 6 }).map((_, idx) => {
					return (
						<div key={idx}>
							<Image src="/assets/nextjs-original.svg" height={50} width={50} alt="nextjs" />
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Tools;
