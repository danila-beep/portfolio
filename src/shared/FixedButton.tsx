import React from 'react';
import styled from "styled-components";
import {UilPalette} from "@iconscout/react-unicons";

type FixedButtonProps = {
    themeMenuSetter: (value: boolean) => void
    isColorMenuShowed: boolean
}

const FixedButton = (props: FixedButtonProps) => {
    const FixedBtnStyled = styled.div`
      position: fixed;
      bottom: 2rem;
      left: 4rem;
      padding: 1rem;
      background: var(--main-color);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: .5s;
      z-index: 101;
      
      &:hover {
        transform: scale(115%);
      }
    `

    const StyledListCloser = styled.div`
      position: absolute;
      top: 0;
      left: 0;
      z-index: 100;
      width: 100vw;
      height: 100vw;
      background: transparent;
    `

    const themeMenuShowForBtn = () => {
        props.themeMenuSetter(!props.isColorMenuShowed)
    }
    const themeMenuShowForAll = () => {
        props.themeMenuSetter(false)
    }

    return (
        <>
            <FixedBtnStyled onClick={themeMenuShowForBtn}>
                <UilPalette size={"4rem"} color={"var(--main-bg-color)"}/>
            </FixedBtnStyled>
            <StyledListCloser onClick={themeMenuShowForAll}/>
        </>
    );
};

export default FixedButton;