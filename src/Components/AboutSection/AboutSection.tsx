import s from "./aboutSection.module.css";
import Button from "../../shared/Button";
import Heading from "../../shared/Heading";
import { SectionWrapper } from "../../shared/SectionWrapper";
import { SectionType } from "../../App";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const AboutSection = (props: SectionType) => {

  return (
    <SectionWrapper id={props.hrefId} invertedColor>
      <div className={s.aboutContainer}>
        <Heading>
          About <span>Me</span>
        </Heading>

        <div className={s.aboutRow}>
          <div className={s.photoColumn}>
            <div className={s.aboutImgWrapper}>
              <div className={s.aboutPhoto}></div>
              <div className={s.circleSpin}></div>
            </div>
          </div>

          <div className={s.contentColumn}>
            <div className={s.aboutContent}>
              <h3>Front-End Разработчик</h3>
              <p>
                Я стремлюсь к постоянному развитию и улучшению своих навыков
                разработки, изучаю новые концепции и инструменты,
                чтобы быть в курсе последних тенденций в сфере разработки. 
                <br/>
                Мне нравится работать в команде, обмениваться идеями и решать
                сложные задачи совместно. Я горжусь своими проектами, которые я
                разработал в процессе обучения и самостоятельно.
                <br/>
                Каждый проект -это возможность продемонстрировать мои навыки и творческий
                подход к разработке. Я уделяю особое внимание деталям и
                стремлюсь создавать качественные и привлекательные продукты. 
                <br/>
                Я открыт для новых вызовов и готов принять участие в интересных проектах.
                Если у вас есть идеи или предложения, я буду рад обсудить
                возможное сотрудничество.
                <br/>
                Пожалуйста, ознакомьтесь с моим портфолио и не стесняйтесь связаться со мной, если у вас есть
                вопросы или комментарии.
              </p>
            </div>
          </div>
        </div>
        <div className={s.btnBox}>
          {/* <Button title={"Read More"} /> */}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
