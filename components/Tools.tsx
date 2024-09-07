import { tools } from "@/constants";
import Image from "next/image";
import React from "react";

const Tools = () => {
  return (
    <section className="container">
      <div className="flex flex-shrink-0 flex-wrap justify-center gap-4">
        {tools.map((tool, idx) => {
          return (
            <div key={idx}>
              <Image src={tool.icon} height={30} width={30} alt="nextjs" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Tools;
