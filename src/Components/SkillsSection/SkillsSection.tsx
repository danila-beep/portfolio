import React, { useEffect } from "react";
import s from "./skillsSection.module.css";
import Heading from "../../shared/Heading";
import { useInView } from "react-intersection-observer";
import { SectionWrapper } from "../../shared/SectionWrapper";

const SkillsSection = () => {
  const [ref, inView] = useInView();
  useEffect(() => {
    let progressBar10 = document.getElementById("appearance10");
    let progressBar20 = document.getElementById("appearance20");
    let progressBar30 = document.getElementById("appearance30");
    let progressBar40 = document.getElementById("appearance40");
    let progressBar50 = document.getElementById("appearance50");
    let progressBar60 = document.getElementById("appearance60");
    let progressBar70 = document.getElementById("appearance70");
    let progressBar80 = document.getElementById("appearance80");
    let progressBar90 = document.getElementById("appearance90");
    let progressBar100 = document.getElementById("appearance100");
    if (inView) {
      progressBar10?.classList.toggle(s.appear10);
      progressBar20?.classList.toggle(s.appear20);
      progressBar30?.classList.toggle(s.appear30);
      progressBar40?.classList.toggle(s.appear40);
      progressBar50?.classList.toggle(s.appear50);
      progressBar60?.classList.toggle(s.appear60);
      progressBar70?.classList.toggle(s.appear70);
      progressBar80?.classList.toggle(s.appear80);
      progressBar90?.classList.toggle(s.appear90);
      progressBar100?.classList.toggle(s.appear100);
    } else {
      progressBar10?.classList.remove(s.appear10);
      progressBar20?.classList.remove(s.appear20);
      progressBar30?.classList.remove(s.appear30);
      progressBar40?.classList.remove(s.appear40);
      progressBar50?.classList.remove(s.appear50);
      progressBar60?.classList.remove(s.appear60);
      progressBar70?.classList.remove(s.appear70);
      progressBar80?.classList.remove(s.appear80);
      progressBar90?.classList.remove(s.appear90);
      progressBar100?.classList.remove(s.appear100);
    }
  }, [inView]);

  return (
    <SectionWrapper id={"skills"} ref={ref} invertedColor>
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
                    Html <span>90%</span>
                  </h3>
                  <div className={s.bar}>
                    <span id={"appearance90"}></span>
                  </div>
                </div>
                <div className={s.progress}>
                  <h3>
                    Html <span>40%</span>
                  </h3>
                  <div className={s.bar}>
                    <span id={"appearance40"}></span>
                  </div>
                </div>
                <div className={s.progress}>
                  <h3>
                    Html <span>70%</span>
                  </h3>
                  <div className={s.bar}>
                    <span id={"appearance70"}></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={s.skillsColumn}>
            <h3 className={s.title}>Coding skills</h3>

            <div className={s.skillsBox}>
              <div className={s.skillsContent}>
                <div className={s.progress}>
                  <h3>
                    Html <span>50%</span>
                  </h3>
                  <div className={s.bar}>
                    <span id={"appearance50"}></span>
                  </div>
                </div>
                <div className={s.progress}>
                  <h3>
                    Html <span>80%</span>
                  </h3>
                  <div className={s.bar}>
                    <span id={"appearance80"}></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;
