import React from "react";
import headShot from "../images/2021_Profile.jpg";
import { useGlobalContext } from "../context";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className="section hero" onMouseOver={closeSubmenu}>
      <div className="section-title">
        <h1>Welcome</h1>
      </div>
      <div className="hero-center">
        <article className="hero-image">
          <img src={headShot} className="headshot-img" alt="head shot" />
        </article>
        <article className="hero-info">
          <p>
            solution driven problem solver, figure out a solution independently,
            flexibile, adaptable, good communicator, team player, leader AND
            follower, learner and mentor, strong work ethic, fun to work with,
            respectful of deadlines, innovative, multiple ways to solve
            problems, honest, flexbox
          </p>
        </article>
      </div>
      <div className="footer">
        <p>Copyright &#169; 2021 Lisa Trevis. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Hero;
