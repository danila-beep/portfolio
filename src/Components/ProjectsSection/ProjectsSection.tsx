import React, { useEffect, useState } from "react";
import s from "./projectsSection.module.css";
import Heading from "../../shared/Heading";
import { SectionWrapper } from "../../shared/SectionWrapper";
import Button from "../../shared/Button";
import { projects } from "../../entities/projects";
import { SectionType } from "../../App";
import { useInView } from "react-intersection-observer";

const ProjectsSection = (props: SectionType) => {

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
          <div className={s.projectImage}>
            <img src={project.photo} alt={project.title} />
          </div>
          <div className={s.content}>
            <h2>{project.title}</h2>
            <ul className={s.technologies}>
              {project.tags.map((tag) => {
                return <li key={tag.id}>{tag.logo}</li>;
              })}
            </ul>
            <p className={s.projectDescription}>{project.description}</p>
            <div className={s.projectBtns}>
              <Button
                title={project.buttonTitle}
                link={project.siteLink}
              ></Button>
              <Button title="Git Hub repo"></Button>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <SectionWrapper id={props.hrefId} >
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
