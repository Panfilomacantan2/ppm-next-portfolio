import React, { ReactNode } from 'react';
import { TypewriterEffectSmooth } from './ui/typewriter-effect';

interface SectionHeadingProps {
	text: string;
	className?: string;
	children?: ReactNode;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ text, className, children }) => {
	const words = text
		.split(' ')
		.map((word) => ({
			text: word,
			className: 'bg-gradient-to-r from-cyan-500 to-blue-500  dark:from-cyan-500 dark:to-blue-500 bg-clip-text dark:bg-clip-text text-transparent dark:text-transparent',
		}));

	// console.log(words);

	return (
		<div className="flex justify-center ">
			<TypewriterEffectSmooth words={words} className={className} />
		</div>
	);
};

export default React.memo(SectionHeading);
