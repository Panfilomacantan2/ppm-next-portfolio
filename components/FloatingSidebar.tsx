import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { IconHome } from "@tabler/icons-react";

import { FolderGit, MessageCircle, SearchSlash, User } from "lucide-react";

export default function FloatingSidebar() {
  const links = [
    {
      title: "Home",
      icon: <IconHome className="text-foreground/70" />,
      href: "#home",
    },

    {
      title: "About",
      icon: <SearchSlash className="text-foreground/70" />,
      href: "#about-me",
    },
    {
      title: "Projects",
      icon: <FolderGit className="text-foreground/70" />,
      href: "#projects",
    },
    {
      title: "Contact",
      icon: <User className="text-foreground/70" />,
      href: "#contact",
    },
    {
      title: "Testimonial",
      icon: <MessageCircle className="text-foreground/70" />,
      href: "#testimonials",
    },
  ];
  return (
    <div className="fixed bottom-7 right-3 z-50 flex items-center justify-center">
      <FloatingDock items={links} />
    </div>
  );
}
