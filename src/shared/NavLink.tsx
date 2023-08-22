import React, { FC } from "react";
import styled from "styled-components";

type NavLinkProps = {
  id: number;
  title: string;
  isActive: boolean;
  href: string;
  size?: string;
  setActiveBtnNav: (e: any) => void;
  isBurgerMenu?: boolean;
  showBurgerMenu?: () => void;
};

const NavLink: FC<NavLinkProps> = (props) => {
  const size = () => {
    if (props.size) {
      return props.size;
    }
    return "1.5rem";
  };

  const NavStyled = styled.a`
    font-size: ${size()};
    color: var(--text-color);
    font-weight: 500;
    margin-left: 3.5rem;
    transition: 0.3s;

    &:hover {
      color: var(--main-color);
    }
  `;

  const activeStyle = () => {
    if (props.isActive) {
      return {
        color: "var(--main-color)",
      };
    }
  };

  const onClick = (e: any) => {
    props.setActiveBtnNav(e.currentTarget.id);
    if (props.isBurgerMenu && props.showBurgerMenu) {
      props.showBurgerMenu();
    }
  };

  return (
    <NavStyled
      id={props.id.toString()}
      href={props.href}
      style={activeStyle()}
      onClick={(e: any) => onClick(e)}
    >
      {props.title}
    </NavStyled>
  );
};

export default NavLink;
