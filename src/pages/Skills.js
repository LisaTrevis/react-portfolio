import React, { useState } from "react";
import { skillList } from "../data";
import { useGlobalContext } from "../context";

const Skilltype = ({ id, type, skillset }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="card" key={id}>
      <header className="skill-header">
        <h3>{type}</h3>
        <button className="skill-btn" onClick={(id) => setShowInfo(!showInfo)}>
          {showInfo ? "Hide list" : "Show list"}
        </button>
      </header>
      {showInfo && (
        <div className="skill-list">
          <p>{skillset}</p>
        </div>
      )}
    </article>
  );
};

const Skills = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <div className="skills-section" onMouseOver={closeSubmenu}>
      <h2>Skills</h2>
      <section className="skill-container">
        {skillList.map((skill) => {
          return <Skilltype key={skill.id} {...skill} />;
        })}
      </section>
    </div>
  );
};

export default Skills;
