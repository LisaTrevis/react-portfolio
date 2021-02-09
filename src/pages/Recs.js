import React, { useState, useEffect } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { people } from "../data";
const Recs = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);
  return (
    <section className="section">
      <div className="section-name">
        <h2>Recommendations</h2>
      </div>
      <div className="recs-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, text } = person;
          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{text}</p>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FaAngleLeft></FaAngleLeft>
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FaAngleRight></FaAngleRight>
        </button>
      </div>
    </section>
  );
};

export default Recs;
