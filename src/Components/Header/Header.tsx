import React, { FC, UIEvent, memo, useState } from "react";
import s from "./header.module.css";
import { UilBars } from "@iconscout/react-unicons";
import NavLink from "../../shared/NavLink";
import { NavLinkType } from "../../App";

type HeaderProps = {
  isBurgerMenuShowed: boolean;
  showBurgerMenu: () => void;
  navLinksState: NavLinkType[];
  setActiveBtnNav: (e: any) => void
};

const Header: FC<HeaderProps> = memo((props) => {
  window.onscroll = () => {
    document
      .querySelector("header")
      ?.classList.toggle(s.sticky, window.pageYOffset > 100);
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
        />
      );
    });
  };

  return (
    <header className={s.header}>
      <a className={s.logo}>Danila-beep</a>

      <nav className={s.navbar}>{navLinksRender()}</nav>

      <div className={s.burger} onClick={props.showBurgerMenu}>
        <UilBars size={40} />
      </div>
    </header>
  );
});

export default Header;
