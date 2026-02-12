import Animated from "../../animations";
import { ContentText, RoundedButton } from "../../atoms";
import { SectionTitle } from "../../molecules";
import React from "react";
import AboutSectionProps from "../../organisms/About/types";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { forwardRef } from "react";

const About = forwardRef<HTMLElement | undefined, AboutSectionProps>(
  ({ title, content, className }: AboutSectionProps, ref) => {
    const controls = useAnimation();
    const [refView, inView] = useInView({
      threshold: 0.5,
    });

    useEffect(() => {
      if (inView) {
        controls.start("show");
      }
    }, [controls, inView]);

    return (
      <section
        id="about"
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
        <div className="grid grid-rows-2 mt-6 lg:grid-cols-3 lg:grid-rows-1">
          <Animated.FromDirection
            className="lg:col-span-2"
            from="left"
            animate={controls}
            custom={0}
            delay={1}
          >
            <Animated.Reveal
              from="left"
              animate={controls}
              custom={1}
              delay={1}
            >
              <ContentText className="lg:text-left">{content.text}</ContentText>
            </Animated.Reveal>
          </Animated.FromDirection>
          <div className="mx-auto mt-6 lg:mr-0 lg:ml-auto lg:mt-0">
            <Animated.FromDirection
              from="bottom"
              animate={controls}
              custom={1}
              delay={1}
            >
              <RoundedButton
                as="a"
                href={require("../../../assets/pdf/Abdullah.Resume.pdf")}
              >
                {"Download"} Resume
              </RoundedButton>
            </Animated.FromDirection>
          </div>
        </div>
      </section>
    );
  },
);

export default About;
