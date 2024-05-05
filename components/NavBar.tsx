'use client';

import Link from 'next/link';
import { NavLinks } from '@/constants';
import ModeToggle from './ToggleDarkMode';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { SideBar } from './SideBar';

export default function NavBar() {
	const pathname = usePathname();
	const router = useRouter();

	return (
		<nav className="container fixed inset-x-0 top-0 z-50 bg-white shadow dark:bg-gray-950">
			<div className="">
				<div className="flex h-16 items-center">
					<Link className="mr-auto flex items-center gap-2 text-lg font-semibold" href="/">
						{/* <Image src={Logo} alt="logo" width={50} height={50} /> */}
						<span className="text-sm">
							PANFILO<span className="text-sky-500">.DEV</span>
						</span>
					</Link>
					<nav className="ml-auto flex items-center space-x-3">
						{NavLinks.map((link) => {
							const isActive = pathname === link.route;
							return (
								<Link
									key={link.route}
									className={cn(
										'hidden lg:flex font-medium text-sm border-b-2 border-transparent transition-colors hover:text-gray-900 hover:border-gray-100 dark:hover:text-sky-50 dark:hover:border-sky-800',
										{
											'border-sky-500 dark:border-sky-500': isActive,
										},
									)}
									href={link.route}
								>
									{link.title}
								</Link>
							);
						})}

						<ModeToggle />

						<SideBar />
					</nav>
				</div>
			</div>
		</nav>
	);
}
