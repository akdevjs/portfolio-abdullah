import { SectionTitle } from "../../molecules";
import React, { useEffect } from "react";
import { SectionVariants } from "../../molecules/SectionTitle";
import { RoundedButton } from "../../atoms";
import ProjectCard from "../../molecules/ProjectCard";
import Decorations from "../../decorations";
import ProjectsSectionProps from "../../organisms/Projects/types";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Animated from "../../animations";
import { forwardRef } from "react";

const Projects = forwardRef<HTMLElement | undefined, ProjectsSectionProps>(
  ({ title, content, className }: ProjectsSectionProps, ref) => {
    const controls = useAnimation();
    const [refView, inView] = useInView({
      threshold: 0.4,
    });
    const items = content.items.slice(0, 4);

    const bulletsClasses = "w-32 h-32 text-indigo-300 md:w-40 md:h-40";

    useEffect(() => {
      if (inView) {
        controls.start("show");
      }
    }, [controls, inView]);

    return (
      <section
        id="projects"
        className={className}
        ref={(section) => {
          refView(section);
          if (ref) {
            if (typeof ref === "function") {
              ref(section);
            } else {
              ref.current = section;
            }
          }
        }}
      >
        <SectionTitle
          variant={SectionVariants.CENTER}
          lineProps={{
            animate: controls,
            custom: 1,
            transition: {
              delay: 1,
            },
          }}
        >
          <Animated.Letter
            text={title}
            animate={controls}
            custom={0}
            delay={1}
          />
        </SectionTitle>
        <div className="relative grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 max-w-4xl mx-auto">
          <Animated.FromDirection
            from="top"
            animate={controls}
            custom={1}
            delay={1}
            className="absolute -top-8 -left-12 md:-top-9 md:-left-16 -z-10"
          >
            <Decorations.Bullets className={bulletsClasses} />
          </Animated.FromDirection>
          <Animated.FromDirection
            from="bottom"
            animate={controls}
            custom={1}
            delay={1}
            className="absolute -bottom-8 -right-12 md:-bottom-9 md:-right-16 -z-10"
          >
            <Decorations.Bullets className={bulletsClasses} />
          </Animated.FromDirection>
          {items.map((item, index) => (
            <Animated.FadeIn
              key={index}
              animate={controls}
              custom={index}
              delay={0.2}
            >
              <ProjectCard
                data={item}
                className="h-full transition-all transform hover:shadow-lg hover:scale-105 focus-within:scale-105 focus-within:shadow-lg"
              />
            </Animated.FadeIn>
          ))}
        </div>

        <Animated.FromDirection
          className="flex justify-center mt-8"
          from="bottom"
          animate={controls}
          custom={2}
          delay={1}
        >
          <RoundedButton
            as="a"
            href="https://github.com/akdevjs"
            buttonTarget="_blank"
          >
            {"See more"}
          </RoundedButton>
        </Animated.FromDirection>
      </section>
    );
  },
);

export default Projects;
