import React from 'react';
import s from "./projectsSection.module.css"
import Heading from "../../shared/Heading";

const ProjectsSection = () => {
    return (
        <section className={s.projects}>
            <Heading>My <span>Projects</span></Heading>

            <div className={s.filter}>
                <div className={s.bar}></div>
                <div className={s.filterRow}>
                    <div className="filter">HTML & CSS & Native JS/TS</div>
                    <div className="filter">React</div>
                    <div className="filter">Vue</div>
                    <div className="filter">Angular</div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;