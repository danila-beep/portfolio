import React, { useEffect } from "react";
import Button from "../../shared/Button";
import Heading from "../../shared/Heading";
import s from "./homeSection.module.css";
import { SectionWrapper } from "../../shared/SectionWrapper";
import { SectionType } from "../../App";
import { useInView } from "react-intersection-observer";

const HomeSection = (props: SectionType) => {

  return (
    <SectionWrapper id={props.hrefId}>
      <div className={s.homeContainer}>
        <div className={s.homeContent}>
          <Heading>
            <span>Danila Nagovicin</span>
          </Heading>

          <div className={s.textAnimate}>
            <h3>Front-End Разработчик</h3>
          </div>
          <p>
            Привет! Я - junior React разработчик с опытом разработки с
            использованием React, JavaScript, HTML и CSS. Я стараюсь создавать
            качественные веб-приложения, используя аккуратный и эффективный код.
            На этом сайте вы найдете примеры моих проектов, которые
            демонстрируют мои навыки и стиль разработки. Если у вас есть вопросы
            или предложения, свяжитесь со мной!
          </p>
          <div className={s.buttonBox}>
            <Button title={"Hire Me"} theme={"dark"} />
            <Button title={"Let`s talk"} theme={"light"} />
          </div>
        </div>
        <div className={s.homePhoto}></div>
      </div>
    </SectionWrapper>
  );
};

export default HomeSection;
