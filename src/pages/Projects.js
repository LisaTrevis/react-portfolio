import React from "react";
import { useGlobalContext } from "../context";

const Projects = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <div onMouseOver={closeSubmenu}>
      <h2>Projects</h2>
    </div>
  );
};

export default Projects;
