import React from "react";
import Button from "../../shared/Button";
import Heading from "../../shared/Heading";
import s from "./homeSection.module.css";
import { SectionWrapper } from "../../shared/SectionWrapper";

const HomeSection = () => {
  return (
    <SectionWrapper id={"home"}>
      <div className={s.homeContainer}>
        <div className={s.homeContent}>
          <Heading>
            Hi, I`m <span>Danila Nagovicin</span>
          </Heading>

          <div className={s.textAnimate}>
            <h3>Front-End Developer</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
            assumenda atque autem consectetur cupiditate error et, ex expedita
            explicabo ipsa labore laboriosam, libero minima neque nihil nulla
            numquam optio quam quis quos ratione rem sed sit suscipit ullam vel
            velit!
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
