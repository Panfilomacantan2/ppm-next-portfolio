'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { NavLinks } from '@/constants';
import { cn } from '@/lib/utils';
import { LogOut, Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, SearchSlash, FolderGit2, User, MessageCircle } from 'lucide-react';
import { IoHomeOutline } from 'react-icons/io5';

export function SideBar() {
	const pathname = usePathname();
	const icons = [IoHomeOutline];
	// todo: fixed the icons
	return (
		<Sheet>
			<SheetTrigger asChild>
				<div className="lg:hidden cursor-pointer">
					<Menu />
				</div>
			</SheetTrigger>
			<SheetContent side="left">
				<nav className="flex flex-col space-y-4">
					{NavLinks.map((link, idx) => {
						const isActive = pathname === link.route;
						return (
							<Link
								key={link.route}
								className={cn(
									'flex  max-w-fit text-sm font-medium border-b-2 border-transparent transition-colors hover:text-gray-900 hover:border-gray-100 dark:hover:text-sky-50 dark:hover:border-sky-800',
									{
										'border-sky-500 dark:border-sky-500': isActive,
									},
								)}
								href={link.route}
							>
								<SheetClose className="flex space-x-2 items-center">
									<IoHomeOutline />
									<p>{link.title}</p>
								</SheetClose>
							</Link>
						);
					})}
				</nav>

				<SheetFooter className="bottom-5 right-5 absolute">
					<SheetClose asChild>
						<LogOut />
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}
