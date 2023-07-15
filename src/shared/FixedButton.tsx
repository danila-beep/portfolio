import React from "react";
import styled from "styled-components";
import { UilPalette } from "@iconscout/react-unicons";
import { randomElementFromArray } from "../utils/randomElementFromArray";
import { colorPaletteVariants } from "./ColorThemes";

type FixedButtonProps = {
  themeMenuSetter: (value: boolean) => void;
  isColorMenuShowed: boolean;
  themeSwitcher: (theme: any) => void;
};

const FixedButton = (props: FixedButtonProps) => {
  const FixedBtnStyled = styled.div`
    position: fixed;
    bottom: 2rem;
    right: 4rem;
    padding: 1rem;
    background: var(--main-color);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.5s;
    z-index: 2;

    &:hover {
      transform: scale(115%);
    }
  `;

  const themeSwitcherHandler = () => {
    props.themeSwitcher(randomElementFromArray(colorPaletteVariants));
  };

  return (
    <>
      <FixedBtnStyled onClick={themeSwitcherHandler}>
        <UilPalette size={"4rem"} color={"var(--main-bg-color)"} />
      </FixedBtnStyled>
    </>
  );
};

export default FixedButton;
