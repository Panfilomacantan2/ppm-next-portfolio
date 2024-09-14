"use client";

import Link from "next/link";
import { NavLinks } from "@/constants";
import { ModeToggle } from "./ToggleDarkMode";
import { SideBar } from "./SideBar";
import ScrollspyNav from "react-scrollspy-nav";
import { cn } from "@/lib/utils";

export default function NavBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white shadow dark:bg-gray-950 lg:px-20">
      <div className="container px-4 md:px-6">
        <div className="flex h-16 items-center">
          <Link
            className="mr-auto flex items-center gap-2 text-lg font-semibold"
            href="#home"
          >
            {/* <Image src={Logo} alt="logo" width={50} height={50} /> */}
            <span className="text-lg">
              Panfilo<span className="text-sky-500">.dev</span>
            </span>
          </Link>

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
            <nav className="ml-auto flex items-center space-x-4">
              {NavLinks.map((link) => {
                return (
                  <Link
                    key={link.route}
                    className={cn(
                      "hidden border-b-2 border-transparent text-lg transition-colors hover:border-gray-100 hover:text-gray-900 dark:hover:border-sky-800 dark:hover:text-sky-50 lg:flex",
                      {},
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
          </ScrollspyNav>
        </div>
      </div>
    </header>
  );
}
