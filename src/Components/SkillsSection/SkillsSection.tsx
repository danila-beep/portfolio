import React, { memo, useEffect, useRef } from "react";
import s from "./skillsSection.module.css";
import Heading from "../../shared/Heading";
import { SectionWrapper } from "../../shared/SectionWrapper";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SectionType } from "../../App";

const SkillsSection = memo((props: SectionType) => {


  const [ref, inView] = useInView();
  const html = useAnimation();
  const css = useAnimation();
  const js = useAnimation();
  const react = useAnimation();
  const rest = useAnimation();

  useEffect(() => {
    if (inView) {
      html.start({
        width: "100%",
        transition: { type: "keyframes", duration: 3 },
      });
      css.start({
        width: "100%",
        transition: { type: "keyframes", duration: 3 },
      });
      js.start({
        width: "80%",
        transition: { type: "keyframes", duration: 3 },
      });
      react.start({
        width: "70%",
        transition: { type: "keyframes", duration: 3 },
      });
      rest.start({
        width: "70%",
        transition: { type: "keyframes", duration: 3 },
      });
    }
    if (!inView) {
      html.start({ width: "1%" });
      css.start({ width: "1%" });
      js.start({ width: "1%" });
      react.start({ width: "1%" });
      rest.start({ width: "1%" });
    }

  }, [inView, html, css, react, js, rest]);


  return (
    <SectionWrapper id={props.hrefId} ref={ref} invertedColor>
      <div className={s.skillsContainer}>
        <Heading centered>
          My <span>skills</span>
        </Heading>

        <div className={s.skillsRow}>
          <div className={s.skillsColumn}>
            <h3 className={s.title}>Coding skills</h3>

            <div className={s.skillsBox}>
              <div className={s.skillsContent}>
                <div className={s.progress}>
                  <h3>
                    Html <span>100%</span>
                  </h3>
                  <div className={s.bar}>
                    <motion.span animate={html} />
                  </div>
                </div>
                <div className={s.progress}>
                  <h3>
                    CSS <span>100%</span>
                  </h3>
                  <div className={s.bar}>
                    <motion.span animate={css} />
                  </div>
                </div>
                <div className={s.progress}>
                  <h3>
                    JavaScript / TypeScript <span>80%</span>
                  </h3>
                  <div className={s.bar}>
                    <motion.span animate={js} />
                  </div>
                </div>
                <div className={s.progress}>
                  <h3>
                    React / Redux <span>70%</span>
                  </h3>
                  <div className={s.bar}>
                    <motion.span animate={react} />
                  </div>
                </div>
                <div className={s.progress}>
                  <h3>
                    RestAPI <span>70%</span>
                  </h3>
                  <div className={s.bar}>
                    <motion.span animate={rest} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
});

export default SkillsSection;
