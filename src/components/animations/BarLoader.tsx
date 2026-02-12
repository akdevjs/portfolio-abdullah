import { motion, Variants } from "framer-motion";
import React from "react";

export default function BarLoader() {
  const variants: Variants = {
    initial: {
      scaleY: 0.5,
      opacity: 0,
    },
    animate: {
      scaleY: 1,
      opacity: 1,
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 1,
        ease: "circIn",
      },
    },
  };

  return (
    <motion.div
      transition={{
        staggerChildren: 0.25,
      }}
      initial="initial"
      animate="animate"
      className="flex gap-1"
    >
      <motion.div
        variants={variants}
        className="h-12 w-2 bg-indigo-500 dark:bg-orange-500 transition-colors duration-300"
      />
      <motion.div
        variants={variants}
        className="h-12 w-2 bg-indigo-500 dark:bg-orange-500 transition-colors duration-300"
      />
      <motion.div
        variants={variants}
        className="h-12 w-2 bg-indigo-500 dark:bg-orange-500 transition-colors duration-300"
      />
      <motion.div
        variants={variants}
        className="h-12 w-2 bg-indigo-500 dark:bg-orange-500 transition-colors duration-300"
      />
      <motion.div
        variants={variants}
        className="h-12 w-2 bg-indigo-500 dark:bg-orange-500 transition-colors duration-300"
      />
    </motion.div>
  );
}
