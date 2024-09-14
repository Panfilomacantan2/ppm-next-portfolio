"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";

import ScrollspyNav from "react-scrollspy-nav";

export function SideBar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="ml-2 cursor-pointer lg:hidden">
          <Menu size={30} />
        </div>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetTitle>panfilo.dev</SheetTitle>

        <ScrollspyNav
          scrollTargetIds={[
            "home",
            "about-me",
            "projects",
            "contact",
            "testimonials",
          ]}
          offset={0}
          activeNavClass="is-active"
          scrollDuration="1000"
          headerBackground="false"
        >
          <nav className="mt-10 flex flex-col space-y-2">
            {NavLinks.map((link) => {
              return (
                <Link
                  key={link.route}
                  className={cn(
                    "max-w-fit border-b-2 border-transparent text-lg transition-colors hover:border-gray-100 hover:text-gray-900 dark:hover:border-sky-800 dark:hover:text-sky-50",
                    {},
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
        </ScrollspyNav>
      </SheetContent>
    </Sheet>
  );
}
