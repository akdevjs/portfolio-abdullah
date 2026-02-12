import React, { ReactNode } from "react";
import classNames from "classnames";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
  as?: "button" | "a";
  href?: string;
  className?: string;
  buttonTarget?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function RoundedButton({
  children,
  as = "button",
  href = "",
  className,
  buttonTarget,
  onClick,
  type = "button",
}: Props) {
  const classes = classNames(
    "flex items-center justify-center h-12 px-12 shadow-lg hover:shadow-none transition-shadow text-md text-white bg-indigo-500 hover:bg-indigo-600 dark:bg-orange-500 dark:hover:bg-orange-600 font-bold rounded-full transform focus:outline-none focus:ring-2 ring-indigo-500 dark:ring-orange-500 ring-offset-2 transition-colors duration-300",
    className,
  );

  if (as === "button") {
    return (
      <motion.button
        type={type}
        whileHover={{ translateY: 10 }}
        whileTap={{ scale: 0.8 }}
        className={classes}
        onClick={onClick}
      >
        {children}
      </motion.button>
    );
  }

  return (
    <motion.a
      href={href}
      whileHover={{ translateY: 10 }}
      whileTap={{ scale: 0.8 }}
      className={classes}
      target={buttonTarget}
    >
      {children}
    </motion.a>
  );
}
