import React from "react";
import { useGlobalContext } from "../context";
import { projects } from "../data";
import { FaLink } from "react-icons/fa";

const SingleProject = ({ id, name, url, image }) => {
  return (
    <article className="project-card">
      <div className="proj-img-cont">
        <img src={image} alt={name} />
      </div>
      <div className="proj-card-footer">
        <a href={url}>
          <FaLink />
        </a>
      </div>
    </article>
  );
};

const Projects = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className="section project-list" onMouseOver={closeSubmenu}>
      <h2 className="section-title">Projects</h2>
      <div className="projects-center">
        {projects.map((project) => {
          return <SingleProject key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
