import React, { FC } from "react";
import s from "./burgerMenu.module.css";
import NavLink from "../../shared/NavLink";
import { UilMultiply } from "@iconscout/react-unicons";
import { NavLinkType } from "../../App";

type BurgerProps = {
  isBurgerMenuShowed: boolean;
  showBurgerMenu: () => void;
  navLinksState: NavLinkType[];
  setActiveBtnNav: (e: any) => void;
};

const BurgerMenu: FC<BurgerProps> = (props) => {
  const onBurgerNavClick = () => {
    props.showBurgerMenu();
  };

  const navLinksRender = () => {
    return props.navLinksState.map((navLink) => {
      return (
        <NavLink
          key={navLink.title}
          id={navLink.id}
          title={navLink.title}
          isActive={navLink.isActive}
          href={navLink.href}
          setActiveBtnNav={props.setActiveBtnNav}
          size="6rem"
          showBurgerMenu={props.showBurgerMenu}
          isBurgerMenu={true}
        />
      );
    });
  };

  return (
    <nav className={s.burgerNav}>
      <div className={s.closeButton} onClick={onBurgerNavClick}>
        <UilMultiply size={"6rem"} />
      </div>
      {navLinksRender()}
    </nav>
  );
};

export default BurgerMenu;
