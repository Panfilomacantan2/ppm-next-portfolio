import React, { ReactNode } from "react";

interface SectionHeadingProps {
  text: string;
  className?: string;
  children?: ReactNode;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  text,
  className,
  children,
}) => {
  return (
    <h1
      className={`text-center  mb-10 font-bold text-3xl bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent ${className}`}
    >
      {text}
      {children}
    </h1>
  );
};

export default React.memo(SectionHeading);
