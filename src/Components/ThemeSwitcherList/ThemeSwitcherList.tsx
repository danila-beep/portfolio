import React from 'react';
import s from "./themeSwitcherList.module.css"
import {blueColorPalette, brownColorPalette, pinkColorPalette, redColorPalette} from "../../shared/ColorThemes";

type ThemeSwitcherProps = {
    themeSwitcher: (theme: any) => void
}

const ThemeSwitcherList = (props: ThemeSwitcherProps) => {


    const toBlueTheme = () => {
        props.themeSwitcher(blueColorPalette)
    }
    const toRedTheme = () => {
        props.themeSwitcher(redColorPalette)
    }
    const toBrownTheme = () => {
        props.themeSwitcher(brownColorPalette)
    }
    const toPinkTheme = () => {
        props.themeSwitcher(pinkColorPalette)
    }

    return (
        <div className={s.themesListWrapper}>
            <ul>
                <li onClick={toBlueTheme}>
                    Switch to blue color
                </li>
                <li onClick={toRedTheme}>
                    Switch to red color
                </li>
                <li onClick={toBrownTheme}>
                    Switch to brown color
                </li>
                <li onClick={toPinkTheme}>
                    Switch to pink color
                </li>
            </ul>
        </div>
    );
};

export default ThemeSwitcherList;