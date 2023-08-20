import React from "react";
import s from "./educationSection.module.css";
import { UilCalender } from "@iconscout/react-unicons";
import Heading from "../../shared/Heading";
import { SectionWrapper } from "../../shared/SectionWrapper";

const EducationSection = () => {
  return (
    <SectionWrapper id={"education"}>
      <div className={s.educationContainer}>
        <Heading centered>
          My <span>Education</span>
          {/* and <span>Experience</span> */}
        </Heading>

        <div className={s.educationRow}>
          <div className={s.educationColumn}>
            <h3 className={s.title}>Education</h3>
            <div className={s.educationBox}>
              <div className={s.educationContent}>
                <div className={s.timeLine}>
                  <div className={s.contentBox}>
                    <div className={s.year}>
                      <UilCalender />
                      2020 - ... | Московский государственный университет имени Кутафина
                    </div>
                    <h3>Юриспруденция (бакалавриат)</h3>
                  </div>
                </div>
              </div>
              <div className={s.educationContent}>
                <div className={s.timeLine}>
                  <div className={s.contentBox}>
                    <div className={s.year}>
                      <UilCalender />
                      2023 - ... | It-Incubator
                    </div>
                    <h3>Front-End Developer</h3>
                    <p>
                      Во время обучения мною были изучены фундаментальные
                      принципы програмирования. 
                      <br />
                      На основе опыта преподавателей я
                      смог узнать каким образом ведется коммерческая разработка,
                      а также какие приемы и инструменты используются в
                      продакшене
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className={s.educationColumn}>
            <h3 className={s.title}>Education</h3>
            <div className={s.educationBox}>
              <div className={s.educationContent}>
                <div className={s.timeLine}>
                  <div className={s.contentBox}>
                    <div className={s.year}>
                      <UilCalender />
                      2003 - 2023
                    </div>
                    <h3>Lorem ipsum.</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Consequatur, soluta.
                    </p>
                  </div>
                </div>
              </div>
              <div className={s.educationContent}>
                <div className={s.timeLine}>
                  <div className={s.contentBox}>
                    <div className={s.year}>
                      <UilCalender />
                      2003 - 2023
                    </div>
                    <h3>Lorem ipsum.</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Consequatur, soluta.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default EducationSection;
