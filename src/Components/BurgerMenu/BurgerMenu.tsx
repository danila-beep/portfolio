import React, { FC } from "react";
import s from "./burgerMenu.module.css";
import NavLink from "../../shared/NavLink";
import { UilMultiply } from "@iconscout/react-unicons";

type BurgerProps = {
  isActiveHome: boolean;
  isActiveAbout: boolean;
  isActiveEducation: boolean;
  isActiveSkills: boolean;
  isActiveProjects: boolean;
  isActiveContacts: boolean;
  activeHomeSetter: () => void;
  activeAboutSetter: () => void;
  activeEducationSetter: () => void;
  activeSkillsSetter: () => void;
  activeProjectsSetter: () => void;
  activeContactsSetter: () => void;
  isBurgerMenuShowed: boolean;
  showBurgerMenu: () => void;
};

const BurgerMenu: FC<BurgerProps> = (props) => {
  const onBurgerNavClick = () => {
    props.showBurgerMenu();
  };

  return (
    <nav className={s.burgerNav}>
      <div className={s.closeButton} onClick={onBurgerNavClick}>
        <UilMultiply size={"6rem"} />
      </div>
      <NavLink
        title={"Home"}
        href={"#home"}
        isActive={props.isActiveHome}
        activeSetter={props.activeHomeSetter}
        size={"6rem"}
        onClick={onBurgerNavClick}
      />
      <NavLink
        title={"About"}
        href={"#about"}
        isActive={props.isActiveAbout}
        activeSetter={props.activeAboutSetter}
        size={"6rem"}
        onClick={onBurgerNavClick}
      />
      <NavLink
        title={"Educations"}
        href={"#education"}
        isActive={props.isActiveEducation}
        activeSetter={props.activeEducationSetter}
        size={"6rem"}
        onClick={onBurgerNavClick}
      />
      <NavLink
        title={"Skills"}
        href={"#skills"}
        isActive={props.isActiveSkills}
        activeSetter={props.activeSkillsSetter}
        size={"6rem"}
        onClick={onBurgerNavClick}
      />
      <NavLink
        title={"Projects"}
        href={"#projects"}
        isActive={props.isActiveProjects}
        activeSetter={props.activeProjectsSetter}
      />
      <NavLink
        title={"Contacts"}
        href={"#contacts"}
        isActive={props.isActiveContacts}
        activeSetter={props.activeContactsSetter}
        size={"6rem"}
        onClick={onBurgerNavClick}
      />
    </nav>
  );
};

export default BurgerMenu;
