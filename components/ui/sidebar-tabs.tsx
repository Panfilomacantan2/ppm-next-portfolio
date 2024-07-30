'use client';

import { useEffect, useState, useTransition } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import { SheetClose } from './sheet';
import { usePathname } from 'next/navigation';

type Tab = {
	title: string;
	value: string;
	content?: string | React.ReactNode | any;
	route: string;
};

export const SideBarTabs = ({
	tabs: propTabs,
	containerClassName,
	activeTabClassName,
	tabClassName,
	contentClassName,
}: {
	tabs: Tab[];
	containerClassName?: string;
	activeTabClassName?: string;
	tabClassName?: string;
	contentClassName?: string;
}) => {
	const [active, setActive] = useState<Tab>(propTabs[0]);
	const [tabs, setTabs] = useState<Tab[]>(propTabs);
	const [isPending, startTransition] = useTransition();

	const moveSelectedTabToTop = (idx: number) => {
		const newTabs = [...propTabs];
		const selectedTab = newTabs.splice(idx, 1);
		newTabs.unshift(selectedTab[0]);

		startTransition(() => {
			setTabs(newTabs);
			setActive(newTabs[0]);
		});
	};

	const [hovering, setHovering] = useState(false);

	// i want to higlight the active pathname
	const pathname = usePathname();

	useEffect(() => {
		const index = tabs.findIndex((tab) => tab.route === pathname);
		// console.log(index);
		setActive(tabs[index]);
	}, [active, tabs, pathname]);

	return (
		<>
			<div className={cn('flex flex-col items-start justify-start [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full', containerClassName)}>
				{propTabs.map((tab, idx) => {
					return (
						<Link
							key={tab.route}
							href={tab.route}
							onClick={() => {
								moveSelectedTabToTop(idx);
							}}
							onMouseEnter={() => setHovering(true)}
							onMouseLeave={() => setHovering(false)}
							className={cn('flex flex-col relative px-4 py-2 rounded-full ', tabClassName)}
							style={{
								transformStyle: 'preserve-3d',
							}}
						>
							{active.value === tab.value && (
								<motion.div
									layoutId="clickedbutton"
									transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
									className={cn('absolute inset-0 bg-gray-200 dark:bg-zinc-800 rounded-md ', activeTabClassName)}
								/>
							)}
							<SheetClose asChild>
								<span className="relative block text-black dark:text-white">{tab.title}</span>
							</SheetClose>
						</Link>
					);
				})}
			</div>
			<FadeInDiv tabs={tabs} active={active} key={active.value} hovering={hovering} className={cn('mt-32', contentClassName)} />
		</>
	);
};

export const FadeInDiv = ({ className, tabs, hovering }: { className?: string; key?: string; tabs: Tab[]; active: Tab; hovering?: boolean }) => {
	const isActive = (tab: Tab) => {
		return tab.value === tabs[0].value;
	};
	return (
		<div className="relative w-full h-full">
			{tabs.map((tab, idx) => (
				<motion.div
					key={tab.value}
					layoutId={tab.value}
					style={{
						scale: 1 - idx * 0.1,
						top: hovering ? idx * -50 : 0,
						zIndex: -idx,
						opacity: idx < 3 ? 1 - idx * 0.1 : 0,
					}}
					animate={{
						y: isActive(tab) ? [0, 40, 0] : 0,
					}}
					className={cn('w-full h-full absolute top-0 left-0', className)}
				>
					{tab.content}
				</motion.div>
			))}
		</div>
	);
};
