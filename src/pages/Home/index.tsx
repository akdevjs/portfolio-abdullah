import { Landing } from "../../components/templates";
import {
  header as headerData,
  headerText,
  aboutText,
  skillsText,
  sections,
  projects as projectsData,
  skills as skillsData,
  contact as contactData,
} from "../../data";
import React from "react";
import Animated from "../../components/animations";

export default function Home() {
  return (
    <Animated.PageTransition>
      <Landing
        sections={sections}
        data={{
          header: {
            data: headerData,
            text: headerText,
          },
          about: {
            text: aboutText(),
          },
          projects: {
            items: projectsData,
          },
          skills: {
            text: skillsText(),
            items: skillsData,
          },
          contact: contactData,
        }}
      />
    </Animated.PageTransition>
  );
}
