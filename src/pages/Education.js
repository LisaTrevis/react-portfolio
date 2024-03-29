import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { courses } from "../data";
import { useGlobalContext } from "../context";

const Courses = () => {
  const { closeSubmenu } = useGlobalContext();
  const [value, setValue] = useState(0);
  const { school, classes } = courses[value];

  return (
    <div>
      <section className="edu-section" onMouseOver={closeSubmenu}>
        <h2 className="title">Education</h2>
        <div className="center">
          <div className="btn-container">
            {courses.map((course, index) => {
              return (
                <button
                  key={course.id}
                  onClick={() => setValue(index)}
                  className={`courses-btn ${index === value && "active-btn"}`}
                >
                  {course.school}
                </button>
              );
            })}
          </div>
          <article className="courses-info">
            <h3>{school}</h3>
            <div className="courses-container">
              {classes.map((singleClass, index) => {
                return (
                  <div key={index} className="courses-desc">
                    <p>
                      <FaStar className="courses-icon"></FaStar>
                      {singleClass}
                    </p>
                  </div>
                );
              })}
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Courses;
