import React, { memo, useRef } from "react";
import s from "./contactSection.module.css";
import Heading from "../../shared/Heading";
import Button from "../../shared/Button";
import { SectionWrapper } from "../../shared/SectionWrapper";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";

const ContactSection = memo(() => {
  const form = useRef();
  // const formik = useFormik({
  //   initialValues: {
  //     from_name: "",
  //     user_email: "",
  //     user_phone: "",
  //     some_additionals: "",
  //     message: "",
  //   },
  //   onSubmit: (values) => {

  //   },
  // });

  const handleClick = () => {
    emailjs
      .sendForm(
        "service_5rwdk5g",
        "template_79lqrda",
        form.current,
        "niKAnRJCetimFhpXR"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <SectionWrapper id={"contacts"} invertedColor>
      <div className={s.contactContainer}>
        <Heading>
          Contact <span>Me</span>
        </Heading>

        <form ref={form} onSubmit={handleClick} className={s.contactForms}>
          <div className={s.inputBox}>
            <div className={s.inputField}>
              <input
                type="text"
                placeholder={"Name"}
                name="from_name"
                // {...formik.getFieldProps("from_name")}
              />
              <span className={s.focus}></span>
            </div>
            <div className={s.inputField}>
              <input
                type="email"
                placeholder={"Contact E-Mail"}
                name="user_email"
                // {...formik.getFieldProps("user_email")}
              />
              <span className={s.focus}></span>
            </div>
          </div>

          <div className={s.inputBox}>
            <div className={s.inputField}>
              <input
                type="phone"
                placeholder={"Contact phone / telegram (optional)"}
                name="user_phone"
                // {...formik.getFieldProps("user_phone")}
              />
              <span className={s.focus}></span>
            </div>
            <div className={s.inputField}>
              <input
                type="text"
                placeholder={"Some additional contacts (optional)"}
                name="some_additionals"
                // {...formik.getFieldProps("some_additionals")}
              />
              <span className={s.focus}></span>
            </div>
          </div>

          <div className={s.textAreaField}>
            <textarea
              cols={30}
              rows={10}
              placeholder={"Your message"}
              name="message"

              // {...formik.getFieldProps("message")}
            ></textarea>
            <span className={s.focus}></span>
          </div>
          <input
            type="submit"
            className={s.submitButton}
            onClick={handleClick}
          />
        </form>
      </div>
    </SectionWrapper>
  );
});

export default ContactSection;
