import React from "react";
import { motion, SVGMotionProps, Variants } from "framer-motion";
import classNames from "classnames";

export default function TitleLine({
  className,
  ...props
}: SVGMotionProps<SVGElement>) {
  const variants: Variants = {
    show: {
      width: "100%",
    },
    hidden: {
      width: 0,
    },
  };

  return (
    <svg
      className={classNames({
        "w-20": true,
        "h-1": true,
        "text-indigo-600 dark:text-orange-500": true,
        "transition-colors duration-300": true,
        "mt-3": true,
        [className as any]: className as any, // Casting className to any
      })}
      fill="currentColor"
    >
      <motion.rect
        variants={variants}
        initial="hidden"
        animate="show"
        height="100%"
        {...props}
      />
    </svg>
  );
}
