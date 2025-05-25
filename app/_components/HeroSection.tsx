"use client";

import { motion } from "motion/react";
import { ArrowRightIcon } from "lucide-react";

import GradientButton from "../../components/ui/GradientButton";
import VerticalCutReveal from "@/components/vertical-cut";

export default function HeroSection() {
  return (
    <section className="container my-10 md:my-14 lg:my-20 grid grid-rows-[max-content_auto] grid-cols-1 lg:grid-cols-[1fr_0.7fr] gap-y-8">
      <div>
        <h1>
          <VerticalCutReveal
            splitBy="characters"
            staggerDuration={0.025}
            staggerFrom="first"
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 21,
            }}
            containerClassName="heading-gradient  text-black lg:max-w-2xl justify-center lg:justify-start"
          >
            {`Your All-in-one\n Solution for Growth`}
          </VerticalCutReveal>
        </h1>
        <div className="mt-10 lg:mt-8 flex items-center gap-6 w-full justify-center lg:justify-start">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <GradientButton>Connect With Us</GradientButton>
          </motion.div>
          <motion.button
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="underline font-semibold underline-offset-2 flex items-center gap-1.5 group"
          >
            Calculate Savings{" "}
            <ArrowRightIcon
              className="transition-transform duration-150 group-hover:translate-x-1"
              size={16}
            />
          </motion.button>
        </div>
      </div>
      <div className="flex p-5 items-center justify-center text-center">
        <p className="text-neutral-500 text-lg">
          <VerticalCutReveal
            splitBy="words"
            staggerDuration={0.025}
            staggerFrom="last"
            reverse={true}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 21,
              delay: 0.5,
            }}
          >
            Highlight how your software helps businesses focus on growth by
            automating HR and payroll, making it simpler and efficient
          </VerticalCutReveal>
        </p>
      </div>
    </section>
  );
}
