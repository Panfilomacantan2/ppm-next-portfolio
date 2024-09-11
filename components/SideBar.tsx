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
import { useNavStore } from "@/store/nav";
import { LogOut, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useEffect, useState } from "react";

export function SideBar() {
  const pathname = usePathname();
  const { active, setActive } = useNavStore((state) => state);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const hash = window.location.hash;

    if (hash) {
      const element = document.getElementById(hash.substring(1)); // Remove the '#' from the hash
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setActive(hash); // Store the full hash including '#'
      }
    }
  }, [pathname, setActive]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (active) {
      const element = document.querySelector(active);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [active]);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(`#${entry.target.id}`);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="ml-2 cursor-pointer lg:hidden">
          <Menu size={30} />
        </div>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetTitle>panfilo.dev</SheetTitle>
        <nav className="mt-10 flex flex-col space-y-2">
          {NavLinks.map((link, idx) => {
            const isActive = active === link.route;

            return (
              <Link
                key={link.route}
                className={cn(
                  "flex max-w-fit border-b-2 border-transparent text-lg transition-colors hover:border-gray-100 hover:text-gray-900 dark:hover:border-sky-800 dark:hover:text-sky-50 focus:ring-0 active:ring-0 active:outline-none focus:outline-none focus:ring-transparent focus:outline-transparent",
                  {
                    "border-sky-500 dark:border-sky-500": isActive,
                  },
                )}
                href={link.route}
                onClick={() => setActive(link.route)}
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
