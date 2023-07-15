import React, { FC, UIEvent, useState } from "react";
import s from "./header.module.css";
import { UilBars } from "@iconscout/react-unicons";
import NavLink from "../../shared/NavLink";

type HeaderProps = {
  isActiveHome: boolean;
  isActiveAbout: boolean;
  isActiveEducation: boolean;
  isActiveSkills: boolean;
  isActiveContacts: boolean;
  activeHomeSetter: () => void;
  activeAboutSetter: () => void;
  activeEducationSetter: () => void;
  activeSkillsSetter: () => void;
  activeContactsSetter: () => void;
  isBurgerMenuShowed: boolean;
  showBurgerMenu: () => void;
};

const Header: FC<HeaderProps> = (props) => {
  window.onscroll = () => {
    document
      .querySelector("header")
      ?.classList.toggle(s.sticky, window.pageYOffset > 100);
  };

  return (
    <header className={s.header}>
      <a href="#" className={s.logo}>
        Danila-beep
      </a>

      <nav className={s.navbar}>
        <NavLink
          title={"Home"}
          href={"#home"}
          isActive={props.isActiveHome}
          activeSetter={props.activeHomeSetter}
        />
        <NavLink
          title={"About"}
          href={"#about"}
          isActive={props.isActiveAbout}
          activeSetter={props.activeAboutSetter}
        />
        <NavLink
          title={"Educations"}
          href={"#education"}
          isActive={props.isActiveEducation}
          activeSetter={props.activeEducationSetter}
        />
        <NavLink
          title={"Skills"}
          href={"#skills"}
          isActive={props.isActiveSkills}
          activeSetter={props.activeSkillsSetter}
        />
        <NavLink
          title={"Contacts"}
          href={"#contacts"}
          isActive={props.isActiveContacts}
          activeSetter={props.activeContactsSetter}
        />
      </nav>

      <div className={s.burger} onClick={props.showBurgerMenu}>
        <UilBars size={40} />
      </div>
    </header>
  );
};

export default Header;
