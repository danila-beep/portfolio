import React, { FC } from "react";
import styled from "styled-components";

type ThemesTypes = "dark" | "light";

type ButtonProps = {
  title: string;
  theme?: ThemesTypes;
};

const Button: FC<ButtonProps> = (props) => {
  const BtnStyled = styled.a`
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 2.5rem; 
    background: ${props?.theme === "dark"
      ? "var(--bg-color)"
      : "var(--main-color)"};
    border: 0.2rem solid var(--main-color);
    border-radius: 0.8rem;
    font-size: 1.8rem;
    font-weight: 600;
    letter-spacing: 0.1rem;
    color: ${props.theme === "dark" 
        ? "var(--main-color)" 
        : "var(--bg-color)"};
    z-index: 200;
    overflow: hidden;
    transition: .5s;
    cursor: pointer;

    &:hover {
      color: ${props.theme === "dark"
        ? "var(--bg-color)"
        : "var(--main-color)"};
    }
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background: ${props.theme === "dark"
        ? "var(--main-color)"
        : "var(--bg-color)"};
      z-index: -1;
      transition: 0.5s;
    }
    &:hover::before {
      width: 100%;
    }
  `;

  return <BtnStyled>{props.title}</BtnStyled>;
};

export default Button;
