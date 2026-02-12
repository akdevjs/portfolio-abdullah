import React from "react";
import classNames from "classnames";
import { motion } from "framer-motion";
// import FullRoundButtonProps from 'components/atoms/FullRoundButton/types';
import FullRoundButtonProps from "../FullRoundButton/types";
import { useState } from "react";
import { useEffect } from "react";

export default function FullRoundButton({
  children,
  label,
  as = "button",
  href = "",
  className,
  animationComplete,
  active = false,
  onClick,
  buttonTarget,
}: FullRoundButtonProps) {
  const [animationFinish, setAnimationFinish] = useState(false);
  const classes = classNames(
    "flex items-center justify-center w-12 h-12 rounded-full focus:outline-none focus:ring-2 ring-indigo-500 dark:ring-orange-500 ring-offset-2",
    className,
    {
      "shadow-lg": animationComplete,
      "scale-75": animationComplete === false,
      "transition-all transform duration-500":
        animationComplete != null && !animationFinish,
      "bg-indigo-500 hover:bg-indigo-600 dark:bg-orange-500 dark:hover:bg-orange-600 text-white":
        !active,
      "bg-white dark:bg-gray-800 text-indigo-600 dark:text-orange-400": active,
    },
  );

  useEffect(() => {
    if (animationComplete) {
      setTimeout(() => {
        setAnimationFinish(true);
      }, 500);
    }
  }, [animationComplete]);

  if (as === "button") {
    return (
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        className={classes}
        onClick={onClick}
      >
        {children}
        <span className="sr-only">{label}</span>
      </motion.button>
    );
  }
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={classes}
      onClick={onClick}
      target={buttonTarget}
    >
      {children}
      <span className="sr-only">{label}</span>
    </motion.a>
  );
}
