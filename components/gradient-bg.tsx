"use client";

import * as React from "react";
import { HTMLMotionProps, motion, type Transition } from "motion/react";

import { cn } from "@/components/lib/utils";

interface GradientBackgroundProps extends HTMLMotionProps<"div"> {
  transition?: Transition;
}

const GradientBackground = React.forwardRef<
  HTMLDivElement,
  GradientBackgroundProps
>(
  (
    {
      className,
      transition = { duration: 15, ease: "easeInOut", repeat: Infinity },
      ...props
    },
    ref
  ) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          "size-full bg-linear-to-br  bg-size-[400%_400%]",
          className
        )}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={transition}
        {...props}
      />
    );
  }
);

GradientBackground.displayName = "GradientBackground";

export { GradientBackground, type GradientBackgroundProps };
