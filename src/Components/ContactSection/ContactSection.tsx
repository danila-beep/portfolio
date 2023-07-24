import React from "react";
import s from "./contactSection.module.css";
import Heading from "../../shared/Heading";
import Button from "../../shared/Button";
import { SectionWrapper } from "../../shared/SectionWrapper";

const ContactSection = () => {
  return (
    <SectionWrapper id={"contacts"} invertedColor>
      <div className={s.contactContainer}>
        <Heading>
          Contact <span>Me</span>
        </Heading>

        <form action="#" className={s.contactForms}>
          <div className={s.inputBox}>
            <div className={s.inputField}>
              <input type="text" placeholder={"Full name"} />
              <span className={s.focus}></span>
            </div>
            <div className={s.inputField}>
              <input type="text" placeholder={"Full name"} />
              <span className={s.focus}></span>
            </div>
          </div>

          <div className={s.inputBox}>
            <div className={s.inputField}>
              <input type="text" placeholder={"Full name"} />
              <span className={s.focus}></span>
            </div>
            <div className={s.inputField}>
              <input type="text" placeholder={"Full name"} />
              <span className={s.focus}></span>
            </div>
          </div>

          <div className={s.textAreaField}>
            <textarea
              cols={30}
              rows={10}
              placeholder={"Your message"}
            ></textarea>
            <span className={s.focus}></span>
          </div>
        </form>
        <Button title={"Submit"} />
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
