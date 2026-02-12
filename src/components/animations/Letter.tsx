import React from "react";
import { motion, Variants, HTMLMotionProps } from "framer-motion";

interface Props extends Omit<HTMLMotionProps<"div">, "ref"> {
  text: string;
  delay?: number;
  duration?: number;
  showColor?: boolean;
}

export default function Letter({
  text,
  delay = 0,
  duration = 0.05,
  showColor = false,
  ...props
}: Props) {
  const letters = Array.from(text);

  const container: Variants = {
    hidden: {
      opacity: 0,
    },
    show: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: i * delay },
    }),
  };

  const child: Variants = {
    show: {
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
      },
    },
    hidden: {
      y: "100%",
    },
  };

  return (
    <motion.div
      className="flex overflow-hidden"
      variants={container}
      initial="hidden"
      animate="show"
      {...props}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          className={`${showColor ? "text-indigo-500 dark:text-orange-400 transition-colors duration-300" : ""}`}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
}
