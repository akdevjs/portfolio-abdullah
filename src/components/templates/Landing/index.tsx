import { Container, ThemeToggle } from "../../atoms";
import {
  About,
  Contact,
  Header,
  Projects,
  Skills,
} from "../../organisms";
import { AboutSectionContentProps } from "../../organisms/About/types";
import { ContactSectionContentProps } from "../../organisms/Contact/types";
import HeaderProps from "../../organisms/Header/types";
import { ProjectsSectionContentProps } from "../../organisms/Projects/types";
import { SkillsSectionContentProps } from "../../organisms/Skills/types";
import React, { useRef } from "react";
import Decorations from "../../decorations";
import { useTheme } from "../../../contexts";
import Signature from "../../../assets/img/signature-copy.png";
import SignatureLight from "../../../assets/img/signature-copy-light.png";

interface Props {
  data: {
    header: HeaderProps;
    about: AboutSectionContentProps;
    projects: ProjectsSectionContentProps;
    skills: SkillsSectionContentProps;
    contact: ContactSectionContentProps;
  };
  sections: {
    about: string;
    projects: string;
    skills: string;
    contact: string;
  };
}

export default function Landing({ data, sections }: Props) {
  const { header, about, projects, skills, contact } = data;
  const { theme } = useTheme();
  const lowerSectionRef = useRef();

  // Theme-aware colors for Liquid Ether
  const liquidColors =
    theme === "dark"
      ? ["#5227FF", "#FF9FFC", "#B19EEF"] // Vibrant colors for dark mode
      : ["#E0E7FF", "#FCE7F3", "#F3E8FF"]; // Soft, light colors for light mode

  return (
    <div className="overflow-hidden bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
      {/* Liquid Ether Background */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none opacity-60 dark:opacity-80 transition-opacity duration-300">
        <Decorations.LiquidEther
          key={theme}
          colors={liquidColors}
          mouseForce={10}
          cursorSize={60}
          resolution={0.12}
          iterationsPoisson={8}
          iterationsViscous={8}
          isViscous={false}
          BFECC={false}
          dt={0.02}
          autoDemo={false}
          autoSpeed={0.3}
          autoIntensity={1.5}
        />
      </div>
      <header className="fixed z-10 top-0 left-0 right-0">
        <Container className="flex items-center justify-between py-6">
          <img
            src={theme === "dark" ? SignatureLight : Signature}
            alt="signature"
            className="w-28 transition-all duration-300"
          />
          <ThemeToggle />
        </Container>
      </header>
      <Container className="pt-32">
        <div className="flex flex-wrap">
          <main className="w-full mt-12">
            <Header
              data={header.data}
              text={header.text}
              lowerSectionRef={lowerSectionRef}
            />
            <About
              title={sections.about}
              content={{
                text: about.text,
              }}
              className="pt-32 mt-24"
              ref={lowerSectionRef}
            />
            <Projects
              title={sections.projects}
              content={{
                items: projects.items,
              }}
              className="pt-12 mt-40"
            />
            <Skills
              title={sections.skills}
              content={{ text: skills.text, items: skills.items }}
              className="pt-24 mt-28"
            />
          </main>
          <footer className="w-full pt-20 pb-16 mt-32">
            <Contact
              title={sections.contact}
              content={{
                email: contact.email,
                socials: contact.socials,
              }}
            />
          </footer>
        </div>
      </Container>
    </div>
  );
}
