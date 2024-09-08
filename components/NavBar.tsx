"use client";

import Link from "next/link";
import { NavLinks } from "@/constants";
import { ModeToggle } from "./ToggleDarkMode";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { LogOut } from "lucide-react";
import { SideBar } from "./SideBar";

export default function NavBar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow dark:bg-gray-950 lg:px-20">
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
          <nav className="ml-auto flex items-center space-x-4">
            {NavLinks.map((link) => {
              const isActive = pathname === link.route;
              return (
                <Link
                  key={link.route}
                  className={cn(
                    "hidden border-b-2 border-transparent text-lg transition-colors hover:border-gray-100 hover:text-gray-900 dark:hover:border-sky-800 dark:hover:text-sky-50 lg:flex",
                    {
                      "border-sky-500 dark:border-sky-500": isActive,
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
