import React from "react";
import { Icon } from "@iconify/react";
import reactIcon from "@iconify/icons-logos/react";
import tailwindcssIcon from "@iconify/icons-logos/tailwindcss-icon";
import framerIcon from "@iconify/icons-logos/framer";
import nextjsIcon from "@iconify/icons-devicon/nextjs-wordmark";
import javascriptIcon from "@iconify/icons-logos/javascript";
import typeScriptIcon from "@iconify/icons-logos/typescript-icon";
import nodejsIcon from "@iconify/icons-devicon/nodejs";
import graphqlIcon from "@iconify/icons-logos/graphql";
import reactNativeIcon from "@iconify/icons-tabler/brand-react-native";
import pythonIcon from "@iconify/icons-logos/python";
import expoIcon from "@iconify/icons-logos/expo";
import materialIcon from "@iconify/icons-logos/material-ui";

const skills = [
  <a
    href="https://www.javascript.com"
    className="focus:outline-none"
    target="_blank"
    rel="noreferrer"
  >
    <Icon className="text-5xl" icon={javascriptIcon} />
  </a>,
  <a
    href="https://www.typescriptlang.org/"
    className="focus:outline-none"
    target="_blank"
    rel="noreferrer"
  >
    <Icon className="text-5xl" icon={typeScriptIcon} />
  </a>,
  <a
    href="https://www.python.org/"
    className="focus:outline-none"
    target="_blank"
    rel="noreferrer"
  >
    <Icon className="text-5xl" icon={pythonIcon} />
  </a>,
  <a
    href="https://reactjs.org"
    className="focus:outline-none"
    target="_blank"
    rel="noreferrer"
  >
    <Icon className="text-5xl" icon={reactIcon} />
  </a>,
  <a
    href="https://reactnative.dev"
    className="focus:outline-none hover:text-cyan-500"
    target="_blank"
    rel="noreferrer"
  >
    <Icon className="text-5xl" icon={reactNativeIcon} />
  </a>,
  <a
    href="https://nextjs.org"
    className="focus:outline-none"
    target="_blank"
    rel="noreferrer"
  >
    <Icon className="text-6xl" icon={nextjsIcon} />
  </a>,
  <a
    href="https://docs.expo.dev/"
    className="focus:outline-none"
    target="_blank"
    rel="noreferrer"
  >
    <Icon className="text-2xl" icon={expoIcon} />
  </a>,
  <a
    href="https://nodejs.org/en"
    className="focus:outline-none"
    target="_blank"
    rel="noreferrer"
  >
    <Icon className="text-5xl" icon={nodejsIcon} />
  </a>,
  <a
    href="https://graphql.org"
    className="focus:outline-none"
    target="_blank"
    rel="noreferrer"
  >
    <Icon className="text-5xl" icon={graphqlIcon} />
  </a>,
  <a
    href="https://tailwindcss.com"
    className="focus:outline-none"
    target="_blank"
    rel="noreferrer"
  >
    <Icon className="text-4xl" icon={tailwindcssIcon} />
  </a>,
  <a
    href="https://mui.com/material-ui/"
    className="focus:outline-none"
    target="_blank"
    rel="noreferrer"
  >
    <Icon className="text-4xl" icon={materialIcon} />
  </a>,
  <a
    href="https://framer.com"
    className="focus:outline-none"
    target="_blank"
    rel="noreferrer"
  >
    <Icon className="text-4xl" icon={framerIcon} />
  </a>,
];

export default skills;
