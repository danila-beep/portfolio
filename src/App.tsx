import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import HomeSection from "./Components/HomeSection/HomeSection";
import AboutSection from "./Components/AboutSection/AboutSection";
import EducationSection from "./Components/EducationSection/EducationSection";
import SkillsSection from "./Components/SkillsSection/SkillsSection";
import ContactSection from "./Components/ContactSection/ContactSection";
import Footer from "./Components/Footer/Footer";
import BurgerMenu from "./Components/BurgerMenu/BurgerMenu";
import GlobalStyles from "./utils/GlobalStyles";
import { blueColorPalette } from "./shared/ColorThemes";
import FixedButton from "./shared/FixedButton";
import ProjectsSection from "./Components/ProjectsSection/ProjectsSection";

type ThemeType = {
  "bg-color": string;
  "second-bg-color": string;
  "text-color": string;
  "main-color": string;
};

export type NavLinkNameType =
  | "Home"
  | "About"
  | "Education"
  | "Skills"
  | "Project"
  | "Contacts";
export type NavLinkType = {
  id: number;
  title: NavLinkNameType;
  isActive: boolean;
  href: string;
};

export type SectionType = {
  id: number;
  hrefId: string;
};

function App() {
  const [navLinksState, setNavLinksState] = useState<NavLinkType[]>([
    { id: 1, title: "Home", isActive: true, href: `#home` },
    { id: 2, title: "About", isActive: false, href: `#about` },
    { id: 3, title: "Education", isActive: false, href: `#education` },
    { id: 4, title: "Skills", isActive: false, href: `#skills` },
    { id: 5, title: "Project", isActive: false, href: `#projects` },
    { id: 6, title: "Contacts", isActive: false, href: `#contacts` },
  ]);

  const setActiveBtnNav = (id: any) => {
    setNavLinksState(
      navLinksState.map((navLink) => {
        if (id === navLink.id.toString()) {
          return { ...navLink, isActive: true };
        } else {
          return { ...navLink, isActive: false };
        }
      })
    );
  };

  console.log(navLinksState);

  // Burger menu
  const [isBurgerMenuShowed, setBurgerMenuShowed] = useState(false);
  const showBurgerMenu = () => {
    setBurgerMenuShowed(!isBurgerMenuShowed);
  };

  // Theme changer
  const [globalColorPalette, setGlobalColorPalette] =
    useState(blueColorPalette);
  const themeSwitcher = (theme: ThemeType) => {
    setGlobalColorPalette(theme);
  };
  const [isColorMenuShowed, setColorMenuShowed] = useState(false);
  const themeMenuSetter = (value: boolean) => {
    setColorMenuShowed(value);
  };

  // Lang changer

  return (
    <div className={"App"}>
      <GlobalStyles globalColorPalette={globalColorPalette} />
      <Header
        isBurgerMenuShowed={isBurgerMenuShowed}
        showBurgerMenu={showBurgerMenu}
        navLinksState={navLinksState}
        setActiveBtnNav={setActiveBtnNav}
      />
      {isBurgerMenuShowed ? (
        <BurgerMenu
          isBurgerMenuShowed={isBurgerMenuShowed}
          showBurgerMenu={showBurgerMenu}
          navLinksState={navLinksState}
          setActiveBtnNav={setActiveBtnNav}
        />
      ) : undefined}

      <HomeSection
        id={
          navLinksState[navLinksState.findIndex((el) => el.title === "Home")].id
        }
        hrefId={navLinksState[
          navLinksState.findIndex((el) => el.title === "Home")
        ].href.substring(1)}

      />
      <AboutSection
        id={
          navLinksState[navLinksState.findIndex((el) => el.title === "About")]
            .id
        }
        hrefId={navLinksState[
          navLinksState.findIndex((el) => el.title === "About")
        ].href.substring(1)}

      />
      <EducationSection
        id={
          navLinksState[
            navLinksState.findIndex((el) => el.title === "Education")
          ].id
        }
        hrefId={navLinksState[
          navLinksState.findIndex((el) => el.title === "Education")
        ].href.substring(1)}

      />
      <SkillsSection
        id={
          navLinksState[navLinksState.findIndex((el) => el.title === "Skills")]
            .id
        }
        hrefId={navLinksState[
          navLinksState.findIndex((el) => el.title === "Skills")
        ].href.substring(1)}

      />
      <ProjectsSection
        id={
          navLinksState[navLinksState.findIndex((el) => el.title === "Project")]
            .id
        }
        hrefId={navLinksState[
          navLinksState.findIndex((el) => el.title === "Project")
        ].href.substring(1)}

      />
      <ContactSection
        id={
          navLinksState[
            navLinksState.findIndex((el) => el.title === "Contacts")
          ].id
        }
        hrefId={navLinksState[
          navLinksState.findIndex((el) => el.title === "Contacts")
        ].href.substring(1)}

      />
      <Footer />
      <FixedButton
        themeSwitcher={themeSwitcher}
        themeMenuSetter={themeMenuSetter}
        isColorMenuShowed={isColorMenuShowed}
      />
    </div>
  );
}

export default App;
