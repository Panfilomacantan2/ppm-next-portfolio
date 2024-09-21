// import Resume from '../assets/macantan.panfilo.pdf';
import Link from "next/link";
import { Button } from "./ui/button";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import Section from "./Section";
import Tools from "./Tools";

export default function HeroPage() {
  return (
    <Section
      id="home"
      className={`flex min-h-screen w-full items-center justify-center`}
    >
      <div className="order-1 space-y-3 p-3 lg:order-2">
        <div className="flex flex-col items-center justify-center space-y-3">
          <h3 className={`text-center text-xl lg:text-2xl lg:font-medium`}>
            {" "}
            Hi!, I&apos;m Panfilo!
          </h3>

          <SectionHeading
            text="Software Developer"
            className="max-w-2xl lg:text-6xl"
          />
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="div"
        >
          <div className="flex flex-col items-center justify-center gap-2 space-y-4">
            <p
              className={`max-w-md text-center text-base text-foreground/80 md:text-lg`}
            >
              Frontend developer crafting captivating websites with frontend
              tools to deliver seamless user experiences and engaging
              interfaces.
            </p>

            <Tools length={6} />

            <div className="flex items-center justify-center gap-2">
              <Button asChild variant="secondary">
                <Link
                  href={""}
                  download
                  className="flex items-center justify-center rounded-sm px-5 py-2 text-sm font-medium shadow-sm"
                >
                  Download CV
                </Link>
              </Button>

              <Button
                asChild
                className={`flex items-center justify-center rounded-sm border px-5 py-2 text-sm font-medium`}
              >
                <Link href="#contact">Hire Me</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
