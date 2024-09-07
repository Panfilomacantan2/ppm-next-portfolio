import { tools } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const Tools = ({
  length,
  className,
}: {
  length?: number;
  className?: string;
}) => {
  // Limit to the items
  const limitedItems = tools.slice(0, length);
  return (
    <section className="container">
      <div
        className={cn("flex flex-shrink-0 flex-wrap justify-center gap-4", {
          className,
        })}
      >
        {limitedItems.map((tool, idx) => {
          return (
            <div key={idx}>
              <Image src={tool.icon} height={30} width={30} alt={tool.name} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Tools;
