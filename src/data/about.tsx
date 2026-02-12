import React from "react";
import { Icon } from "@iconify/react";
import { HighlightedTextIcon } from "../components/molecules";
import reactIcon from "@iconify/icons-logos/react";
import tailwindcssIcon from "@iconify/icons-logos/tailwindcss-icon";
import nextjsIcon from "@iconify/icons-logos/nextjs";

const aboutText = () => (
  <div className="cursor-default">
    I'm currently working as a{" "}
    <span className="font-bold text-gray-800 dark:text-gray-100 transition-colors duration-300">
      Software Engineer
    </span>{" "}
    at{" "}
    <span className="font-bold text-gray-800 dark:text-gray-100 transition-colors duration-300">
      LeetPros
    </span>
    . I enjoy building apps using
    <HighlightedTextIcon
      as="a"
      className="mx-2 cursor-default dark:text-white"
      icon={<Icon icon={nextjsIcon} />}
    >
      Next.js
    </HighlightedTextIcon>
    /{" "}
    <HighlightedTextIcon
      as="a"
      className="mx-2 cursor-default dark:text-white"
      icon={<Icon icon={reactIcon} />}
    >
      React
    </HighlightedTextIcon>
    /{" "}
    <HighlightedTextIcon
      as="a"
      className="mx-2 cursor-default dark:text-white"
      icon={<Icon icon={reactIcon} />}
    >
      React Native
    </HighlightedTextIcon>
    and{" "}
    <HighlightedTextIcon
      as="a"
      className="mx-2 cursor-default dark:text-white"
      icon={<Icon icon={tailwindcssIcon} />}
    >
      TailwindCSS
    </HighlightedTextIcon>{" "}
    . I'm currently learning Three.js and Generative AI. During my free time, I
    enjoy watching anime and eating food.
  </div>
);

export default aboutText;
