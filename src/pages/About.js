import React from "react";
import { useGlobalContext } from "../context";
import Headshot from "../images/Headshot.jpg";

const About = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className="section about" onMouseOver={closeSubmenu}>
      <div className="section-title">
        <h2>About Me</h2>
      </div>
      <div className="me-info">
        <div className="img-container">
          <img src={Headshot} alt="headshot" />
        </div>
        <div className="about-info">
          <p>
            I'm a self-taught React developer with a background in sales,
            marketing, and account management. The resulting blend of hard and
            soft skills drives my focus on the user experience and facilitates
            effective interaction with a variety of teams from stakeholders and
            managers to other developers and UI/UX designers. My artistic eye
            and technical know-how combine to create delightful interfaces
            backed by clean, reusable code.
          </p>
          <p>
            As a child I loved to color, craft, play dress up - really any
            activity where I was creating something fun and beautiful. However,
            I was encouraged to focus more on my natural abilities in science,
            mathematics and spatial visualization. Web development merges these
            very different skill sets in an extremely satisfying way. Because
            the tech industry is constantly evolving, there are always new
            challenges to tackle and things to learn. I stay current through
            continued coursework and professional development. I also love to
            share my knowledge by mentoring others.
          </p>
          <p>
            When I set my mind on something, I accomplish it. My tried and true
            method involves creating a plan, breaking it down into actionable
            tasks with set deadlines, and working consistently to the end goal.
            Whether it's growing a start up to the point of being acquired by
            our biggest competitor, or making a career pivot by learning an
            entirely new industry, I'm not afraid of a challenge.
          </p>
          <p>
            I'm currently seeking a position where I can directly contribute to
            the creation and improvement of both internal and external digital
            tools and interfaces.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
