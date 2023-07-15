import React from "react";
import s from "./footer.module.css";
import { UilArrowUp } from "@iconscout/react-unicons";
import SocialLink from "../../shared/SocialLinks";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footerIconTop}>
        <a href="">
          <UilArrowUp size={25} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
