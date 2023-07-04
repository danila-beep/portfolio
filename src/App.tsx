import React, {useState} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import HomeSection from './Components/HomeSection/HomeSection';
import AboutSection from './Components/AboutSection/AboutSection';
import EducationSection from "./Components/EducationSection/EducationSection";
import SkillsSection from "./Components/SkillsSection/SkillsSection";
import ContactSection from "./Components/ContactSection/ContactSection";
import Footer from "./Components/Footer/Footer";
import BurgerMenu from "./Components/BurgerMenu/BurgerMenu";
import FixedButton from "./shared/FixedButton";
import GlobalStyles from "./utils/GlobalStyles";
import ThemeSwitcherList from "./Components/ThemeSwitcherList/ThemeSwitcherList";
import {blueColorPalette} from "./shared/ColorThemes";

function App() {
    const [isActiveHome, setActiveHome] = useState(true)
    const [isActiveAbout, setActiveAbout] = useState(false)
    const [isActiveEducation, setActiveEducation] = useState(false)
    const [isActiveSkills, setActiveSkills] = useState(false)
    const [isActiveContacts, setActiveContacts] = useState(false)

    const activeHomeSetter = () => {
        setActiveHome(true)
        setActiveAbout(false)
        setActiveEducation(false)
        setActiveSkills(false)
        setActiveContacts(false)
    }
    const activeAboutSetter = () => {
        setActiveHome(false)
        setActiveAbout(true)
        setActiveEducation(false)
        setActiveSkills(false)
        setActiveContacts(false)
    }
    const activeEducationSetter = () => {
        setActiveHome(false)
        setActiveAbout(false)
        setActiveEducation(true)
        setActiveSkills(false)
        setActiveContacts(false)
    }
    const activeSkillsSetter = () => {
        setActiveHome(false)
        setActiveAbout(false)
        setActiveEducation(false)
        setActiveSkills(true)
        setActiveContacts(false)
    }
    const activeContactsSetter = () => {
        setActiveHome(false)
        setActiveAbout(false)
        setActiveEducation(false)
        setActiveSkills(false)
        setActiveContacts(true)
    }

    const [isBurgerMenuShowed, setBurgerMenuShowed] = useState(false)
    const showBurgerMenu = () => {
        setBurgerMenuShowed(!isBurgerMenuShowed)
    }

    const [globalColorPalette , setGlobalColorPalette] = useState(blueColorPalette)
    const themeSwitcher = (theme: any) => {
        setGlobalColorPalette(theme)
    }

    const [isColorMenuShowed, setColorMenuShowed] = useState(false)
    const themeMenuSetter = (value: boolean) => {
        setColorMenuShowed(value)
    }

    return (
        <div className={"App"}>
            <GlobalStyles globalColorPalette={globalColorPalette}/>
            <Header
                isActiveHome={isActiveHome}
                isActiveAbout={isActiveAbout}
                isActiveEducation={isActiveEducation}
                isActiveSkills={isActiveSkills}
                isActiveContacts={isActiveContacts}
                activeHomeSetter={activeHomeSetter}
                activeAboutSetter={activeAboutSetter}
                activeEducationSetter={activeEducationSetter}
                activeSkillsSetter={activeSkillsSetter}
                activeContactsSetter={activeContactsSetter}
                isBurgerMenuShowed={isBurgerMenuShowed}
                showBurgerMenu={showBurgerMenu}
            />
            {isBurgerMenuShowed
                ? <BurgerMenu
                    isActiveHome={isActiveHome}
                    isActiveAbout={isActiveAbout}
                    isActiveEducation={isActiveEducation}
                    isActiveSkills={isActiveSkills}
                    isActiveContacts={isActiveContacts}
                    activeHomeSetter={activeHomeSetter}
                    activeAboutSetter={activeAboutSetter}
                    activeEducationSetter={activeEducationSetter}
                    activeSkillsSetter={activeSkillsSetter}
                    activeContactsSetter={activeContactsSetter}
                    isBurgerMenuShowed={isBurgerMenuShowed}
                    showBurgerMenu={showBurgerMenu}
                />
                : undefined
            }
            <HomeSection/>
            <AboutSection/>
            <EducationSection/>
            <SkillsSection/>
            <ContactSection/>
            <Footer/>
            <FixedButton themeMenuSetter={themeMenuSetter} isColorMenuShowed={isColorMenuShowed}/>
            {isColorMenuShowed
                ? <ThemeSwitcherList themeSwitcher={themeSwitcher}/>
                : undefined
            }
        </div>
    );
}

export default App;
