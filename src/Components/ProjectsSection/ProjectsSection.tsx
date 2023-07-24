import React, { useState } from "react";
import s from "./projectsSection.module.css";
import Heading from "../../shared/Heading";
import { SectionWrapper } from "../../shared/SectionWrapper";
import Button from "../../shared/Button";
import { UilArrow, UilArrowRight, UilReact } from "@iconscout/react-unicons";
import ReduxIcon from "../../assets/svgs/ReduxIcon";
import TypeScriptIcon from "../../assets/svgs/TypeScriptIcon";
import JestIcon from "../../assets/svgs/JestIcon";
import StoryBookIcon from "../../assets/svgs/StoryBookIcon";
import AxiosIcon from "../../assets/svgs/AxiosIcon";
import { projects } from "../../entities/projects";
import styled from "styled-components";

const ProjectsSection = () => {
  const [filterNavItems, setFilterNavItems] = useState([
    { id: 1, title: "Native JS/TS", isActive: false, filterValue: "Native" },
    { id: 2, title: "React", isActive: true, filterValue: "React" },
    { id: 3, title: "Vue", isActive: false, filterValue: "Vue" },
    { id: 4, title: "Angular", isActive: false, filterValue: "Angular" },
  ]);

  const navItemsForRender = () => {
    return filterNavItems.map((navE) => {
      return (
        <div
          className={`${s.filterItem} ${navE.isActive ? s.active : undefined}`}
          onClick={() => {
            const newState = [...filterNavItems];
            newState.forEach((e) => (e.isActive = false));
            const searchedIndex = newState.findIndex((e) => e.id === navE.id);
            newState[searchedIndex].isActive = true;
            setFilterNavItems(newState);
          }}
        >
          {navE.title}
        </div>
      );
    });
  };

  const projectsItemsForRender = () => {
    const filteredProjects = projects.filter((filteringProject) => {
      const filterNavActive = filterNavItems.findIndex(
        (activeNav) => activeNav.isActive === true
      );
      if (
        filteringProject.filter === filterNavItems[filterNavActive].filterValue
      ) {
        return true;
      } else return false;
    });

    return filteredProjects.map((project) => {
      return (
        <div className={s.card} key={project.id}>
          <BackSideBox imageLink={project.photo}>
            <img />
          </BackSideBox>
          <div className={s.content}>
            <h2>{project.title}</h2>
            <ul className={s.technologies}>
              {project.tags.map((tag) => {
                return <li key={tag.id}>{tag.logo}</li>;
              })}
            </ul>
            <p className={s.projectDescription}>{project.description}</p>
            <Button
              title={project.buttonTitle}
              link={project.siteLink}
            ></Button>
          </div>
        </div>
      );
    });
  };

  return (
    <SectionWrapper id="projects">
      <div className={s.projectsSectionContent}>
        <Heading centered>
          My <span>Projects</span>
        </Heading>
        <div className={s.filter}>{navItemsForRender()}</div>

        <div className={s.projects}>{projectsItemsForRender()}</div>
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;

const BackSideBox = styled.div<{imageLink: string}>`
  width: 50%;
  height: 100%;
  background: var(--bg-color);
  border: 0.5rem solid var(--main-color);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  & img {
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    z-index: 1;
    background-image: ${props => {
      return `url(${props.imageLink})`
    }};
    background-size: contain;
  }
`;
