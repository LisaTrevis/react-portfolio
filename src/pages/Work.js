import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { jobs } from "../data";
import { useGlobalContext } from "../context";

const Work = () => {
  const { closeSubmenu } = useGlobalContext();
  const [value, setValue] = useState(0);

  const { title, company, dates, duties } = jobs[value];
  return (
    <div>
      <section className="work-section" onMouseOver={closeSubmenu}>
        <h2 className="title">Experience</h2>
        <div className="center">
          <div className="btn-container">
            {jobs.map((job, index) => {
              return (
                <button
                  key={job.id}
                  onClick={() => setValue(index)}
                  className={`job-btn ${index === value && "active-btn"}`}
                >
                  {job.company}
                </button>
              );
            })}
          </div>
          <article className="job-info">
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className="job-date">{dates}</p>
            {duties.map((duty, index) => {
              return (
                <div key={index} className="job-desc">
                  <FaStar className="job-icon"></FaStar>
                  <p>{duty}</p>
                </div>
              );
            })}
          </article>
        </div>
      </section>
    </div>
  );
};

export default Work;
