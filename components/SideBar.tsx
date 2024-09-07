"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { LogOut, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  SearchSlash,
  FolderGit2,
  User,
  MessageCircle,
} from "lucide-react";
import { IoHomeOutline } from "react-icons/io5";
import { Tabs } from "./ui/tabs";
import { SideBarTabs } from "./ui/sidebar-tabs";

export function SideBar() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="ml-2 cursor-pointer lg:hidden">
          <Menu size={30} />
        </div>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetTitle>panfilo.dev</SheetTitle>
        <nav className="flex flex-col space-y-2 mt-10">
          {NavLinks.map((link, idx) => {
            const isActive = pathname === link.route;
            return (
              <Link
                key={link.route}
                className={cn(
                  "flex max-w-fit border-b-2 border-transparent text-lg transition-colors hover:border-gray-100 hover:text-gray-900 dark:hover:border-sky-800 dark:hover:text-sky-50",
                  {
                    "border-sky-500 dark:border-sky-500": isActive,
                  },
                )}
                href={link.route}
              >
                <SheetClose className="flex items-center space-x-2">
                  <p>{link.title}</p>
                </SheetClose>
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
