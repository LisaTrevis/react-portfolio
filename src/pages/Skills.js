import React, { useState } from "react";
import { skillList } from "../data";
import { useGlobalContext } from "../context";

const Skills = () => {
  const { closeSubmenu } = useGlobalContext();
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="skills-section" onMouseOver={closeSubmenu}>
      <h2>Skills</h2>
      <section className="skill-container">
        {skillList.map((skill) => {
          const { id, type, desc, skillset } = skill;
          return (
            <article className="card" key={id}>
              <header className="skill-header">
                <h3>{type}</h3>
                <h4>{desc}</h4>
                <button
                  className="skill-btn"
                  onClick={(id) => setShowInfo(!showInfo)}
                >
                  {showInfo ? "Hide list" : "See list"}
                </button>
              </header>
              {showInfo && (
                <div className="skill-list">
                  <p>{skillset}</p>
                </div>
              )}
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Skills;
